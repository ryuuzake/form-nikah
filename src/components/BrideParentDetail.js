import React from 'react';
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Detail.css';

export default function BrideParentDetail(props) {
  const { handleNext, handleBack, handleChange, values } = props;

  return (
    <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square style={{ backgroundColor: "#FBFCFD" }}>
      <div className="paper" style={{ marginTop: '32px'}}>
        <Box borderBottom={1} width="100%" pb={3} pl={6} pr={24} m={3} fontWeight="fontWeightBold">
          <Typography variant="h5" align="left">
            Identitas Orang Tua Wanita
          </Typography>
        </Box>
        <Box width="100%" pb={3} pl={6} pr={24} m={3}>
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
                      id="femaleFatherFamilyName"
                      name="femaleFatherFamilyName"
                      placeholder="Nama Keluarga"
                      defaultValue={values.femaleFatherFamilyName}
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
                      id="femaleFatherShortName"
                      name="femaleFatherShortName"
                      placeholder="Nama Kecil"
                      defaultValue={values.femaleFatherShortName}
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
                      id="femaleFatherBirthday"
                      name="femaleFatherBirthday"
                      placeholder="DD/MM/YYYY"
                      defaultValue={values.femaleFatherBirthday}
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
                      id="femaleFatherReligion"
                      name="femaleFatherReligion"
                      placeholder="Agama"
                      defaultValue={values.femaleFatherReligion}
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
                      id="femaleFatherOccupation"
                      name="femaleFatherOccupation"
                      placeholder="Pekerjaan"
                      defaultValue={values.femaleFatherOccupation}
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
                      id="femaleFatherAddress"
                      name="femaleFatherAddress"
                      placeholder="Alamat"
                      defaultValue={values.femaleFatherAddress}
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
                      id="femaleMotherFamilyName"
                      name="femaleMotherFamilyName"
                      placeholder="Nama Keluarga"
                      defaultValue={values.femaleMotherFamilyName}
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
                      id="femaleMotherShortName"
                      name="femaleMotherShortName"
                      placeholder="Nama Kecil"
                      defaultValue={values.femaleMotherShortName}
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
                      id="femaleMotherBirthday"
                      name="femaleMotherBirthday"
                      placeholder="DD/MM/YYYY"
                      defaultValue={values.femaleMotherBirthday}
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
                      id="femaleMotherReligion"
                      name="femaleMotherReligion"
                      placeholder="Agama"
                      defaultValue={values.femaleMotherReligion}
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
                      id="femaleMotherOccupation"
                      name="femaleMotherOccupation"
                      placeholder="Pekerjaan"
                      defaultValue={values.femaleMotherOccupation}
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
                      id="femaleMotherAddress"
                      name="femaleMotherAddress"
                      placeholder="Alamat"
                      defaultValue={values.femaleMotherAddress}
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
