import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import BasicCard from "../../components/UI/BasicCard";
import SearchBar from "../../components/UI/SearchBar";
import { Box, IconButton, Typography } from "@mui/material";
import BasicButton from "../../components/UI/BasicButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import BasicModal from "../../components/UI/BasicModal";

const About = () => {
  const [open, setOpen] = useState(false);

  const getHeader = () => {
    const changeHandler = (value) => console.log(value);

    const addUser = () => setOpen(true);

    const headerStyles = {
      wrapper: {
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        padding: "10px",
      },
      addUserButton: {
        fontSize: "1.05rem",
      },
    };

    return (
      <Grid sx={headerStyles.wrapper} container>
        <Grid item xs={8}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SearchBar
              searchBarWidth="300px"
              placeholder={"Enter search text..."}
              onChange={(event) => changeHandler(event.target.value)}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <BasicButton
              variant={"contained"}
              onClick={addUser}
              size="large"
              sx={headerStyles.addUserButton}
            >
              add User
            </BasicButton>
            <IconButton>
              <RefreshIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    );
  };

  const getContent = () => (
    <Typography
      align="center"
      sx={{
        margin: "40px 16px",
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: "1.3rem",
      }}
    >
      No users for this project yet
    </Typography>
  );

  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: "#eaeff1",
        padding: "48px 32px",
        minHeight: "calc(100vh - 166px)",
        position: "relative",
      }}
    >
      <BasicCard header={getHeader()} content={getContent()} />
      <BasicModal open={open} onClose={() => setOpen(false)} />
    </Grid>
  );
};

export default About;
