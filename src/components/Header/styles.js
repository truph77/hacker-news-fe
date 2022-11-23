import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapHeader = styled.div`
  background: rgb(255, 102, 0);
  display: flex;
  justify-content: space-between;
  padding: 4px;
`;

export const LeftSection = styled.div`
  display: flex;

  .logo {
    display: flex;
    cursor: pointer;
  }
`;

export const CTLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0 4px;
`;
