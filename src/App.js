import { Routes, Route } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Home from './components/Home';
import Notes from './components/Notes';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <>
      <SideNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='notes' element={<Notes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
