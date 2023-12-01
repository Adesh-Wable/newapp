import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Ads from './Component/Ads';
import TableChart from './Component/TableChart';
import TextAdForm from './Component/TextAdForm';
import MediaAdForm from './Component/MediaAdForm';
import '../src/Component/Style/NewApp.css'

function App() {
  return (
    <div className="App">
    <Router>
    <nav>
            <label className="logo">APP LOGO</label>
            <ul>
              <li> <Link to={'/'}>DASHBOARD</Link></li>
              <li><Link to={'/createad'}>Create Ads</Link></li>
            </ul>
        </nav>
    <Routes>
      <Route path='/' element={<TableChart/>} />
      <Route path='/createad' element={<Ads/>} />
      <Route path='/textadform' element={<TextAdForm/>} />
      <Route path='/mediaadform' element={<MediaAdForm/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
