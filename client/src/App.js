import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
       <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
