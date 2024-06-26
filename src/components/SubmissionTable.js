import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"
import { makeStyles } from "@material-ui/core/styles"

const SubmissionTable = ({ likedSubmissions }) => {
  const classes = useStyles()

  const columns = [
    { align: "center", headerName: "", width: 50 },
    { align: "left", headerName: "First Name", width: 100 },
    { align: "left", headerName: "Last Name", width: 100 },
    { align: "left", headerName: "Email", width: 150 },
  ]

  const rows = likedSubmissions.map((submission, idx) => {
    return {
      id: idx+1,
      firstName: submission.data.firstName,
      lastName: submission.data.lastName,
      email: submission.data.email,
    }
  })

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className={classes.tableHeader}>
          <TableRow>
            {columns.map((column, idx) => (
              <TableCell
                key={`${column.headerName}_${idx}`}
                align={column.align}
                width={column.width}
                className={classes.tableHeaderCell}
              >
                {column.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={`${row.email}_${row.id}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SubmissionTable

const useStyles = makeStyles(() => ({
  tableHeader: {
    backgroundColor: "#1976d2",
  },
  tableHeaderCell: {
    fontWeight: "500",
    fontSize: "15px",
    color: "white",
  }
}))