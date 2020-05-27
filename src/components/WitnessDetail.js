import React from 'react';
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Detail.css';

export default function WitnessDetail(props) {
  const { handleNext, handleBack, handleChange, values } = props;
  const postForm = () => {
    fetch('/form/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(res => res.json()).then(data => console.log(data));
    handleNext();
  };

  return (
    <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square style={{ backgroundColor: "#FBFCFD" }}>
      <div className="paper" style={{ marginTop: '32px'}}>
        <Box borderBottom={1} width="100%" pb={3} pl={6} pr={24} m={3} fontWeight="fontWeightBold">
          <Typography variant="h5" align="left">
            Identitas Saksi
          </Typography>
        </Box>
        <Box width="100%" pb={3} pl={6} pr={24} m={3}>
          <form className="form" noValidate>
          <Grid container direction="row" justify="space-between">
              <Grid container direction="column" xs={12} sm={4} md={5}>
                <Grid item>
                  <Typography variant="h6" align="center">
                    Saksi Pertama
                  </Typography>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Nama Keluarga
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessOneFamilyName"
                      name="witnessOneFamilyName"
                      placeholder="Nama Keluarga"
                      defaultValue={values.witnessOneFamilyName}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Nama Kecil
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessOneShortName"
                      name="witnessOneShortName"
                      placeholder="Nama Kecil"
                      defaultValue={values.witnessOneShortName}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Tempat Tanggal Lahir
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessOneBirthday"
                      name="witnessOneBirthday"
                      placeholder="DD/MM/YYYY"
                      defaultValue={values.witnessOneBirthday}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Agama
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessOneReligion"
                      name="witnessOneReligion"
                      placeholder="Agama"
                      defaultValue={values.witnessOneReligion}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Pekerjaan
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessOneOccupation"
                      name="witnessOneOccupation"
                      placeholder="Pekerjaan"
                      defaultValue={values.witnessOneOccupation}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Alamat / Kediaman Sekarang
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessOneAddress"
                      name="witnessOneAddress"
                      placeholder="Alamat"
                      defaultValue={values.witnessOneAddress}
                      onChange={handleChange}
                      style={{ width: '95%'}}
                    />
                  </Paper>
                </Grid>
              </Grid>
              <Grid container direction="column" xs={12} sm={4} md={5}>
                <Grid item>
                  <Typography variant="h6" align="center">
                    Saksi Kedua
                  </Typography>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Nama Keluarga
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessTwoFamilyName"
                      name="witnessTwoFamilyName"
                      placeholder="Nama Keluarga"
                      defaultValue={values.witnessTwoFamilyName}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Nama Kecil
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessTwoShortName"
                      name="witnessTwoShortName"
                      placeholder="Nama Kecil"
                      defaultValue={values.witnessTwoShortName}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Tempat Tanggal Lahir
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessTwoBirthday"
                      name="witnessTwoBirthday"
                      placeholder="DD/MM/YYYY"
                      defaultValue={values.witnessTwoBirthday}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Agama
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessTwoReligion"
                      name="witnessTwoReligion"
                      placeholder="Agama"
                      defaultValue={values.witnessTwoReligion}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Pekerjaan
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessTwoOccupation"
                      name="witnessTwoOccupation"
                      placeholder="Pekerjaan"
                      defaultValue={values.witnessTwoOccupation}
                      onChange={handleChange}
                    />
                  </Paper>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Alamat / Kediaman Sekarang
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="witnessTwoAddress"
                      name="witnessTwoAddress"
                      placeholder="Alamat"
                      defaultValue={values.witnessTwoAddress}
                      onChange={handleChange}
                      style={{ width: '95%'}}
                    />
                  </Paper>
                </Grid>
              </Grid>
              <Grid container justify="space-between">
                <Button variant="contained" color="secondary" onClick={handleBack}>
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={postForm}>
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </Grid>
  )
}
