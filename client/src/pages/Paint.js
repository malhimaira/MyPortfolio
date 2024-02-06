import React, { useState } from "react";
import { Paper, Typography, Grid, Box, Modal } from "@mui/material";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";

function Paint() {
  // handle modal
  const [modalTitle, setModalTitle] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModalContent = (x) => setModalContent(x);
  const handleModalTitle = (x) => setModalTitle(x);

  //list of art components
  const leftArtwork = [
    { title: "Ltest1", art: "x1" },
    { title: "Ltest2", art: "x2" },
    { title: "Ltest3", art: "x3" },
  ];
  const rightArtwork = [
    { title: "Rtest1", art: "x4" },
    { title: "Rtest2", art: "x5" },
    { title: "Rtest3", art: "x6" },
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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {modalContent}
                </Typography>
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
