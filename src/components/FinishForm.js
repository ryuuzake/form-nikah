import React from 'react';
import { Button, Grid, Typography, makeStyles } from '@material-ui/core';
import Closing from '../images/closing.jpg';
import './Detail.css';

const useStyles = makeStyles((theme) => ({
  image: {
    background: `url(${Closing})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  jumbotron: {
    marginTop: theme.spacing(30),
    marginBottom: theme.spacing(8),
    color: 'white',
    textAlign: 'center',
  },
}));

export default function FinishForm(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.image}>
      <Grid item xs={8}>
        <Typography variant="h2" className={classes.jumbotron}>
          Selamat<br></br>
          Anda telah mengisi<br></br>
          Form Pernikahan
        </Typography>
        <Typography variant="body1" style={{ color: 'white', textAlign: 'center' }}>
          Lihat Seluruh Hasil Rekap Form
        </Typography>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button variant="contained" color="primary" onClick={props.handleLanding}>
            Hasil Rekap Form
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}
