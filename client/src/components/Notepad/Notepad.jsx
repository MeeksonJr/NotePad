import React, { useState, useEffect } from 'react';
import Sidebar from './../Sidebar/Sidebar';
import NoteEditor from './../NoteEditor/NoteEditor';
import NotePreview from './../NotePreview/NotePreview';

const Notepad = ({ onLogout }) => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = { id: Date.now(), title: '', content: '', image: '' };
    setNotes([...notes, newNote]);
    setSelectedNote(newNote);
  };

  const deleteNote = () => {
    if (!selectedNote) return;
    const updatedNotes = notes.filter(note => note.id !== selectedNote.id);
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  const selectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar
        addNote={addNote}
        deleteNote={deleteNote}
        notes={notes}
        selectNote={selectNote}
        onLogout={onLogout}
      />
      <div style={{ flex: 1 }}>
        <NoteEditor selectedNote={selectedNote} updateNote={updateNote} />
        <NotePreview note={selectedNote} />
      </div>
    </div>
  );
};

export default Notepad;
