import styled from "styled-components";
import { SignupContainer } from "./signupStyle";
export const SigninContainer = styled(SignupContainer)`
  .forgot {
    display: flex;
    justify-content: flex-end;
    width: 85%;
    // background-color: pink;
    margin-top: -3%;

    a {
      color: ${({ theme }) => theme.highlightCol};
      font-size: small;
    }
  }
  .right {
    .rw {
      div:nth-child(2) {
        flex-basis: 54%;
        // background-color: pink;
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .forgot {
      padding-bottom: 3%;
    }
    .right {
      p {
        font-size: 20px;
      }
    }
  }
`;
