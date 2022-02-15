import styled from "styled-components";

export const SignupContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
    142.31deg,
    rgba(238, 236, 248, 0.98) 21.79%,
    rgba(255, 255, 255, 0.46) 82.27%
  );
  background-color: #958989;

  color: ${({ theme }) => theme.txtCol};
  display: grid;
  grid-template-columns: 44% 50%;
  .left {
    padding: 3% 0%;
    width: 95%;
    margin: auto;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.highlightCol};
  }
  .right {
    width: 100%;
    // background-color: yellow;
    text-align: center;
    font-family: "Nunito", sans-serif;
    h1 {
      margin-top: 4%;
      font-size: 64px;
      font-weight: 600;
    }
    p {
      font-size: 26px;
      margin-top: -4%;
    }

    input {
      outline: none;
      width: 60%;
      padding: 4%;
      border-radius: 15px;
      background: ${({ theme }) => theme.lightInpCol};
      border: none;
      font-size: 1em;
      margin-bottom: 5%;
    }
    .rw {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
      width: 47%;
      margin: auto;
      -ms-flex-direction: row;
      flex-direction: row;
      p {
        font-size: small;
      }
    }
    .rw div {
      margin-right: 2%;
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
`;
