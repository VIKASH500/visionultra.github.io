const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to the contacts file
const contactsFilePath = path.join(__dirname, 'contacts.json');

// API endpoint for form submissions
app.post('/api/contact', (req, res) => {
  const newContact = {
    id: Date.now(),
    ...req.body,
    date: new Date().toISOString(),
  };

  fs.readFile(contactsFilePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      console.error('Error reading contacts file:', err);
      return res.status(500).json({ message: 'Error saving contact information.' });
    }

    const contacts = data ? JSON.parse(data) : [];
    contacts.push(newContact);

    fs.writeFile(contactsFilePath, JSON.stringify(contacts, null, 2), (err) => {
      if (err) {
        console.error('Error writing to contacts file:', err);
        return res.status(500).json({ message: 'Error saving contact information.' });
      }
      console.log('Contact saved:', newContact);
      res.status(201).json({ message: 'Contact information saved successfully!' });
    });
  });
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
