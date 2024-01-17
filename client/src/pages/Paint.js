import React, { useState } from 'react';
import { Paper, Typography, Grid, Box, Modal } from '@mui/material';
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'

function Paint() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} md={5} >
            <NavBar/>
            <Paper elevation={0}>
             <Typography>PAINT</Typography>
            </Paper>
            <Paper elevation={0} onClick={handleOpen}>
              <Typography>AAAA</Typography>  <Typography>allo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
            <Modal
              open={open}
              onClose={handleClose}
            >
              <Paper>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description">
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Paper>
          </Modal>
            <Paper elevation={0}>
              <Typography>AAAA</Typography>  <Typography>allo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            <Paper elevation={0}>
              <Typography>BBB</Typography>  <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography>BBB</Typography>  <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography>BBB</Typography>  <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>me</Typography>   <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>  <Typography>Helo</Typography>
            </Paper>
            <Footer/>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Paint;