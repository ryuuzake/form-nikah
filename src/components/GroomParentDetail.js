import React from 'react';
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Detail.css';

export default function GroomParentDetail(props) {
  const { handleNext, handleBack, handleChange, values } = props;

  return (
    <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square style={{ backgroundColor: "#FBFCFD" }}>
      <div className="paper" style={{ marginTop: '32px'}}>
        <Box borderBottom={1} width="100%" pb={3} pl={6} pr={24} m={3} fontWeight="fontWeightBold">
          <Typography variant="h5" align="left">
            Identitas Orang Tua Pria
          </Typography>
        </Box>
        <Box width="100%" pb={3} pl={6} pr={24} m={3} spacing={5}>
          <form className="form" noValidate>
            <Grid container direction="row" justify="space-between">
              <Grid container direction="column" xs={12} sm={4} md={5}>
                <Grid item>
                  <Typography variant="h6" align="center">
                    Identitas Bapak
                  </Typography>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Nama Keluarga
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="maleFatherFamilyName"
                      name="maleFatherFamilyName"
                      placeholder="Nama Keluarga"
                      defaultValue={values.maleFatherFamilyName}
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
                      id="maleFatherShortName"
                      name="maleFatherShortName"
                      placeholder="Nama Kecil"
                      defaultValue={values.maleFatherShortName}
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
                      id="maleFatherBirthday"
                      name="maleFatherBirthday"
                      placeholder="DD/MM/YYYY"
                      defaultValue={values.maleFatherBirthday}
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
                      id="maleFatherReligion"
                      name="maleFatherReligion"
                      placeholder="Agama"
                      defaultValue={values.maleFatherReligion}
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
                      id="maleFatherOccupation"
                      name="maleFatherOccupation"
                      placeholder="Pekerjaan"
                      defaultValue={values.maleFatherOccupation}
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
                      id="maleFatherAddress"
                      name="maleFatherAddress"
                      placeholder="Alamat"
                      defaultValue={values.maleFatherAddress}
                      onChange={handleChange}
                      style={{ width: '95%'}}
                    />
                  </Paper>
                </Grid>
              </Grid>
              <Grid container direction="column" xs={12} sm={4} md={5}>
                <Grid item>
                  <Typography variant="h6" align="center">
                    Identitas Ibu
                  </Typography>
                </Grid>
                <Grid item className="row">
                  <Typography variant="body1">
                    Nama Keluarga
                  </Typography>
                  <Paper className="inputBase">
                    <InputBase
                      className="input"
                      id="maleMotherFamilyName"
                      name="maleMotherFamilyName"
                      placeholder="Nama Keluarga"
                      defaultValue={values.maleMotherFamilyName}
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
                      id="maleMotherShortName"
                      name="maleMotherShortName"
                      placeholder="Nama Kecil"
                      defaultValue={values.maleMotherShortName}
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
                      id="maleMotherBirthday"
                      name="maleMotherBirthday"
                      placeholder="DD/MM/YYYY"
                      defaultValue={values.maleMotherBirthday}
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
                      id="maleMotherReligion"
                      name="maleMotherReligion"
                      placeholder="Agama"
                      defaultValue={values.maleMotherReligion}
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
                      id="maleMotherOccupation"
                      name="maleMotherOccupation"
                      placeholder="Pekerjaan"
                      defaultValue={values.maleMotherOccupation}
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
                      id="maleMotherAddress"
                      name="maleMotherAddress"
                      placeholder="Alamat"
                      defaultValue={values.maleMotherAddress}
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
                <Button variant="contained" color="primary" onClick={handleNext}>
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
