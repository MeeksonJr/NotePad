import React from 'react';
import styles from './../NoteEditor/NoteEditor.module.css';

function NoteEditor({ selectedNote, updateNote }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateNote({
      ...selectedNote,
      [name]: value,
    });
  };

  return (
    <div className={styles.noteEditor}>
      {selectedNote ? (
        <>
          <input
            type="text"
            name="title"
            value={selectedNote.title}
            onChange={handleChange}
            placeholder="Title"
            className={styles.input}
          />
          <textarea
            name="content"
            value={selectedNote.content}
            onChange={handleChange}
            placeholder="Notes"
            className={styles.textarea}
          />
          <input type="file" name="image" onChange={handleChange} />
        </>
      ) : (
        <div>Select a note to edit</div>
      )}
    </div>
  );
}

export default NoteEditor;
