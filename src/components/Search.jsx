import React, { useState } from "react";
import QRCodeLink from "qrcode";
import styled from "styled-components";
import QRCodeImage from "./QRCodeImage";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  width: 100%;
  margin-bottom: 20px;

  transition: all 0.3s;
`;

const StyledInput = styled.input`
  width: 80%;
  height: 40px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid black;
  border-right: none;
  padding-left: 10px;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 -2px 4px rgba(0, 0, 0, 0.1);
`;


const Search = () => {
  const [QRCodeUrl, setQRCodeUrl] = useState("");
  const [QRCodeUrlDownload, setQRCodeUrlDownload] = useState("");

  const handleQRCode = (e) => {
    setQRCodeUrl(e.target.value);
    handleQRCodeLink(e.target.value);
  };

  const handleQRCodeLink = (urlInput) => {
    QRCodeLink.toDataURL(urlInput, { width: 600, margin: 3 }, (err, url) => {
      setQRCodeUrlDownload(url);
    });
  };

  return (
    <>
      <StyledDiv>
        <StyledInput
          placeholder="link or Message"
          onChange={(e) => handleQRCode(e)}
        />
        <StyledButton href={QRCodeUrlDownload} download="QRCode.png">
          <FileDownloadIcon />
        </StyledButton>
      </StyledDiv>
      {QRCodeUrl !== "" && <QRCodeImage value={QRCodeUrl} />}
    </>
  );
};

export default Search;
