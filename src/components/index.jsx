import React, { useState } from "react";
import { Container, QRCodeImage, Input, Button } from "./styles";
import QRCodeLink from "qrcode";

const Index = () => {
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
    <Container>
      <QRCodeImage 
        value={QRCodeUrl} />
      <Input
        placeholder="Informe o link ou mensagem."
        onChange={(e) => handleQRCode(e)}
      />
      <Button 
        href={QRCodeUrlDownload} 
        download="QRCode.png">
        Download
      </Button>
    </Container>
  );
};

export default Index;
