import React from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = ({ onSearch }) => (
  <Paper
    component="form"
    sx={{
      p: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: 600,
      mx: "auto",
    }}
  >
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
    />
    <IconButton type="button" sx={{ p: "0.5rem" }} aria-label="search">
      <Search />
    </IconButton>
  </Paper>
);

export default SearchBar;
