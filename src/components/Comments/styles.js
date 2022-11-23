import styled from "styled-components";

export const WrapComments = styled.div`
  padding: 10px;
  white-space: break-spaces;

  .arrow-up {
    display: inline-flex;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;

    border-bottom: 7px solid black;
    margin: 0 7px;
    padding-top: 7px;
  }

  .item {
    margin-top: 10px;
    display: flex;
  }

  .sub-script {
    font-size: 14px;
    color: #828282;
  }

  .reply {
    font-size: 12px;
    color: #828282;
  }

  .move-left {
    margin-left: 50px;
  }
`;
