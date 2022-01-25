import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.highlightCol};
  background: ${({ theme }) => theme.backgroundCol};
  border: none;
  font-size: 1em;
  margin: 1em;
  padding: 3% 0%;
  border-radius: 3px;
`;
