import React, { useState } from "react";
import QRCodeLink from "qrcode";
import Search from "../components/Search";
import QRCodeImage from "../components/QRCodeImage";
import Wrapper from "../components/Wrapper"


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
    <Wrapper>
      <QRCodeImage value={QRCodeUrl} />
      <Search
        placeholder="Informe o link ou mensagem."
        onChange={(e) => handleQRCode(e)}
        href={QRCodeUrlDownload}
        download="QRCode.png"
        buttonText="Gerar QRCode"
      />
    </Wrapper>
  );
};

export default Index;
