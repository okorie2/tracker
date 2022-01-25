import styled from "styled-components";

export const Homestyle = {
  Topnav: styled.div`
    height: 64px;
    background-color: ${({ theme }) => theme.lightBgCol};
    padding: 1%;
    .img {
      margin-top: 0.5%;
    }
  `,
  Nav: styled.div`
    display: grid;
    grid-template-columns: 63% auto auto auto auto auto;
    align-items: center;
    width: 90%;
    padding-top: 1%;
    margin: auto;
    color: ${({ theme }) => theme.txtCol};
    background-color: ${({ theme }) => theme.white};
    font-size: 20px;
  `,
  Intro: styled.div`
    color: ${({ theme }) => theme.txtCol};

    display: grid;
    grid-template-columns: 60% 40%;
    width: 90%;
    margin: auto;
    margin-top: 5%;
    h1 {
      font-size: 40px;
      font-weight: 700;
      font-family: "Nunito", sans-serif;
      line-height: 3.38rem;
    }
    p {
      font-weight: 500;
    }
    button {
      font-size: 23px;
    }
    div:nth-child(1) {
      width: 56%;
    }
    .pdiv {
      width: 70%;
      // line-height: 10px;
    }
  `,
  Stat: styled.div`
    display: grid;
    grid-template-columns: 30% 30% 30%;
    width: 75%;
    margin: auto;
    margin-top: 4%;
    padding-bottom: 1%;
    align-items: center;

    .flex {
      width: 95%;
      display: flex;
      flex-direction: row;
      margin-left: 46%;

      div:nth-child(1) {
        flex-grow: 0.1;
        align-self: center;
      }
      div:nth-child(2) {
        flex-grow: 0.5;
        line-height: 1.5px;
        align-self: center;
      }
    }

    .rule {
      width: 0px;
      height: 100px;

      border: 0.1px solid ${({ theme }) => theme.faintCol};
    }
  `,
};

export const Mid = styled(Homestyle.Nav)`
  background: ${({ theme }) => theme.lightBgGradient};
  grid-template-columns: 55% 45%;

  width: 85%;
  .tick-grid {
    width: 90%;
    display: grid;
    grid-template-columns: 15% auto;
    align-items: center;
    font-size: 24px;
    font-weight: 550;
    font-family: "Nunito", sans-serif;
  }
`;
