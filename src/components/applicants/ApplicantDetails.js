import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../../features/job/jobApi";
import { Box, Button, Typography } from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const ApplicantDetails = () => {
  const { id } = useParams();
  const classes = useStyles();

  const { data, isLoading, isError } = useGetJobByIdQuery(id);
  console.log(data);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Applicants</TableCell>
              <TableCell align="right">JobId</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Details</TableCell>
            </TableRow>
          </TableHead>
          {data?.data.applicants.length ? (
            <TableBody sx={{ cursor: "pointer" }}>
              {data?.data.applicants.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.jobId}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <Button size="small" variant="outlined" align="right">
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <Box sx={{ textAlign: "center", my: 6 }}>
              <Typography>No applied anyone</Typography>
            </Box>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};
