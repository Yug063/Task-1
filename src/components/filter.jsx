// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import React from "react";

// const Filter = () => {
//   return (
//     <div>
//       <nav className="bg-white shadow">
//         <div className="container flex items-center justify-center p-6 mx-auto capitalize">
//           <a href="#" className="border duration-300 transform mx-1.5 sm:mx-6">
//             <div className="flex flex-row items-center">
//               <img
//                 className="w-4 h-4"
//                 src="https://img.icons8.com/?size=256&id=xKAfx2KN4Ea6&format=png"
//                 alt="AI components icon"
//               />
//               <div className="ml-[4px]"> AI components</div>
//             </div>
//           </a>

//           <a
//             href="#"
//             className="border border-gray-600 p-4 shadow-md mx-1.5 sm:mx-6"
//           >
//             <div className="flex flex-row items-center">
//               <img
//                 className="w-4 h-4"
//                 src="https://img.icons8.com/?size=256&id=37917&format=png"
//                 alt="Cite icon"
//               />
//               <div className="ml-2">Cite</div>
//             </div>
//           </a>
//           <FormControl >
//             <InputLabel id="demo-simple-select-label">Age</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               label="Age"
//             >
//               <MenuItem value={10}>MLA 9</MenuItem>
//               <MenuItem value={20}>Harvard</MenuItem>
//               <MenuItem value={30}>IEEE</MenuItem>
//               <MenuItem value={40}>APA 7</MenuItem>
//             </Select>
//           </FormControl>
//           <a
//             href="#"
//             className="border border-gray-600 p-4 shadow-md mx-1.5 sm:mx-6"
//           >
//             <img
//               className="w-4 h-4"
//               src="https://cdn-icons-png.flaticon.com/512/3502/3502539.png"
//               alt="Icon"
//             />
//           </a>

//           <a
//             href="#"
//             className="border border-gray-600 p-4 shadow-md mx-1.5 sm:mx-6"
//           >
//             <img
//               className="w-4 h-4"
//               src="https://cdn-icons-png.flaticon.com/512/3502/3502518.png"
//               alt="Icon"
//             />
//           </a>
//           <a
//             href="#"
//             className="border border-gray-600 p-4 shadow-md mx-1.5 sm:mx-6"
//           >
//             <img
//               className="w-4 h-4"
//               src="https://cdn-icons-png.flaticon.com/512/739/739249.png"
//               alt="Icon"
//             />
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Filter;

import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1f8022", // Set the primary color to green
    },
  },
});

const Filter = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <nav className="bg-white shadow">
        <div className="container flex items-center justify-center p-6 mx-auto capitalize">
          <a href="#" className="border duration-300 transform mx-1.5 sm:mx-6">
            <div className="flex flex-row items-center">
              <img
                className="w-4 h-4"
                src="https://img.icons8.com/?size=256&id=xKAfx2KN4Ea6&format=png"
                alt="AI components icon"
              />
              <div className="ml-[4px]"> AI components</div>
            </div>
          </a>

          <a
            href="#"
            className="border border-gray-600 p-4 shadow-md mx-1.5 sm:mx-6"
          >
            <div className="flex flex-row items-center">
              <img
                className="w-4 h-4"
                src="https://img.icons8.com/?size=256&id=37917&format=png"
                alt="Cite icon"
              />
              <div className="ml-2">Cite</div>
            </div>
          </a>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Text</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>MLA 9</MenuItem>
              <MenuItem value={20}>Harvard</MenuItem>
              <MenuItem value={30}>IEEE</MenuItem>
              <MenuItem value={40}>APA 7</MenuItem>
            </Select>
          </FormControl>
          <a
            href="#"
            className="border border-gray-600 p-4 shadow-md mx-1.5 sm:mx-6"
          >
            <img
              className="w-4 h-4"
              src="https://cdn-icons-png.flaticon.com/512/3502/3502539.png"
              alt="Icon"
            />
          </a>

          <a
            href="#"
            className="border border-gray-600 p-4 shadow-md mx-1.5 sm:mx-6"
          >
            <img
              className="w-4 h-4"
              src="https://cdn-icons-png.flaticon.com/512/3502/3502518.png"
              alt="Icon"
            />
          </a>
          <a
            href="#"
            className="border border-gray-600 p-4 shadow-md mx-1.5 sm:mx-6"
          >
            <img
              className="w-4 h-4"
              src="https://cdn-icons-png.flaticon.com/512/739/739249.png"
              alt="Icon"
            />
          </a>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default Filter;
