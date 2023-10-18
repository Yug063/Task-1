import React, { useState } from "react";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./SearchPage.css";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1f8022", // Set the primary color to green
    },
  },
});

const SearchPage = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [academic, setAcademic] = useState(false);

  const handleSearch = () => {
    onSearch(keyword, academic);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div className="search-container">
        <div className="input-container">
          <TextField
            label="Search for web"
            placeholder="Search for web"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="search-input"
            // style={{ border::hover : "1px green",}}
          />
          <FormControlLabel
            control={
              <Switch
                checked={academic}
                onChange={() => setAcademic(!academic)}
                name="academic"
                inputProps={{ "aria-label": "Academic" }}
                className={`switch ${academic ? "green-switch" : ""}`}
              />
            }
            label="Academic"
            className="academic-switch"
          />
        </div>
        <Button
          variant="contained"
          onClick={handleSearch}
          className="search-button"
          style={{ color: "white", background: "green" }}
        >
          Search the web
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default SearchPage;
