import { Link, Outlet } from 'react-router-dom';

export default function Sidebar(props) {
  const noteElements = props.notes.map((note) => (
    <Link
      to={`${note.body.split('\n')[0]}`}
      key={note.id}
      className={`title ${
        note.id === props.currentNote.id ? 'selected-note' : ''
      }`}
      onClick={() => props.setCurrentNoteId(note.id)}
    >
      <h4 className='text-snippet'>{note.body.split('\n')[0]}</h4>
      <p className='description'>{note.body.split('\n')[1]}</p>
      <p className='description'>{note.date}</p>
      <button
        className='delete-btn'
        onClick={(event) => props.deleteNote(event, note.id)}
      >
        <i className='gg-trash trash-icon'></i>
      </button>
    </Link>
  ));
  return (
    <section className='pane sidebar'>
      <div className='sidebar--header'>
        <h3>Notes</h3>
        <button className='new-note' onClick={props.newNote}>
          Create Note
        </button>
      </div>
      {noteElements}
      <Outlet />
    </section>
  );
}
