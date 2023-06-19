import React from "react";
import styled from "styled-components";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  width: 100%;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 40px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid black;
  padding-left: 10px;
  border: none;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 40px;

  background-color: #f5f5f5;

  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid black;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const Search = ({ onChange, placeholder, href, download }) => {
  return (
    <StyledDiv>
      <StyledInput placeholder={placeholder} onChange={onChange} />
      <StyledButton href={href} download={download}>
        <FileDownloadIcon />
      </StyledButton>
    </StyledDiv>
  );
};

export default Search;
