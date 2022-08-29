import { Paper, Typography, Grid, Box } from '@mui/material';

function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid container spacing={2} direction="row">
          <Grid item container spacing={2} direction="column">
            <Grid item xs={12} sm={6} md={6} direction="column">
              <Paper elevation={0} >
                <Typography>me</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} direction="row">
              <Paper>
                <Typography>me</Typography>  <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} direction="row" >
              <Paper>
                <Typography>me</Typography>  <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6} direction="row">
              <Paper elevation={0} >
                <Typography>me</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Home;