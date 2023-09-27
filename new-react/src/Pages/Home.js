import logo from '../logo.svg';
import '../App.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/Info">
          Info
        </Link>
      </header>
    </div>
  );
}

export default Home;
