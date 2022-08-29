import { AppBar, Toolbar, Button } from '@mui/material';

const pages = ['HOME', 'ABOUT ME', 'PAINT', 'PENCIL', 'CONTACT'];

function NavBar() {

  return (
      <AppBar sx={{ position:'sticky'}} >
        <Toolbar>
          {pages.map((val, key) => {
            return (
              <Button key={key} color="inherit">{val}</Button>
            )
          })}
        </Toolbar>
      </AppBar>
  )
}
export default NavBar;