import React from 'react';
import styles from './NoteList.module.css';

function NoteList({ notes, selectNote }) {
  return (
    <div className={styles.noteList}>
      {notes.map(note => (
        <div
          key={note.id}
          className={styles.noteItem}
          onClick={() => selectNote(note)}
        >
          {note.title || 'Untitled Note'}
        </div>
      ))}
    </div>
  );
}

export default NoteList;
