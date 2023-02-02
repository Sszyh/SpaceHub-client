import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
          placeholder='Title'
        />
        <TextField
          required
          id="outlined-required"
          label="Image"
          placeholder='image_url'
        />

        <TextField
          id="outlined-required"
          label="Country"          
        />

         <TextField
          id="outlined-required"
          label="Street"          
        />

        <TextField
          id="outlined-required"
          label="City"          
        />

        <TextField
          id="outlined-required"
          label="Price/day"          
        />

        <TextField
          id="outlined-required"
          label="Description"          
        />

      </div>
   
    </Box>
  );
}