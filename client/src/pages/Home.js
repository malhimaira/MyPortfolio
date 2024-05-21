import { Paper, Typography, Grid, Box, styled } from '@mui/material';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js'

const BaseWindow = styled(Paper)({
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  overflow: 'hidden'
});

const Boat = styled(BaseWindow)({
  height: '700px',
  backgroundPosition: '250px',
  backgroundImage: 'url(/paint/myboat.JPG)',
});

function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} md={7} >
            <NavBar />
            <Paper elevation={0}>
              <Typography>AAAA</Typography>  <Typography>allo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography>AAAA</Typography>  <Typography>allo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Boat></Boat>
            <Paper elevation={0}>
              <Typography>BBB</Typography>  <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Home;