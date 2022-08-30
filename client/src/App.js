import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Paint from './pages/Paint.js';
import Pencil from './pages/Pencil.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/HOME' element={<Home />} />
        <Route path='/ABOUT' element={<About />} />
        <Route path='/PAINT' element={<Paint />} />
        <Route path='/PENCIL' element={<Pencil />} />
        <Route path='/CONTACT' element={<Contact />} />
      </Routes>
    </div>
  );
}
export default App;
