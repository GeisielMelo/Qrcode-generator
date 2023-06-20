import React from "react";
import styled from "styled-components";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: silver;
    border-radius: 50%;
  }
`;

const SwitchPage = ({ onClick, pageStatus }) => {
  return (
    <StyledButton onClick={onClick} title={pageStatus ? "Reader" : "Generator"}>
      {pageStatus ? <SwitchLeftIcon /> : <SwitchRightIcon />}
    </StyledButton>
  );
};

export default SwitchPage;
