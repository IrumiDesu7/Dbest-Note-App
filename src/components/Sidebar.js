import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import leftArrow from './left.svg';

export default function Sidebar(props) {
  const [isOpen, setIsOpen] = useState('');
  const [rotate, setRotate] = useState('');

  const toggleNavbar = () => {
    setIsOpen(isOpen === '' ? 'hidden' : '');
    setRotate(isOpen === '' ? 'rotate' : '');
  };

  const noteElements = props.notes.map((note) => (
    <Link to={`${note.id}`} key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? 'selected-note' : ''
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className='text-snippet'>{note.body.split('\n')[0]}</h4>
        <p className='description'>{note.body.split('\n')[1]}</p>
        <p className='date'>{note.date}</p>
        <button
          className='delete-btn'
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <i className='gg-trash trash-icon'></i>
        </button>
      </div>
    </Link>
  ));
  useEffect(() => {
    console.log('useEffect in action');
  });
  return (
    <section className={`pane sidebar ${isOpen}`}>
      <div className='sidebar--header'>
        <button className='new-note' onClick={props.newNote}>
          Create Note
        </button>
        <hr />
        <h3>Notes</h3>
        <button onClick={toggleNavbar} className='hide-navbar'>
          <img
            className={`${rotate}`}
            src={leftArrow}
            alt='arrow to hide/show navbar'
          />
        </button>
        <hr />
      </div>
      {noteElements}
    </section>
  );
}
