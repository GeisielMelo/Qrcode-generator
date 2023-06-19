import React from "react";
import { StyledButton, StyledInput } from "./styles";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

const Index = () => {
  return (
    <>
      <QRCode value="hello" />
      <StyledInput placeholder="Informe o link ou mensagem." />
      <StyledButton>Download QRCode</StyledButton>
    </>
  );
};

export default Index;
