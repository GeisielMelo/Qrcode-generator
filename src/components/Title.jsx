import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: 'Archivo Black';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
`;

const StyledH2 = styled.h2`
  font-family: 'sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
`;

const Title = ({ title, subtitle }) => {
  return (
    <>
      <StyledH1>{title}</StyledH1>
      <StyledH2>{subtitle}</StyledH2>
    </>
  );
};

export default Title;
