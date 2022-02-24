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
    }

    .rw div {
      margin-right: 4%;
      display: flex;
      align-items: center;
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
        width: 126px;
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
`;
