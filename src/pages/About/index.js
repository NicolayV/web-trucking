import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import BasicCard from "../../components/UI/common/BasicCard";
import SearchBar from "../../components/UI/common/SearchBar";
import { Box, IconButton, Typography } from "@mui/material";
import BasicButton from "../../components/UI/common/BasicButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import NewUserModal from "../../components/UI/Modals/NewUserModal";
import GridWrapper from "../../components/UI/common/GridWrapper";

const About = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState(users);

  const getHeader = () => {
    const handleSearch = (value) => filterData(value);

    const filterData = (value) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") setUsers(searchResults);
      else {
        const filteredData = searchResults.filter((item) => {
          return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setUsers(filteredData);
      }
    };

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
              placeholder={"Enter search text..."}
              onChange={(event) => handleSearch(event.target.value)}
              searchBarWidth="300px"
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
    <>
      {users.length ? (
        users.map((user) => (
          <Box
            sx={{
              marginBottom: "20px",
            }}
          >
            <Typography>User Id: {user.userId}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone number: {user.phoneNumber}</Typography>
          </Box>
        ))
      ) : (
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
      )}
    </>
  );

  const addNewUser = (data) => {
    // setUsers((prev) => [...prev, { ...data }]);
    users.push({ ...data });
    setOpen(false);
  };

  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
      <NewUserModal
        open={open}
        onClose={() => setOpen(false)}
        addNewUser={addNewUser}
      />
    </GridWrapper>
  );
};

export default About;
