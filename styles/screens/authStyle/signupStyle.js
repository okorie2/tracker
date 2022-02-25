import styled from "styled-components";
export const SignupContainer = styled.div`
  background: linear-gradient(
    142.31deg,
    rgba(238, 236, 248, 0.98) 21.79%,
    rgba(255, 255, 255, 0.46) 82.27%
  );
  background-color: #958989;
  color: ${({ theme }) => theme.txtCol};
  display: grid;
  grid-template-columns: 44% 56%;
  .left {
    height: 95%;
    width: 95%;
    margin: auto;
    margin-top: 2.7%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.highlightCol};
  }
  .right {
    width: 97%;
    // background-color: yellow;
    text-align: center;
    margin-top: 4%;
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
    .rw-cont {
      // background-color: green;
      width: 69%;
      margin: auto;
    }
    .rw {
      display: flex;
      // background-color: green;
      justify-content: space-between;

      p {
        font-size: small;
      }
      h4 {
        margin-right: 15%;
      }
      a {
        color: ${({ theme }) => theme.highlightCol};
        font-size: larger;
      }
      .btn {
        flex-grow: 0.4;
        button {
          font-size: 1.1rem;
          font-weight: 600;
        }
      }
      div {
        // margin-right: 4%;
        display: flex;
        align-items: center;
      }
      div:nth-child(2) {
        flex-basis: 48%;
      }
    }

    .wrap-cont {
      margin-top: 5%;
    }
    .wrap {
      width: 60%;
      display: flex;
      margin: auto;
      // background-color: green;
      margin-bottom: 2%;
      margin-top: 2%;

      justify-content: space-between;
      .border {
        // background-color: ${({ theme }) => theme.lightInpCol};
        width: 107px;
        height: 0px;
        border: 1px solid ${({ theme }) => theme.lightInpCol};
      }
      .box {
        border: 2px solid ${({ theme }) => theme.lightInpCol};
        height: 40%;
        width: 20%;
      }
      .box-fill {
        background-color: ${({ theme }) => theme.backgroundCol};
        width: 20%;
        padding-top: 2%;
      }
    }
  }
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    align-items: center;
    .left {
      order: 2;
      display: none;
    }
    .right {
      h1 {
        font-size: 56px;
      }
      .rw-cont {
        .rw {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          div,
          h4 {
            margin-right: 0;
            font-size: small;
          }
        }
        .btn {
          button {
            width: fit-content;
            font-size: 1.1rem;
            font-weight: 600;
            padding: 0.55em 4.5em;
            align-items: center;
          }
        }
      }
      .wrap-cont {
        .border {
          width: 48px;
        }
      }
    }
  }

  @media only screen and (min-width: 700px) {
    @media only screen and (max-width: 990px) {
      display: flex;
      // flex-wrap: wrap;
      height: 100vh;
      align-items: center;
    }
  }
`;

export const Inp = styled.input`
  outline: none;
  width: 70%;
  padding: 3.5%;
  border-radius: ${(props) => props.rad};
  background-color: ${({ theme }) => theme.lightInpCol};
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: 90%;
  background-size: 25px;
  font-family: "Nunito", sans-serif;
  font-size: 1.5em;
  font-weight: 600;
  border: none;
  margin-bottom: 5%;
  @media only screen and (max-width: 600px) {
    width: 78%;
    font-size: 1em;
    background-size: 20px;
  }
`;
