import React, { useState } from 'react';
import axios from 'axios';


function CertificateGenerator() {
    const [file, setFile] = useState(null);
    const [links, setLinks] = useState([]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:4000/api/certificates/generate', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Certificates generated', response.data);
            setLinks(response.data.links); // Save the download links to state
        } catch (error) {
            console.error('Error generating certificates:', error);
        }
    };

    return (
        <div style={{ marginTop: "20%" }}>

            <div class="input-group mb-3">
                <input type="file" class="form-control" id="inputGroupFile02" onChange={handleFileChange} accept=".xlsx" />
                <label class="input-group-text" for="inputGroupFile02"></label>
            </div>
            <button type="button" class="btn btn-primary" onClick={handleSubmit} style={{ marginTop: "10%" }}>Génerer les certificats</button>
            {links.map(link => (
                <div key={link}><a href={link} target="_blank" rel="noopener noreferrer">Ouvrir le certificat</a></div>
            ))}
        </div>
    );
}

export default CertificateGenerator;
