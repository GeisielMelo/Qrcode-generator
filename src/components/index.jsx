import React from "react";
import { StyledButton, StyledInput, StyledQRCode } from "./styles";
import QRCodeLink from "qrcode";

const Index = () => {
  return (
    <>
      <StyledQRCode value="helloww" />
      <StyledInput placeholder="Informe o link ou mensagem." />
      <StyledButton>Download QRCode</StyledButton>
    </>
  );
};

export default Index;
