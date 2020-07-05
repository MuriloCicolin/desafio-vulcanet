import styled from 'styled-components';

export const Container = styled.header`
  padding-top: 23px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Button = styled.button`
  display: flex;

  border-radius: 100px;
  border: 0;
  justify-content: center;
  background: #fff;
  border-width: initial;
  align-items: center;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

  .selected {
    background: #00a6ce;
    color: #fff;
    font-weight: bold;
  }

  .white {
    background: #fff;
    color: #000;
    font-weight: bold;
  }

  div {
    width: 121px;
    padding: 12px 0;
    border-radius: 100px;
    font-weight: bold;
    background: #fff;
  }

  & div + div {
    margin-left: 10px;
  }
`;
