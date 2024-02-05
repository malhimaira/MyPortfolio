import React, { useState } from 'react';
import { Paper, Typography, Grid, Box, Modal } from '@mui/material';
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'

function Paint() {

  // handle modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //list of art components
  const leftArtwork = [{"title":"Ltest1","art":"xx"},{"title":"Ltest2","art":"xx"},{"title":"Ltest3","art":"xx"}];
  const rightArtwork = [{"title":"Rtest1","art":"xx"},{"title":"Rtest2","art":"xx"},{"title":"Rtest3","art":"xx"}];

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} md={5} >
            <NavBar/>
            <Paper elevation={0}>
             <Typography>PAINT</Typography>
            </Paper>
            {leftArtwork.map(function(art, idL){
              return (
              <div>
                <Paper key={idL} elevation={0} onClick={handleOpen}>
                  <Typography sx={{fontSize:'8rem'}}>{art.title}</Typography>  
                  </Paper>
                <Modal open={open} onClose={handleClose}>
                  <Paper>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      {art.art}
                    </Typography>
                    <Typography id="modal-modal-description" variant="h2" >
                      {art.title}
                    </Typography>
                  </Paper>
                </Modal>
              </div>)
            })}
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            {rightArtwork.map(function(art, idR){
                return (
                <div>
                  <Paper key={idR} elevation={0} onClick={handleOpen}>
                    <Typography sx={{fontSize:'8rem'}}>{art.title}</Typography>  
                    </Paper>
                  <Modal open={open} onClose={handleClose}>
                    <Paper>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        {art.art}
                      </Typography>
                      <Typography id="modal-modal-description" variant="h2" >
                        {art.title}
                      </Typography>
                    </Paper>
                  </Modal>
                </div>)
              })}
            <Footer/>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
export default Paint;