import React, { useState } from "react";
import { Paper, Typography, Grid, Box, Modal } from "@mui/material";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";

function Paint() {
  // handle modal
  let [modalTitle, setModalTitle] = useState(null);
  let [modalContent, setModalContent] = useState(null);
  let [open, setOpen] = React.useState(false);

  let handleOpen = () => setOpen(true);
  let handleClose = () => setOpen(false);

  let handleModalContent = (x) => setModalContent(x);
  let handleModalTitle = (x) => setModalTitle(x);

  //list of art components
  let leftArtwork = [
    { title: "DAWN IN OIL", art: "/paint/myoilmount.jpeg"},
    { title: "PATHS", art: "/paint/paths.jpeg" },
    { title: "SAIL", art: "/paint/Sail.JPG" },
    { title: "BLOOM", art: "/paint/bloom.jpg" },
    { title: "BY THE BAY", art: "/paint/pinkbays.jpg" },
    { title: "MOONSTONE", art: "/paint/moonstone.jpg" },
  ];
  let rightArtwork = [
    { title: "LOSE SIGHT OF YOUR SHORE", art: "/paint/myboatfull.JPG" },
    { title: "SERENITY", art: "/paint/serenity.jpg"},
    { title: "ESCAPES", art: "/paint/Escapes.jpg" },
  ];

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: 1 }}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={6} md={5}>
            <NavBar />
            <Paper elevation={0}>
              <Typography>PAINT</Typography>
            </Paper>
            <Modal open={open} onClose={handleClose}>
              <Paper elevation={0}>
                {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                  {modalContent}
                </Typography> */}
                <img width={'100%'} id="modal-modal-title" src={modalContent} alt={modalTitle}/>
                <Typography id="modal-modal-description" variant="h2">
                  {modalTitle}
                </Typography>
              </Paper>
            </Modal>
            {leftArtwork.map((art) => {
              return (
                <div key={art.title}>
                  <Paper
                    elevation={0}
                    onClick={() => {
                      handleOpen();
                      handleModalContent(art.art);
                      handleModalTitle(art.title);
                    }}
                    sx={{backgroundImage:art.art}}
                  >
                    <Typography sx={{ fontSize: "4rem" }}>
                      {art.title}
                    </Typography>
                  </Paper>
                </div>
              );
            })}
          </Grid>
          <Grid item xs={12} sm={6} md={7}>
            {rightArtwork.map((art) => {
              return (
                <div key={art.title}>
                  <Paper
                    elevation={0}
                    onClick={() => {
                      handleOpen();
                      handleModalContent(art.art);
                      handleModalTitle(art.title);
                    }}
                  >
                    <Typography sx={{ fontSize: "4rem" }}>
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
export default Paint;
