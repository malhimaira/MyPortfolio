import { AppBar, Toolbar, Button, Box, Grid } from '@mui/material';

const pages = ['HOME', 'ABOUT', 'PAINT', 'PENCIL', 'CONTACT'];

function NavBar() {
    return (
        <Box>
            <AppBar elevation={0} sx={{ position: 'relative' }} >
                <Toolbar>
                    <Grid container spacing={0} direction="row">
                        {pages.map((val, key) => {
                            return (
                                <Grid item xs={8} sm={6} md={4} >
                                    <Button href={val} key={key}  color="inherit">{val}</Button>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default NavBar;