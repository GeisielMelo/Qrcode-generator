import React, { useState } from "react";
import Wrapper from "../components/Wrapper";
import SwitchPage from "../components/SwitchPage";
import Title from "../components/Title";
import Search from "../components/Search";
import Reader from "../components/Reader";


const Index = () => {
  const [switchedPage, setSwitchedPage] = useState(true);

  return (
    <section>
      <Wrapper>
        <SwitchPage
          onClick={() => setSwitchedPage(!switchedPage)}
          pageStatus={switchedPage}
        />
        {switchedPage ? (
          <>
            <Title
              title="QR Code Generator"
              subtitle="Paste a link or message to create a QR Code"
            />
            <Search />
          </>
        ) : (
          <>
            <Title
              title="QR Code Reader"
              subtitle="Select a QR Code to read it"
            />
            <Reader />
          </>
        )}
      </Wrapper>
    </section>
  );
};

export default Index;
