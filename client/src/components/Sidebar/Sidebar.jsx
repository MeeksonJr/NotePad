import React from 'react';
import styles from './Sidebar.module.css';
import NoteList from './../Sidebar/NoteList'; // Adjust the path as necessary

const Sidebar = ({ addNote, deleteNote, notes, selectNote, onLogout }) => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.button} onClick={addNote}>Add Note</button>
      <button className={styles.button} onClick={deleteNote}>Delete Note</button>
      <button className={styles.button} onClick={onLogout}>Logout</button>
      <NoteList notes={notes} selectNote={selectNote} />
    </div>
  );
};

export default Sidebar;
