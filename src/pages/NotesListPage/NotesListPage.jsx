
import React, { useState } from 'react';
import NoteCard from "../../components/NoteCard/NoteCard";
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const sortAscendingByDate = () => {
    const sortedNotes = [...notes].sort((a, b) => new Date(a.date) - new Date(b.date));
    setNotes(sortedNotes);
  };
  
  const sortDescendingByDate = () => {
    const sortedNotes = [...notes].sort((a, b) => new Date(b.date) - new Date(a.date));
    setNotes(sortedNotes);
    console.log(sortedNotes);
  };
  
 
  return (
    <div>
      <h2>My Notes</h2>
      <NewNoteForm addNote={addNote} />
      <button onClick={sortAscendingByDate}>Sort Ascending by Date</button>
      <button onClick={sortDescendingByDate}>Sort Descending by Date</button>
      {notes.length === 0 ? (
        <p>No Notes Yet!</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <NoteCard key={index} note={note} onDelete={() => deleteNote(index)} />
            <hr />  
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
