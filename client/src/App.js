import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Paint from './components/Paint.js';
import Pencil from './components/Pencil.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

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
