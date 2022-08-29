import { Paper, Typography, Grid, Box } from '@mui/material';

function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 1 }} textAlign='left'>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} sm={6} md={6} >
            <Paper elevation={0}>
              <Typography>me</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}  >
            <Paper>
              <Typography>me</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}  >
            <Paper>
              <Typography>me</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}  >
            <Paper>
              <Typography>me</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Home;