import React from "react";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
      }}
    >
      <SearchIcon sx={{ margin: "10px" }} />
      <Input
        sx={{
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1.1rem",
          width: searchBarWidth,
        }}
        fullWidth
        placeholder={placeholder}
        onChange={onChange}
        disableUnderline
      />
    </Box>
  );
};
export default SearchBar;
