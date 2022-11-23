import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapFooter = styled.div`
  border-top: 2px solid rgb(255, 102, 0);
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-styles {
    margin: 15px auto;
  }
`;

export const CTLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 0 4px;
`;
