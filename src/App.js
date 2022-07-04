import { Routes, Route } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Home from './components/Home';
import Notes from './components/Notes';
import NotFound from './components/NotFound';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <SideNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='notes' element={<Notes />}>
          <Route path=':notesId' element={<Notes />} />
        </Route>
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
