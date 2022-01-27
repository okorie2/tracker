import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 3%;
  border: 3px solid ${({ theme }) => theme.inactiveCol};
  width: 89%;
  border-radius: 10px;
  &:hover {
    border: 3px solid ${({ theme }) => theme.highlightCol};
  }
  .flex {
    display: flex;
    flex-direction: row;
    div:nth-child(4) {
      // flex-grow: 0.5;
    }
    div:nth-child(2) {
      flex-grow: 1.5;
    }
  }
  p {
    text-align: left;
    width: 70%;
    white-space: normal;
  }
`;
