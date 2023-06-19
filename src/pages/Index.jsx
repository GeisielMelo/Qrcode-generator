import React, { useState } from "react";
import QRCodeLink from "qrcode";
import Title from "../components/Title";
import Search from "../components/Search";
import QRCodeImage from "../components/QRCodeImage";
import Wrapper from "../components/Wrapper";

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
    <section>
      <Wrapper>
        <Title
          title="QR Code Generator"
          subtitle="Paste a link or message to create a QR Code"
        />
        <Search
          placeholder="link or Message"
          onChange={(e) => handleQRCode(e)}
          href={QRCodeUrlDownload}
          download="QRCode.png"
        />
        <QRCodeImage value={QRCodeUrl} />
      </Wrapper>
    </section>
  );
};

export default Index;
