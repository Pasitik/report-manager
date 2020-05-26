import React from 'react'
import { Container, Typography, IconButton, FormControlLabel, Switch, Icon, Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const button = (
  <Button
    variant='contained'
    color='primary'
    size='small'
  >
    View Map
  </Button>
);

const switchButton = (
  <FormControlLabel
    control={<Switch />}
  />
);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(number, problem, date, actions) {
  return { number, problem, date, actions };
}

const rows = [
    createData(1, 'Faulty Streetlight', '20-05-2020'),
    createData(2, 'Faulty Streetlight', '26-05-2020'),
    createData(4, 'Faulty Streetlight', '24-05-2020'),
    createData(3, 'Faulty Streetlight', '22-05-2020'),
    createData(5, 'Faulty Streetlight', '23-05-2020'),
    createData(6, 'Faulty Streetlight', '27-05-2020'),
    createData(7, 'Faulty Streetlight', '26-05-2020'),
]

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



const Dashboard = () => {
    const classes = useStyles();

    return (
      <div>
        <Container style={{ marginTop: '6em' }}>
          <Typography variant='h3' gutterBottom style={{ textAlign: 'center' }}>
            Streetlights
          </Typography>
          <TableContainer
            component={Paper}
            style={{ marginTop: '2em', marginBottom: '6em' }}
          >
            <Table className={classes.table} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>#</StyledTableCell>
                  <StyledTableCell align='center'>Problem</StyledTableCell>
                  <StyledTableCell align='center'>Date</StyledTableCell>
                  <StyledTableCell align='center'>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.number}>
                    <StyledTableCell component='th' scope='row'>
                      {row.number}
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      {row.problem}
                    </StyledTableCell>
                    <StyledTableCell align='center'>{row.date}</StyledTableCell>
                    <StyledTableCell align='center'>
                      {switchButton}
                      {button}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    );
}

export default Dashboard
