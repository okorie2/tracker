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
    @media only screen and (max-width: 600px) {
      display: flex;
      flex-direction:column;
      align-items: center;
      width: 90%;

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
      width: 100%;
      align-items: center;

      .flex{
        margin-left:0;
        justify-content: space-evenly;
      }
      
      .rule{
        width: 0.1px;
        background-color:#aeb2b8;
      }

      div:nth-child(1) {
        flex-grow: 0.1;
        align-self: center;
     }

      div:nth-child(2) {
        flex-grow: 0.1;
        align-self: center;
        margin-right: 2px;
     }

     div:nth-child(3) {
        flex-grow: 0.1;
        align-self: center;
     }


      p{
          display: inline;
          margin-left: 2px;
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

      .top{
        text-align: center;
        display: inline;
      }

      h2 {
      
        width: 100%;
        margin: auto;
        display: inline;
        font-size: 108.8%;
        position: relative;
        left: 5%;

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
      display:flex;
      flex-direction: column;

      .text {
        display: grid;
        width: inherit;
        grid-template-columns: 50% 50%;
        // flex-grow: 0.5;
        h2 {
          font-size: 30px;
          position: relative;
          left: -2%;
        }
        p {
          width: 80%;
          margin-left: 13%;
          font-weight: normal;
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
          font-weight: 550;
          font-size: 18px;
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
      div:nth-child(4) {
        align-self: center;
        position: relative;
        margin: 
      }
      .grid {
        width: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: auto auto auto;
      }

      p{
        margin: 10%;
      }

    }  
  `,
};

export const Mid = styled(Homestyle.Nav)`
  background: ${({ theme }) => theme.lightBgGradient};
  grid-template-columns: 55% 45%;
  width: 85%;
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
      width: 90%;
      font-size: 30px;
    }

    .tick-grid {
      width: 90%;
      font-size: 18px;
      font-weight: 520;
    }

  }
`;
