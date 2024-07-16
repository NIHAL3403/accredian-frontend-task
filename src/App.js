import React from 'react';
import { Container, Button, Typography, Modal, Box, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

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
    refereeEmail: '',
    course: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://accredian-backend-task-p80a.onrender.com/api/referrals', formData);
      console.log('Referral submitted:', response.data);
      handleClose();
    } catch (error) {
      console.error('Error submitting referral:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Refer & Earn
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        Refer Now
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Referral Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Referrer Name"
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Referrer Email"
              name="referrerEmail"
              type="email"
              value={formData.referrerEmail}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Referee Name"
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Referee Email"
              name="refereeEmail"
              type="email"
              value={formData.refereeEmail}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
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
