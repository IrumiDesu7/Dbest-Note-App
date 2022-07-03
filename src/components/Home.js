import { Link } from 'react-router-dom';
import orange from '../orange.png';

export default function Home() {
  return (
    <div className='welcome'>
      <h1>Welcome To the Best Note-App</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolorem
        molestias eveniet aperiam voluptatum veniam nihil voluptas minima, hic
        cum expedita commodi quis vero. Ipsam quae consequuntur error
        accusantium!
      </p>
      <img src={orange} alt='orange' />
      <Link to='notes'>
        <button>Go to Notes</button>
      </Link>
    </div>
  );
}
