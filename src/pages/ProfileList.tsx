import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

function createData(id: number, firstname: string, lastname: string, age: number) {
  return { id, firstname, lastname, age };
}

const rows = [
  createData(12345, 'Jon', 'Snow', 35),
  createData(56421, 'Cersei', 'Lannister', 42),
  createData(46677, 'Arya', 'Stark', 16),
  createData(89900, 'Daenerys', 'Targaryen', 24),
  createData(43434, 'Ferrara', 'Clifford', 30),
  createData(46466, 'Rossini', 'Frances', 32),
  createData(78788, 'Harvey', 'Roxie', 40),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

});

export default function ProfileList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">First name&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Last name&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Age&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={'table' + index}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.firstname}</StyledTableCell>
              <StyledTableCell align="left">{row.lastname}</StyledTableCell>
              <StyledTableCell align="left">{row.age}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}