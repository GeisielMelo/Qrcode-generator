import React, { useState, useRef } from "react";
import styled from "styled-components";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import QrScanner from "qr-scanner";

const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;

  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #d1cfcf;
  }
`;

const StyledInput = styled.input`
  display: none;
`;

const StyledP = styled.p`
  max-width: 256px;
  width: 100%;
  border: 1px solid black;
  padding: 10px;
`;

const Reader = () => {
  const [data, setData] = useState(null);
  const fileRef = useRef();

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const result = await QrScanner.scanImage(file);
    setData(result);
  };

  return (
    <>
      <StyledButton onClick={handleClick}>
        <CloudUploadIcon />
      </StyledButton>
      <StyledInput
        type="file"
        ref={fileRef}
        onChange={handleChange}
        accept=".png, .jpg, .jpeg"
      />
      {data && <StyledP>{data}</StyledP>}
    </>
  );
};

export default Reader;
