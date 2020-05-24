import React from 'react';
import Button from '@material-ui/core/Button';
import { InputBase, Select, MenuItem, FormControl } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Detail.css';

export default function GroomDetail(props) {
  const { handleNext, handleBack, handleChange, values } = props;

  return (
    <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square style={{ backgroundColor: "#FBFCFD" }}>
      <div className="paper">
        <Box borderBottom={1} width="100%" pb={3} pl={6} pr={24} m={3} fontWeight="fontWeightBold">
          <Typography variant="h5" align="left">
            Identitas Mempelai Pria
          </Typography>
        </Box>
        <Box width="100%" pb={3} pl={6} pr={24} m={3} spacing={5}>
          <form className="form" noValidate>
            <Grid container justify="space-between" className="row">
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Nama Keluarga
                </Typography>
                <Paper className="inputBase">
                  <InputBase
                    className="input"
                    id="maleFamilyName"
                    name="maleFamilyName"
                    placeholder="Nama Keluarga"
                    defaultValue={values.maleFamilyName}
                    onChange={handleChange}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Nama Kecil
                </Typography>
                <Paper className="inputBase">
                  <InputBase
                    className="input"
                    id="maleShortName"
                    name="maleShortName"
                    placeholder="Nama Kecil"
                    defaultValue={values.maleShortName}
                    onChange={handleChange}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid container justify="space-between" className="row">
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Tempat Tanggal Lahir
                </Typography>
                <Paper className="inputBase">
                  <InputBase
                    className="input"
                    id="maleBirthday"
                    name="maleBirthday"
                    placeholder="DD/MM/YYYY"
                    defaultValue={values.maleBirthday}
                    onChange={handleChange}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Agama
                </Typography>
                <Paper className="inputBase">
                  <InputBase
                    className="input"
                    id="maleReligion"
                    name="maleReligion"
                    placeholder="Agama"
                    defaultValue={values.maleReligion}
                    onChange={handleChange}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid container justify="space-between" className="row">
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Pekerjaan
                </Typography>
                <Paper className="inputBase">
                  <InputBase
                    className="input"
                    id="maleOccupation"
                    name="maleOccupation"
                    placeholder="Pekerjaan"
                    defaultValue={values.maleOccupation}
                    onChange={handleChange}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Alamat / Kediaman Sekarang
                </Typography>
                <Paper className="inputBase">
                  <InputBase
                    className="input"
                    id="maleAddress"
                    name="maleAddress"
                    placeholder="Alamat"
                    defaultValue={values.maleAddress}
                    onChange={handleChange}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid container justify="space-between" className="row">
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Sudah / Belum pernah Menikah
                </Typography>
                <Paper className="inputBase">
                  <FormControl style={{ width: '95%', paddingLeft: '8px' }}>
                    <Select name="maleMarried" value={values.maleMarried} onChange={handleChange}>
                      <MenuItem value="sudah">Sudah</MenuItem>
                      <MenuItem value="belum">Belum</MenuItem>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Nama Istri Terdahulu
                </Typography>
                <Paper className="inputBase">
                  <InputBase
                    className="input"
                    id="maleExName"
                    name="maleExName"
                    placeholder="Nama Istri Terdahulu"
                    defaultValue={values.maleExName}
                    onChange={handleChange}
                  />
                </Paper>
              </Grid>
            </Grid>
            <Grid container justify="space-between" className="row">
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Nama Anak yang akan di Sahkan
                </Typography>
                <Paper className="inputBase">
                  <InputBase
                    className="input"
                    id="maleChildName"
                    name="maleChildName"
                    placeholder="Nama Anak"
                    defaultValue={values.maleChildName}
                    onChange={handleChange}
                  />
                </Paper>
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
  )
}
