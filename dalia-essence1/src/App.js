
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './pages/Home';
import LetterMyself from './pages/LetterMyself';
import Library from './pages/Library';
import MyPeriod from './pages/MyPeriod';
import Solitudetime from './pages/Solitudetime';
import PostList from './Components/PostList';

function App() {
  return (
    <div className="App">
      <Router>
          <nav className='App-nav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Lettermyself">Letter Myself</Link>
            </li>
            <li>
              <Link to="/Library">Library</Link>
            </li>
            <li>
              <Link to="/MyPeriod">My Period</Link>
            </li>
            <li>
              <Link to="/solitudetime">Solitude Time</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/letter-myself" element={<LetterMyself/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/my-period" element={<MyPeriod/>}/>
            <Route path="/solitude-time" element={<Solitudetime/>}/>
          </Routes>
        </nav>
      </Router>
       <PostList />
     </div>
  );
}

export default App;
