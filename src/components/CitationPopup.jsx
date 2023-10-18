import React, { useState } from "react";
import { TextField, Select, Button, TextareaAutosize } from "@mui/material";
import citeproc from "citeproc";

const CitationPopup = ({ apiResponse }) => {
  const [citation, setCitation] = useState("");
  const [citationStyle, setCitationStyle] = useState("apa");

  const handleGenerateCitation = () => {
    if (apiResponse && apiResponse.citationStyles) {
      const generator = new citeproc.CitationGenerator(citationStyle);
      const citations = apiResponse.citationStyles[citationStyle];

      const generatedCitation = generator.makeCitation(citations);

      setCitation(generatedCitation);
    }
  };

  return (
    <div className="citation-popup">
      <TextField
        id="citation"
        label="Enter information to generate a citation"
        value={citation}
        onChange={(e) => setCitation(e.target.value)}
      />
      <Select
        id="citationStyle"
        value={citationStyle}
        onChange={(e) => setCitationStyle(e.target.value)}
      >
        <option value="apa">APA</option>
        <option value="mla">MLA</option>
        <option value="chicago">Chicago</option>
        {/* Add more citation styles as needed */}
      </Select>
      <Button variant="contained" color="primary" onClick={handleGenerateCitation}>
        Generate Citation
      </Button>
      <TextareaAutosize
        id="generatedCitation"
        value={citation}
        readOnly
        minRows={3}
      />
    </div>
  );
};

export default CitationPopup;
