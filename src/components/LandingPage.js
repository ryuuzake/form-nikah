import React from 'react';
import Landing from '../images/landing.jpg';
import { Typography, makeStyles, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  image: {
    background: `url(${Landing})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  jumbotron: {
    marginTop: theme.spacing(24),
    marginBottom: theme.spacing(8),
    color: 'white',
    textAlign: 'center',
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.image}>
      <Grid item xs={12}>
        <Typography variant="h2" className={classes.jumbotron}>
          Selamat Datang<br></br>
          Di Website Form Pernikahan
        </Typography>
        <Typography variant="body1" style={{ color: 'white', textAlign: 'center' }}>
          Isi Form Anda Sekarang
        </Typography>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button variant="contained" color="primary" onClick={props.handleLanding}>
            Isi Form
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}
