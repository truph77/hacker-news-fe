import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapNotFound = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .go-home {
    position: absolute;
  }
`;

const NotFound = () => (
  <WrapNotFound>
    <h1>Oops! You seem to be lost.</h1>
    <p>Here are some helpful links:</p>
    <Link to="/">Home</Link>
  </WrapNotFound>
);

export default NotFound;
