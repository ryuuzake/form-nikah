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
  {id: 'date', label: 'date'},
  {id: 'location', label: 'location'},
  {id: 'nationality', label: 'nationality'},
  {id: 'maleFamilyName', label: 'maleFamilyName'},
  {id: 'maleShortName', label: 'maleShortName'},
  {id: 'maleBirthday', label: 'maleBirthday'},
  {id: 'maleReligion', label: 'maleReligion'},
  {id: 'maleOccupation', label: 'maleOccupation'},
  {id: 'maleAddress', label: 'maleAddress'},
  {id: 'maleMarri', label: 'maleMarri'},
  {id: 'maleExName', label: 'maleExName'},
  {id: 'maleChildName', label: 'maleChildName'},
  {id: 'maleFatherFamilyName', label: 'maleFatherFamilyName'},
  {id: 'maleFatherShortName', label: 'maleFatherShortName'},
  {id: 'maleFatherBirthday', label: 'maleFatherBirthday'},
  {id: 'maleFatherReligion', label: 'maleFatherReligion'},
  {id: 'maleFatherOccupation', label: 'maleFatherOccupation'},
  {id: 'maleFatherAddress', label: 'maleFatherAddress'},
  {id: 'maleMotherFamilyName', label: 'maleMotherFamilyName'},
  {id: 'maleMotherShortName', label: 'maleMotherShortName'},
  {id: 'maleMotherBirthday', label: 'maleMotherBirthday'},
  {id: 'maleMotherReligion', label: 'maleMotherReligion'},
  {id: 'maleMotherOccupation', label: 'maleMotherOccupation'},
  {id: 'maleMotherAddress', label: 'maleMotherAddress'},
  {id: 'femaleFamilyName', label: 'femaleFamilyName'},
  {id: 'femaleShortName', label: 'femaleShortName'},
  {id: 'femaleBirthday', label: 'femaleBirthday'},
  {id: 'femaleReligion', label: 'femaleReligion'},
  {id: 'femaleOccupation', label: 'femaleOccupation'},
  {id: 'femaleAddress', label: 'femaleAddress'},
  {id: 'femaleMarri', label: 'femaleMarri'},
  {id: 'femaleExName', label: 'femaleExName'},
  {id: 'femaleChildName', label: 'femaleChildName'},
  {id: 'femaleFatherFamilyName', label: 'femaleFatherFamilyName'},
  {id: 'femaleFatherShortName', label: 'femaleFatherShortName'},
  {id: 'femaleFatherBirthday', label: 'femaleFatherBirthday'},
  {id: 'femaleFatherReligion', label: 'femaleFatherReligion'},
  {id: 'femaleFatherOccupation', label: 'femaleFatherOccupation'},
  {id: 'femaleFatherAddress', label: 'femaleFatherAddress'},
  {id: 'femaleMotherFamilyName', label: 'femaleMotherFamilyName'},
  {id: 'femaleMotherShortName', label: 'femaleMotherShortName'},
  {id: 'femaleMotherBirthday', label: 'femaleMotherBirthday'},
  {id: 'femaleMotherReligion', label: 'femaleMotherReligion'},
  {id: 'femaleMotherOccupation', label: 'femaleMotherOccupation'},
  {id: 'femaleMotherAddress', label: 'femaleMotherAddress'},
  {id: 'witnessOneFamilyName', label: 'witnessOneFamilyName'},
  {id: 'witnessOneShortName', label: 'witnessOneShortName'},
  {id: 'witnessOneBirthday', label: 'witnessOneBirthday'},
  {id: 'witnessOneReligion', label: 'witnessOneReligion'},
  {id: 'witnessOneOccupation', label: 'witnessOneOccupation'},
  {id: 'witnessOneAddress', label: 'witnessOneAddress'},
  {id: 'witnessTwoFamilyName', label: 'witnessTwoFamilyName'},
  {id: 'witnessTwoShortName', label: 'witnessTwoShortName'},
  {id: 'witnessTwoBirthday', label: 'witnessTwoBirthday'},
  {id: 'witnessTwoReligion', label: 'witnessTwoReligion'},
  {id: 'witnessTwoOccupation', label: 'witnessTwoOccupation'},
  {id: 'witnessTwoAddress', label: 'witnessTwoAddress'}
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
    marginTop: theme.spacing(35),
    marginBottom: theme.spacing(8),
    color: 'white',
    textAlign: 'center',
  },
  root: {
    width: '100%',
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
        setRows([data.form]);
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
