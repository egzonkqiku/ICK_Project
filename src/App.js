import './App.css';
import Routes from './Components/Routes'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="NavBarStyle"> 
        <Link className="linkStyle" to='/nature'>Nature</Link>
        <Link className="linkStyle" to='/travel'>Travel</Link>
        <Link className="linkStyle" to='/film'>Film</Link>
        <Link className="linkStyle" to='/favourites'>Favourites</Link>
      </div>
        <Routes/>
    </div>
  );
}

export default App;