import React from 'react';
import styles from './../NotePreview/NotePreview.module.css';

function NotePreview({ note }) {
  return (
    <div className={styles.notePreview}>
      {note ? (
        <>
          <h2 className={styles.title}>{note.title}</h2>
          <p className={styles.content}>{note.content}</p>
          {note.image && <img src={note.image} alt="Note" className={styles.image} />}
        </>
      ) : (
        <div>Select a note to preview</div>
      )}
    </div>
  );
}

export default NotePreview;
