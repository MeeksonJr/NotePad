import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import NoteEditor from './components/NoteEditor/NoteEditor';
import NotePreview from './components/NotePreview/NotePreview';
import styles from './App.module.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  // Load notes from localStorage when the app initializes
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = { id: Date.now(), title: '', content: '', image: '' };
    setNotes([...notes, newNote]);
    setSelectedNote(newNote);
  };

  const deleteNote = () => {
    const updatedNotes = notes.filter(note => note.id !== selectedNote.id);
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(updatedNote);
  };

  const selectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className={styles.App}>
      <Sidebar addNote={addNote} deleteNote={deleteNote} notes={notes} selectNote={selectNote} />
      <div className={styles.rightSection}>
        <NoteEditor selectedNote={selectedNote} updateNote={updateNote} />
        <NotePreview note={selectedNote} />
      </div>
    </div>
  );
}

export default App;
