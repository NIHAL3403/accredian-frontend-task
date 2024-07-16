import React, { useState } from 'react';
import { Button, Container, Typography, Modal, Box, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Refer & Earn
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Referral Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Your Name"
              name="referrerName"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Your Email"
              name="referrerEmail"
              type="email"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Friend's Name"
              name="refereeName"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Friend's Email"
              name="refereeEmail"
              type="email"
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
