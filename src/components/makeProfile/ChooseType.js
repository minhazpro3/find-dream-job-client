import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import employee from "../../utils/images/employe.png";
import candidate from "../../utils/images/Candidate.png";

const ChooseType = () => {
  return (
    <Container>
      <Typography sx={{ textAlign: "center", my: 2 }} variant="h5">
        Continue as a ...
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: {
              sm: "flex",
              justifyContent: "evenly",
              gap: 12,
            },
          }}
        >
          <Box
            sx={{
              boxShadow: "0px 0px 10px 6px #e0e0e0",
              width: { md: 400, sm: 300, xs: 250 },
              height: { md: 450, sm: 350, xs: 300 },
              p: 4,
              py: 4,
              px: { xs: 3, sm: 4 },
            }}
          >
            <CardMedia
              sx={{
                width: { md: 400, sm: 300, xs: 250 },
                height: { md: 400, sm: 300, xs: 250 },
              }}
              component="img"
              image={candidate}
              alt="Paella dish"
            />
            <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
              Candidate
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                boxShadow: "0px 0px 10px 6px #e0e0e0",
                width: { md: 400, sm: 300, xs: 250 },
                height: { md: 450, sm: 350, xs: 300 },
                py: 4,
                px: { xs: 3, sm: 4 },
                mt: { xs: 2, sm: 0 },
              }}
            >
              <CardMedia
                sx={{
                  width: { md: 400, sm: 300, xs: 250 },
                  height: { md: 400, sm: 300, xs: 250 },
                }}
                component="img"
                image={employee}
                alt="Paella dish"
              />
              <Typography variant="h6" sx={{ textAlign: "center", my: 2 }}>
                Employee
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ChooseType;
