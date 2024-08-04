import express from 'express';
import { connectDB, getClient } from './db.js';
import Note from './Note.js'; // Import your Note model

const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Get notes for a user
app.get('/notes/:username', async (req, res) => {
    const username = req.params.username;
    const notes = await Note.find({ username });
    res.json(notes);
});

// Add a note
app.post('/notes', async (req, res) => {
    const newNote = new Note(req.body);
    await newNote.save();
    res.status(201).json(newNote);
});

// Update a note
app.put('/notes/:id', async (req, res) => {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedNote);
});

// Delete a note
app.delete('/notes/:id', async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// Example endpoint to test the server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
