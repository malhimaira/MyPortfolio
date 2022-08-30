import { Paper, Typography, Grid, Box } from '@mui/material';
import NavBar from './NavBar.js'

function Pencil() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} md={5} >
            <Paper elevation={0}>
             <Typography>PENCIL</Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography>AAAA</Typography>  <Typography>allo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography>AAAA</Typography>  <Typography>allo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <NavBar/>
            <Paper elevation={0}>
              <Typography>BBB</Typography>  <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography>BBB</Typography>  <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
            <Paper>
              <Typography>BBB</Typography>  <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Pencil;