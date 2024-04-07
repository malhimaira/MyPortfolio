import { AppBar, Toolbar, Button, Box, Grid } from '@mui/material';

let newpages = [
    { title: "HOME", linksTo: "../HOME" },
    { title: "ABOUT", linksTo: "../ABOUT" },
    { title: "PAINT", linksTo: "../PAINT" },
    { title: "PENCIL", linksTo: "../PENCIL" },
    { title: "CONTACT", linksTo: "../CONTACT" }
  ];
function NavBar() {
    return (
        <Box>
            <AppBar elevation={0} sx={{ position: 'relative' }} >
                <Toolbar>
                    <Grid container spacing={0} direction="row">
                        {newpages.map(val => {
                            return (
                                <Grid item xs={8} sm={6} md={4} key={val.title} >
                                    <Button href={val.linksTo}  color="inherit">{val.title}</Button>
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