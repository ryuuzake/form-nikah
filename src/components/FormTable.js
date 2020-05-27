import React, { useState, useEffect } from 'react';
import { Typography, makeStyles, Grid, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableImage from '../images/table.jpg';

const columns = [
  {id: 'date', label: 'Tanggal'},
  {id: 'location', label: 'Lokasi'},
  {id: 'nationality', label: 'Kewarganegaraan'},
  {id: 'maleFamilyName', label: 'Nama Keluarga Pria'},
  {id: 'maleShortName', label: 'Nama Kecil Pria'},
  {id: 'maleBirthday', label: 'Tanggal Lahir Pria'},
  {id: 'maleReligion', label: 'Agama Pria'},
  {id: 'maleOccupation', label: 'Pekerjaan Pria'},
  {id: 'maleAddress', label: 'Alamat Pria'},
  {id: 'maleMarried', label: 'Status Nikah Pria'},
  {id: 'maleExName', label: 'Nama Mantan Istri'},
  {id: 'maleChildName', label: 'Nama Anak Pria'},
  {id: 'maleFatherFamilyName', label: 'Nama Keluarga Bapak Pria'},
  {id: 'maleFatherShortName', label: 'Nama Kecil Bapak Pria'},
  {id: 'maleFatherBirthday', label: 'Tanggal Lahir Bapak Pria'},
  {id: 'maleFatherReligion', label: 'Agama Bapak Pria'},
  {id: 'maleFatherOccupation', label: 'Pekerjaan Bapak Pria'},
  {id: 'maleFatherAddress', label: 'Alamat Bapak Pria'},
  {id: 'maleMotherFamilyName', label: 'Nama Keluarga Ibu Pria'},
  {id: 'maleMotherShortName', label: 'Nama Kecil Ibu Pria'},
  {id: 'maleMotherBirthday', label: 'Tanggal Lahir Bapak Pria'},
  {id: 'maleMotherReligion', label: 'Agama Ibu Pria'},
  {id: 'maleMotherOccupation', label: 'Pekerjaan Ibu Pria'},
  {id: 'maleMotherAddress', label: 'Alamat Ibu Pria'},
  {id: 'femaleFamilyName', label: 'Nama Keluarga Wanita'},
  {id: 'femaleShortName', label: 'Nama Kecil Wanita'},
  {id: 'femaleBirthday', label: 'Tanggal Lahir Wanita'},
  {id: 'femaleReligion', label: 'Agama Wanita'},
  {id: 'femaleOccupation', label: 'Pekerjaan Wanita'},
  {id: 'femaleAddress', label: 'Alamat Wanita'},
  {id: 'femaleMarri', label: 'Status Nikah Wanita'},
  {id: 'femaleExName', label: 'Nama Mantan Istri'},
  {id: 'femaleChildName', label: 'Nama Anak Wanita'},
  {id: 'femaleFatherFamilyName', label: 'Nama Keluarga Bapak Wanita'},
  {id: 'femaleFatherShortName', label: 'Nama Kecil Bapak Wanita'},
  {id: 'femaleFatherBirthday', label: 'Tanggal Lahir Bapak Wanita'},
  {id: 'femaleFatherReligion', label: 'Agama Bapak Wanita'},
  {id: 'femaleFatherOccupation', label: 'Pekerjaan Bapak Wanita'},
  {id: 'femaleFatherAddress', label: 'Alamat Bapak Wanita'},
  {id: 'femaleMotherFamilyName', label: 'Nama Keluarga Ibu Wanita'},
  {id: 'femaleMotherShortName', label: 'Nama Kecil Ibu Wanita'},
  {id: 'femaleMotherBirthday', label: 'Tanggal Lahir Bapak Wanita'},
  {id: 'femaleMotherReligion', label: 'Agama Ibu Wanita'},
  {id: 'femaleMotherOccupation', label: 'Pekerjaan Ibu Wanita'},
  {id: 'femaleMotherAddress', label: 'Alamat Ibu Wanita'},
  {id: 'witnessOneFamilyName', label: 'Nama Keluarga Saksi 1'},
  {id: 'witnessOneShortName', label: 'Nama Kecil Saksi 1'},
  {id: 'witnessOneBirthday', label: 'Tanggal Lahir Saksi 1'},
  {id: 'witnessOneReligion', label: 'Agama Saksi 1'},
  {id: 'witnessOneOccupation', label: 'Pekerjaan Saksi 1'},
  {id: 'witnessOneAddress', label: 'Alamat Saksi 1'},
  {id: 'witnessTwoFamilyName', label: 'Nama Keluarga Saksi 2'},
  {id: 'witnessTwoShortName', label: 'Nama Kecil Saksi 2'},
  {id: 'witnessTwoBirthday', label: 'Tanggal Lahir Saksi 2'},
  {id: 'witnessTwoReligion', label: 'Agama Saksi 2'},
  {id: 'witnessTwoOccupation', label: 'Pekerjaan Saksi 2'},
  {id: 'witnessTwoAddress', label: 'Alamat Saksi 2'}
];

const useStyles = makeStyles((theme) => ({
  image: {
    background: `url(${TableImage})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  jumbotron: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
    color: 'white',
    textAlign: 'center',
    fontWeight: 600
  },
  root: {
    width: '70%',
    margin: 'auto',
  },
  container: {
    maxHeight: 440,
  },
}));

export default function FormTable(props) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch('/form/')
    .then(res => res.json())
    .then(data => {
      if (data !== null) {
        setRows([...data.form]);
      }
    })
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <Grid container className={classes.image}>
      <Grid item xs={12}>
        <Typography variant="h2" className={classes.jumbotron}>
          Hasil Rekap Form Pernikahan
        </Typography>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button variant="contained" color="primary" onClick={props.handleLanding}>
            Go Back
          </Button>
        </div>
      </Grid>
    </Grid>
  )
}
