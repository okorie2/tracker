import styled from "styled-components";

export const Homestyle = {
  Topnav: styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.lightBgCol};
    padding: 1%;
    .img {
      margin-top: 0.5%;
    }
  `,
  Nav: styled.div`
    .navgrid {
      display: grid;
      grid-template-columns: 61% auto;
      align-items: center;
      width: 90%;
      padding-top: 1%;
      margin: auto;
      color: ${({ theme }) => theme.txtCol};
      background-color: ${({ theme }) => theme.white};
      font-size: 20px;

      .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .menu {
        display: none;
      }
    }
    @media only screen and (max-width: 900px) {
      .navgrid {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        max-height: 50px;
        transition: max-height 0.2s linear;
        width: 100%;
        .logo {
          display: ${(props) => props.logo};
        }
        .flex {
          display: flex;
          flex-direction: column;
          text-align: center;
          flex-basis: 100%;
          padding-top: 3%;
          max-height: 20%;
          transition: max-height 0.15s ease-out;
          display: ${(props) => props.display};
          .item {
            padding: 3%;
            ${(props) => props.display}
            margin-left: 4%;
          }
          .btn {
            margin-left: 6.5%;
          }
        }
        .menu {
          display: block;
        }
      }
      .xpanded {
        background-color: ${({ theme }) => theme.highlightCol};
        max-height: 500px;
      }
    }

    @media only screen and (min-width: 700px) {
      @media only screen and (max-width: 990px) {
      }
    }
  `,
  Intro: styled.div`
    color: ${({ theme }) => theme.txtCol};

    display: grid;
    grid-template-columns: 60% 40%;
    // display: flex;

    width: 83%;
    margin: auto;
    margin-top: 5%;
    // background-color: pink;

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
    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      // background-color: yellow;
h1{
  font-size:35px;
}
      button {
        font-size: 18px;
        width: 100%;
      }

      .pdiv {
        width: 90%;
        line-height: 30px;
      }
      div:nth-child(1) {
        width: 80%;
      }
    }
    div:nth-child(1) {
      width: 80%;
    }
    
  }

  @media only screen and (min-width: 600px) {
    @media only screen and (max-width: 990px) {
      display: flex;
      flex-direction:column;
      align-items: center;
      text-align:center;
      width: 90%;

      div:nth-child(1) {
        width: 90%;
      }

      .pdiv {
        width: 100%;
       line-height: 30px;
       align-self: center;
    }
    }
    
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

    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      width: 80%;
      align-items: center;
      justify-content: center;
      margin-bottom: 5%;

      .flex {
        margin-left: 0;
        justify-content: center;
        width: 62%;
        align-items: center;
        div {
          padding-top: 10%;
        }
      }

      .rule {
        width: 0.1px;
        background-color: #aeb2b8;
        display: none;
      }

      p {
        display: inline;
        margin-left: 2px;
      }
    }
    @media only screen and (min-width: 600px) {
      @media only screen and (max-width: 990px) {
      }
    }
  `,
  Comment: styled.div`
    background: ${({ theme }) => theme.lightBgGradient};
    color: ${({ theme }) => theme.txtCol};
    margin-bottom: 1%;
    .top {
      text-align: center;
      margin: auto;
      padding-top: 2%;
      h2 {
        width: 30%;
        margin: auto;
      }
      p {
        padding-top: 2%;
        font-weight: 500;
        width: 40%;
        margin: auto;
      }
    }

    @media only screen and (max-width: 600px) {
      padding-top: 5%;
      .top {
        padding: 5% 0%;

        text-align: center;
        h2 {
          width: 92%;
          margin: auto;
          font-size: 108.8%;
        }
        p {
          width: 58%;
        }
      }

      border-top: 2px soild #aeb2b8;
    }
  `,
  FormContainer: styled.div`
    color: ${({ theme }) => theme.txtCol};
    width: 85%;
    margin: auto;
    display: flex;
    padding: 2%;
    margin-bottom: 5%;
    font-family: "Nunito", sans-serif;

    background-color: ${({ theme }) => theme.white};
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.lightBoxShadow};

    .text {
      padding: 3% 0%;
      text-align: left;
      width: 40%;
      // flex-grow: 0.5;
      h2 {
        font-size: 40px;
      }
      p {
        width: 80%;
      }
      align-self: center;
    }
    .form {
      width: 60%;
      padding: 3% 0%;

      // flex-grow: 0.5;
      div {
        margin-bottom: 2.5%;
      }
      input {
        border: 2px solid ${({ theme }) => theme.lightFadeCol};
        border-radius: 10px;
        width: ${(props) => (props.width ? props.width : "100%")};
        padding: 3.5%;
        font-weight: 600;
        font-size: 24px;
      }
    }

    .flex {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      div:nth-child(1) {
        flex-grow: 0.4;
      }
      div:nth-child(2) {
        flex-grow: 0.4;
      }
      input {
        padding: 6.5%;
      }
    }

    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;

      .text {
        display: block;
        width: inherit;
        // flex-grow: 0.5;
        h2 {
          font-size: 25px;
          position: relative;
          left: -2%;
        }
        p {
          width: 85%;
          font-weight: normal;
          position: relative;
          left: -2%;
        }
      }

      .form {
        width: 100%;
        padding: 3% 0%;

        // flex-grow: 0.5;
        div {
          margin-bottom: 2.5%;
          margin-right: 1%;
        }
        input {
          border: 2px solid ${({ theme }) => theme.lightFadeCol};
          border-radius: 10px;
          width: ${(props) => (props.width ? props.width : "100%")};
          padding: 3.5%;
          font-weight: 470px;
          font-size: 16px;
        }
      }

      .flex {
        display: block;
        input {
          padding: 3.5%;
        }
      }
    }

    @media only screen and (min-width: 600px) {
      @media only screen and (max-width: 990px) {
        display: block;
        .text {
          display: block;
          width: 100%;
          // flex-grow: 0.5;
          h2 {
            font-size: 28px;
            position: relative;
            margin-top: -3%;
          }
          p {
            width: 70%;
            font-weight: 200px;
          }
        }

        .form {
          width: 100%;
          // flex-grow: 0.5;
          div {
            margin-bottom: 2.5%;
            margin-right: 1%;
          }
          input {
            border: 2px solid ${({ theme }) => theme.lightFadeCol};
            border-radius: 10px;
            width: ${(props) => (props.width ? props.width : "100%")};
            padding: 3.5%;
            font-weight: 550;
            font-size: 18px;
          }
        }

        .flex {
          div:nth-child(1) {
            flex-grow: 0.5;
          }
          div:nth-child(2) {
            flex-grow: 0.6;
          }
          input {
            padding: 5.5%;
          }
        }
      }
    }
  `,
  Footer: styled.div`
    background-color: ${({ theme }) => theme.darkBgCol};
    color: ${({ theme }) => theme.white};
    font-family: "Nunito", sans-serif;
    div:nth-child(1) {
      padding-bottom: 2%;
    }
    padding: 3%;
    .grid {
      width: 85%;
      margin: auto;
      display: grid;
      grid-template-columns: auto auto auto auto;
    }
    .icon {
      width: 60%;
      display: flex;
      justify-content: space-between;
    }

    @media only screen and (max-width: 600px) {
      .grid {
        // width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
      }

      p {
        margin: 3%;
      }

      h3 {
        margin-bottom: 5%;
      }

      .icon {
        width: 40%;
        display: flex;
        justify-content: space-between;
      }
    }
  `,
};

export const Mid = styled.div`
  background: ${({ theme }) => theme.lightBgGradient};
  display: grid;
  grid-template-columns: 55% 45%;
  width: 85%;
  margin: auto;
  margin-bottom: 5%;
  font-family: "Nunito", sans-serif;

  h2 {
    width: 75%;
  }
  .tick-grid {
    width: 90%;
    display: grid;
    grid-template-columns: 15% auto;
    align-items: center;
    font-size: 24px;
    font-weight: 550;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;

    h2 {
      width: 96%;
      text-align: center;
      font-size: 28px;
    }

    .tick-grid {
      width: 86%;
      margin: auto;
      font-size: 18px;
      font-weight: 520;
    }
  }

  @media only screen and (min-width: 600px) {
    @media only screen and (max-width: 990px) {
      .tick-grid {
        font-size: 20px;
        font-weight: 520;
      }
      h2 {
        width: 90%;
        font-size: 25px;
      }
    }
  }
`;
