import { AppBar, Toolbar, Button, Box } from '@mui/material';

const pages = ['HOME', 'ABOUT ME', 'PAINT', 'PENCIL', 'CONTACT'];

function NavBar() {
    return (
        <Box sx={{ flexGrow: 1, padding: 1 }}>
            <AppBar elevation={0} sx={{ position: 'relative' }} >
                <Toolbar>
                    {pages.map((val, key) => {
                        return (
                            <Button key={key} color="inherit">{val}</Button>
                        )
                    })}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default NavBar;