import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useNavigate, useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../../features/job/jobApi";
import { Box, Button, Skeleton, Typography } from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const ApplicantDetails = () => {
  const { id } = useParams();
  const classes = useStyles();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetJobByIdQuery(id);
  console.log(data);
  if (isLoading) {
    return (
      <Box>
        <Skeleton variant="rectangular" width="100%" height={50} />
        <Skeleton
          sx={{ my: 1 }}
          variant="rectangular"
          width="100%"
          height={50}
        />
        <Skeleton variant="rectangular" width="100%" height={50} />
      </Box>
    );
  }
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
              {data?.data.applicants.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.jobId}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <Button
                      onClick={() =>
                        navigate(`/dashboard/applicant-profile/${row.userId}`)
                      }
                      size="small"
                      variant="outlined"
                      align="right"
                    >
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
