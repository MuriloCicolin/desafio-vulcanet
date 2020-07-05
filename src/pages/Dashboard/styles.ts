import styled, { keyframes } from 'styled-components';

interface IProps {
  select: boolean;
}

const animateLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 1150px;
  /* height: 853px; */
  height: 100%;
  background: #fff;

  margin: 60px auto 0 auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  .loading {
    margin: 0 auto;
    display: block;
    height: 100vh;
    animation: ${animateLoading} 2s linear infinite;
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: space-between;
  margin-top: 39px;
`;

export const MainPlan = styled.div`
  margin-left: 37px;
  border-right: 1px solid #dddddd;
  padding-right: 8px;

  h2 {
    font-size: 30px;
    color: #00a6ce;
    font-weight: bold;
  }

  p {
    color: #999999;
    font-size: 20px;
    line-height: 28px;
    margin-top: 12px;
  }

  .value-month {
    font-size: 32px;
    font-weight: bold;
    line-height: 38px;
    color: #00a6ce;
    margin-top: 24px;
  }

  /* .select {
    background: #43b998;
  } */
`;

export const Title = styled.div`
  display: flex;
  align-content: center;
  align-items: center;

  h2 {
    margin-left: 19px;
  }
`;

export const Button = styled.button<IProps>`
  border: 0;
  background: ${props => (props.select ? '#43B998' : '#F4F7FC')};
  border-radius: 100px;
  width: 338px;

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  p {
    font-size: 26px;
    margin: 0 auto;
    padding: 5px 0;
    font-weight: bold;
    display: block;
    transition: color 0.2s;

    &:hover {
      color: ${props => (props.select ? '#fff' : '#4A507B')};
      opacity: ${props => (props.select ? 1 : 0.5)};
    }

    color: ${props => (props.select ? '#fff' : '#4A507B')};
  }
`;

export const ListPlans = styled.ul`
  list-style: none;
  margin-top: 40px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    span {
      color: rgba(0, 0, 0, 0.8);
      font-size: 20px;
      margin-left: 7px;
    }
  }
`;

export const AttendentsContainer = styled.div`
  margin-left: 29px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  div {
    h2 {
      font-size: 30px;
      color: #222222;
      line-height: 38px;
    }

    span {
      font-size: 14px;
      line-height: 17px;
      color: #00a6ce;
    }
  }
`;

export const CountAttendentsContainer = styled.div`
  display: flex;
  margin-left: 21px;
  align-items: center;

  button {
    border: 0;
    margin: 0 5px;
    background: transparent;
  }

  p {
    font-size: 32px;
    color: #00a6ce;
    line-height: 38px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 108px;
  background: #00a6ce;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 15px 15px;
`;

export const TotalContainer = styled.div`
  h3 {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-left: 29px;
  }

  p {
    color: #f5f5f5;
    font-size: 18px;
    margin-left: 29px;
    line-height: 22px;
  }
`;

export const ButtonFooter = styled.button`
  border: 0;
  border-radius: 100px;
  width: 239px;
  height: 46px;
  margin-right: 25px;
  background: #43b998;
  transition: color 0.2s;

  &:hover {
    opacity: 0.8;
  }

  p {
    color: #fff;
    font-size: 26px;
    line-height: 31px;
    font-weight: bold;
  }
`;
