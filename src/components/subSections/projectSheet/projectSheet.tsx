import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function ProjectSheet() {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 240,
      }}
    >
      <b>PROJECT SHEET AREA</b>
      <br />
      <Typography>
        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
        laoreet.
      </Typography>
    </Paper>
  );
}
