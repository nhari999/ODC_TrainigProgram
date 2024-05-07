const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer'); // For file uploads
const readFile = require('read-excel-file/node');
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');
const mongoose = require("mongoose");
const Model = require("./Model/User");
const jwt = require('jsonwebtoken');

mongoose.connect("mongodb://127.0.0.1:27017/OrangeDBVersion0", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' }); // Temporary upload directory

app.use('/certificates', express.static(path.join(__dirname, 'certificates'))); // Serve static files

// User login route exactly as provided without JWT
app.post('/login', async (req, res) => {
  const { Email, Password } = req.body;
  const user = await Model.findOne({ Email, Password });
  if (user) {
      res.json({ status: "ok", User: "Logged in successfully" });
  } else {
      res.status(401).json({ status: "Error Occurred User Not Found!", User: false });
  }
});


// end of login function

app.post('/api/certificates/generate', upload.single('file'), async (req, res) => {
    const filePath = req.file.path;
    const certificateTemplatePath = path.join(__dirname, 'Certificat.png'); // Path to your PNG template

    try {
        const pdfDoc = await PDFDocument.create();
        const templateBytes = fs.readFileSync(certificateTemplatePath);
        const templateImage = await pdfDoc.embedPng(templateBytes);
        const templateDims = templateImage.scale(1);

        const rows = await readFile(filePath);
        const links = [];

        for (const [index, row] of rows.entries()) {
            if (index === 0) continue; // Skip headers
            const [name, trainingProgram, date] = row;
            const page = pdfDoc.addPage([templateDims.width, templateDims.height]);
            
            page.drawImage(templateImage, {
                x: 0,
                y: 0,
                width: templateDims.width,
                height: templateDims.height,
            });

            const fontSize = 35;
            page.drawText(` ${name}`, { x: 900, y: 650, size: fontSize, color: rgb(0, 0, 0) });
            page.drawText(` ${trainingProgram}`, { x: 900, y: 550, size: fontSize, color: rgb(0, 0, 0) });
            page.drawText(` ${date}`, { x: 900, y: 450, size: fontSize, color: rgb(0, 0, 0) });

            const pdfBytes = await pdfDoc.save();
            const fileName = `certificate_${name.replace(/\s+/g, '_')}.pdf`;
            const outputPath = path.join(__dirname, 'certificates', fileName);
            fs.writeFileSync(outputPath, pdfBytes);

            const link = `http://localhost:4000/certificates/${fileName}`;
            links.push(link);
        }

        res.json({ message: 'Certificates generated', links });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Failed to generate certificates: ' + error.message);
    } finally {
        fs.unlinkSync(filePath); // Clean up uploaded file
    }
});

// Additional routes and middleware...
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

