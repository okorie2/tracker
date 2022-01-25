import styled from "styled-components";

export const ButtonHighlight = styled.button`
  background-color: ${({ theme }) => theme.highlightCol};
  //   box-shadow: 4px 4px 4px rgba(133, 116, 235, 0.25);
  border-radius: 7px;
  color: ${({ theme }) => theme.white};
  padding: 0.6em 0.8em;
  border: none;
`;
