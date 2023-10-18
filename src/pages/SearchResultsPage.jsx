import React from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import "./SearchResultsPage.css";
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1f8022", // Set the primary color to green
    },
    text: {
      primary: "#1f8022", // Set text color to green
    },
  },
});

// const SearchResultsPage = ({ results, onBack, onGetContent }) => {
//   return (
//     <div className="container">
//       <div className="header">
//         <Button variant="outlined" className="back-button" onClick={onBack}>
//           &lt; Back
//         </Button>
//         <TextField
//           label="Containing search item"
//           className="input"
//           InputProps={{ classes: { input: "text-white" } }}
//         />
//       </div>

//       <h2 className="title">Web Results</h2>
//       {results.map((result) => (
//         <div key={result.paperId} className="card">
//           <h3 className="card-title">
//             {result.title.length > 50
//               ? result.title.slice(0, 50) + "..."
//               : result.title}
//           </h3>
//           <p className="card-abstract">
//             {result.abstract?.length > 100
//               ? result.abstract.slice(0, 100) + "..."
//               : result.abstract}
//           </p>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => onGetContent(result)}
//             className="card-button"
//           >
//             Get Content
//           </Button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchResultsPage;

const SearchResultsPage = ({ results, onBack, onGetContent }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="container">
        <div className="header">
          <Button variant="outlined" className="back-button" onClick={onBack}>
            &lt; Back
          </Button>
          <TextField
            label="Containing search item"
            className="input"
            InputProps={{ classes: { input: "text-white" } }}
          />
        </div>

        <h2 className="title">Web Results</h2>
        {results.map((result) => (
          <div key={result.paperId} className="card">
            <h3 className="card-title">
              {result.title.length > 50
                ? result.title.slice(0, 50) + "..."
                : result.title}
            </h3>
            <p className="card-abstract">
              {result.abstract?.length > 100
                ? result.abstract.slice(0, 100) + "..."
                : result.abstract}
            </p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onGetContent(result)}
              className="card-button"
            >
              Get Content
            </Button>
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default SearchResultsPage;
