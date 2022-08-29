import logo from '../static/logo.svg';
import {Typography} from '@mui/material';

function Home(){
    return(
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" height={75}/>
        <Typography variant="h1">
          Edit <code>src/App.js</code> and save to reload.
        </Typography>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    )
}
export default Home;