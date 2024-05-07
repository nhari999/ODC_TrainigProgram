const express = require('express')
const app = express()
const Model = require("./Models/User")
const cors = require('cors');
const Statistic = require("./Models/Statistics");
const StatisticMonth = require("./Models/StatisticMonth")
const Coordinator = require('./Models/coordinators');
const Participant = require("./Models/participants")
const TrainerStatistic = require("./Models/trainersStatistic")
const ProgramStatistic = require("./Models/programsStatistic")
const multer = require('multer'); // For file uploads
const readFile = require('read-excel-file/node');
const { PDFDocument, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/OrangeDBVersion0", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors());
app.use(express.json());
const upload = multer({ dest: 'uploads/' }); // Temporary upload directory
app.use('/certificates', express.static(path.join(__dirname, 'certificates'))); // Serve static files

app.get('/msg', (req, res) => {
  res.send("Welcome To Authentication !");
});
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, "SecretToken", (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      } else {
        return res.sendStatus(403);
      }
    }
    req.user = user;
    next();
  });
}

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Authenticated user', user: req.user });
});

app.post('/insert', async (req, res) => {
  try {
    const { Username, Email, Password, Role } = req.body;
    const existingUser = await Model.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email Already Exists !' });
    }
    const newUser = new Model({
      Username,
      Email,
      Password,
      Role
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

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
app.post('/Login', async (req, res) => {
  const User = await Model.findOne({
    Email: req.body.Email,
    Password: req.body.Password,
  })
  if (User) {
    const token = jwt.sign(
      {
        Email: User.Email,
        Password: User.Password,
      }
      , "SecretToken")
    return res.json({ status: "ok", User: token })
  }
  else {
    return res.json({ status: "Error Occured User Not Found !", User: false })
  }

})

app.get('/statistics', async (req, res) => {
  try {
    // Fetch data from the 'statistic' collection
    const statistics = await Statistic.find();

    // If data found, send it as response
    if (statistics.length > 0) {
      return res.status(200).json({ statistics });
    } else {
      return res.status(404).json({ error: 'No statistics found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/statisticsMonth', async (req, res) => {
  try {
    // Fetch data from the 'statisticsMonth' collection
    const statisticsMonth = await StatisticMonth.find({}, { _id: 0, mois: 1, userGain: 1 });

    // If data found, send it as response
    if (statisticsMonth.length > 0) {
      return res.status(200).json({ statisticsMonth });
    } else {
      return res.status(404).json({ error: 'No statistics found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/createCoordinator', async (req, res) => {
  try {
    // Extract data from the request body
    const { fullName, email, phoneNumber } = req.body;

    // Create a new coordinator instance
    const newCoordinator = new Coordinator({
      fullName,
      email,
      phoneNumber
    });

    // Save the new coordinator to the database
    await newCoordinator.save();

    // Send a success response
    res.status(201).json({ message: 'Coordinator created successfully', coordinator: newCoordinator });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/deleteCoordinator/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the coordinator by ID and delete it
    const deletedCoordinator = await Coordinator.findByIdAndDelete(id);

    if (!deletedCoordinator) {
      return res.status(404).json({ error: 'Coordinator not found' });
    }

    res.status(200).json({ message: 'Coordinator deleted successfully', coordinator: deletedCoordinator });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/coordinators', async (req, res) => {
  try {
    // Fetch data from the 'coordinators' collection using the model
    const coordinatorsData = await Coordinator.find();

    // If data found, send it as response
    if (coordinatorsData.length > 0) {
      return res.status(200).json({ coordinators: coordinatorsData });
    } else {
      return res.status(404).json({ error: 'No coordinators found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/participants', async (req, res) => {
  try {
    // Fetch data from the 'participants' collection using the model
    const participantsData = await Participant.find();

    // If data found, send it as response
    if (participantsData.length > 0) {
      return res.status(200).json({ participants: participantsData });
    } else {
      return res.status(404).json({ error: 'No participants found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/TrainersStatistic', async (req, res) => {
  try {
    const trainersData = await TrainerStatistic.find(); // Fetch data from TrainerStatistic collection


    // Combine and send data from both collections as a single response
    res.json({ trainers: trainersData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/programsStatistic', async (req, res) => {
  try {

    const programsData = await ProgramStatistic.find(); // Fetch data from ProgramStatistic collection

    // Combine and send data from both collections as a single response
    res.json({ programsData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});



// Controller function to insert data into the Statistic model
const insertStatistic = async (req, res) => {
  try {
    // Insert each document from the data array into the Statistic collection
    const { year, participants, averageScore, userGain, nombreAdmis, AgeRange } = req.body
    const statistics = new Statistic({ year, participants, averageScore, userGain, nombreAdmis, AgeRange })
    const newStatitic = await statistics.save()
    res.status(201).json(newStatitic)


  } catch (error) {
    return { success: false, error: error.message };
  }
};

app.post("/insertstatistic", insertStatistic)



const insertStatisticMonth = async (req, res) => {
  try {
    const { mois, userGainMonth } = req.body;
    const newStatistic = new StatisticMonth({ mois, userGainMonth }); // Use StatisticMonth model here
    const newStatisticSaved = await newStatistic.save(); // Save the new statistic
    res.status(201).json(newStatisticSaved);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

app.post("/insertstatisticMonth", insertStatisticMonth);

const insertcoordinatorsAccount = async (req, res) => {
  try {
    const { fullName, email, phoneNumber } = req.body;
    const newStatistic = new StatisticMonth({ fullName, email, phoneNumber }); // Use StatisticMonth model here
    const newAccountSaved = await newStatistic.save(); // Save the new statistic
    res.status(201).json(newAccountSaved);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

app.post("/coordinatorsAccount", insertcoordinatorsAccount);


const port = 4000;
app.listen(port, () => {
  console.log(`Server Is Running On Port ${port}`)
});





