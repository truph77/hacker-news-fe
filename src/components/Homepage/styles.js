import styled from "styled-components";

export const WrapHomepage = styled.div`
  padding: 10px;
  white-space: break-spaces;

  .arrow-up {
    display: inline-flex;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;

    border-bottom: 7px solid black;
    margin: 0 4px;
  }

  .item {
    margin: 10px 0;
    display: flex;
  }

  .hostname {
    color: #828282;
  }
`;

export const Title = styled.span``;

export const Subscript = styled.div`
  font-size: 12px;
  color: #828282;
`;
