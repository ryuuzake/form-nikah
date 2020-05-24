import React from 'react';
import Button from '@material-ui/core/Button';
import { InputBase, Select, MenuItem, FormControl } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Detail.css';

export default function BrideDetail(props) {
  const { handleNext, handleBack, handleChange, values } = props;

  return (
    <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square style={{ backgroundColor: "#FBFCFD" }}>
      <div className="paper">
        <Box borderBottom={1} width="100%" pb={3} pl={6} pr={24} m={3} fontWeight="fontWeightBold">
          <Typography variant="h5" align="left">
            Identitas Mempelai Wanita
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
                    id="femaleFamilyName"
                    name="femaleFamilyName"
                    placeholder="Nama Keluarga"
                    defaultValue={values.femaleFamilyName}
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
                    id="femaleShortName"
                    name="femaleShortName"
                    placeholder="Nama Kecil"
                    defaultValue={values.femaleShortName}
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
                    id="femaleBirthday"
                    name="femaleBirthday"
                    placeholder="DD/MM/YYYY"
                    defaultValue={values.femaleBirthday}
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
                    id="femaleReligion"
                    name="femaleReligion"
                    placeholder="Agama"
                    defaultValue={values.femaleReligion}
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
                    id="femaleOccupation"
                    name="femaleOccupation"
                    placeholder="Pekerjaan"
                    defaultValue={values.femaleOccupation}
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
                    id="femaleAddress"
                    name="femaleAddress"
                    placeholder="Alamat"
                    defaultValue={values.femaleAddress}
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
                    <Select name="femaleMarried" value={values.femaleMarried} onChange={handleChange}>
                      <MenuItem value="sudah">Sudah</MenuItem>
                      <MenuItem value="belum">Belum</MenuItem>
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={5}>
                <Typography variant="body1">
                  Nama Suami Terdahulu
                </Typography>
                <Paper className="inputBase">
                  <InputBase
                    className="input"
                    id="femaleExName"
                    name="femaleExName"
                    placeholder="Nama Suami Terdahulu"
                    defaultValue={values.femaleExName}
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
                    id="femaleChildName"
                    name="femaleChildName"
                    placeholder="Nama Anak"
                    defaultValue={values.femaleChildName}
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
