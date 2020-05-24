import React from 'react';
import Button from '@material-ui/core/Button';
import { InputBase, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Detail.css';

export default function MarriageDetail(props) {
  const { handleNext, handleBack, handleChange, values } = props;

  return (
    <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square style={{ backgroundColor: "#FBFCFD" }}>
        <div className="paper">
          <Box borderBottom={1} width="100%" pb={3} pl={6} pr={24} m={3} fontWeight="fontWeightBold">
            <Typography variant="h5" align="left">
              Detail Pelaksanaan Pernikahan
            </Typography>
          </Box>
          <Box width="100%" pb={3} pl={6} pr={24} m={3}>
            <form className="form" noValidate>
              <Grid container className="row">
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="body1">Tanggal</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="date"
                      name="date"
                      placeholder="DD/MM/YYYY"
                      defaultValue={values.date}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
              </Grid>
              <Grid container className="row">
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="body1">Lokasi</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="location"
                      name="location"
                      placeholder="Lokasi"
                      defaultValue={values.location}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
              </Grid>
              <Grid container className="row">
                <Grid item xs={12} sm={6} md={6}>
                  <Typography variant="body1">Status Kewarganegaraan</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <RadioGroup name="nationality" defaultValue={values.nationality} onChange={handleChange}>
                    <FormControlLabel value="WNI" control={<Radio color="primary" />} label="Warganegara Indonesia" />
                    <FormControlLabel value="WNA" control={<Radio color="primary" />} label="Warganegara Asing" />
                    <FormControlLabel value="-" control={<Radio color="primary" />} label="Tanpa Kewarganegaraan" />
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid container justify="space-between" className="row">
                <Button variant="contained" color="secondary" className="submit" onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" color="primary" className="submit" onClick={handleNext}>
                  Next
                </Button>
              </Grid>
            </form>
          </Box>
        </div>
      </Grid>
  );
}