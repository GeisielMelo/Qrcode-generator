import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;

const StyledInput = styled.input``;

const StyledButton = styled.a``;

const Search = ({ onChange, placeholder, href, buttonText, download }) => {
  return (
    <StyledDiv>
      <StyledInput placeholder={placeholder} onChange={onChange} />
      <StyledButton href={href} download={download}>
        {buttonText}
      </StyledButton>
    </StyledDiv>
  );
};

export default Search;
