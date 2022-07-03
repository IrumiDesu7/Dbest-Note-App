import { NavLink } from 'react-router-dom';
import logo from '../Logo.png';

export default function SideNavbar() {
  return (
    <nav className='primary-navbar'>
      <img src={logo} alt='logo' />
      <ul>
        <li>
          <NavLink to='/'>
            <span className='active-bar'></span>Home
          </NavLink>
        </li>
        <li>
          <NavLink to='notes'>
            <span className='active-bar'></span>Notes
          </NavLink>
        </li>
        <li>
          <NavLink to='contact'>
            <span className='active-bar'></span>Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
