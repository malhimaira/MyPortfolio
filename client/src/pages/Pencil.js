import React, { useState } from "react";
import { Paper, Typography, Grid, Box, Modal } from "@mui/material";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";

function Pencil() {
  // handle modal
  let [modalTitle, setModalTitle] = useState(null);
  let [modalContent, setModalContent] = useState(null);
  let [open, setOpen] = React.useState(false);

  let handleOpen = () => setOpen(true);
  let handleClose = () => setOpen(false);

  let handleModalContent = (x) => setModalContent(x);
  let handleModalTitle = (x) => setModalTitle(x);

  const tileBG = {
    opacity: 0.5,
    filter: "grayscale(50%)",
    position: 'center',
    display: 'block',
    margin: 'auto',
    width: '100%',
    height: '100%',
  }
  
  //list of art components
  let leftArtwork = [
    { title: "SELF PORTRAIT", art: "/pencil/MaiSelf.jpg"},
    { title: "ADVERSITY", art: "/pencil/Adversity.jpg"},
    { title: "FLYNN '21", art: "/pencil/myFlynnNew.jpg" },
    { title: "FLYNN '15", art: "/pencil/myflynn1.jpeg" },
    { title: "FEATHERS", art: "/pencil/myparrot.jpg" },
    { title: "GAUNTLET", art: "/pencil/Gauntlet.jpg" },
  ];
  let rightArtwork = [
    { title: "TIME", art: "/pencil/time.jpg" },
    { title: "EYE", art: "/pencil/Eye.jpg" },
    { title: "JABBY'S TREE", art: "/pencil/Jabberwocky Tree.jpg" },
    { title: "SHADES", art: "/pencil/myshades.JPG" },
  ];

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={5} md={5}>
            <NavBar />
            <Paper elevation={0}>
              <Typography variant="h2">PENCIL</Typography>
            </Paper>
            <Modal open={open} onClose={handleClose}>
              <Paper elevation={0}>
                <img width='100%' id="modal-modal-title" src={modalContent} alt={modalTitle}/>
                <Typography id="modal-modal-description" variant="h2">
                  {modalTitle}
                </Typography>
              </Paper>
            </Modal>
            {leftArtwork.map((art) => {
              return (
                <div key={art.title} >
                  <Paper elevation={0} sx={{position:'relative', p:'0', overflow:'hidden'}} onClick={() => { handleOpen(); handleModalContent(art.art); handleModalTitle(art.title);}}>
                    <img style={tileBG} src={art.art} alt={art.title}/> 
                    <Typography variant="h2" sx={{ position: 'absolute', bottom:'15px', left:'5px'}}>
                      {art.title}
                    </Typography>
                  </Paper>
                </div>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={7} md={7}>
            {rightArtwork.map((art) => {
              return (
                <div key={art.title}>
                  <Paper elevation={0} sx={{position:'relative', p:'0', overflow:'hidden'}} onClick={() => { handleOpen(); handleModalContent(art.art); handleModalTitle(art.title);}}>
                    <img style={tileBG} src={art.art} alt={art.title}/> 
                    <Typography variant="h2" sx={{ position: 'absolute', bottom:'15px', left:'5px' }}>
                      {art.title}
                    </Typography>
                  </Paper>
                </div>
              );
            })}
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default Pencil;
