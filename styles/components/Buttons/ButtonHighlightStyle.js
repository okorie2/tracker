import styled from "styled-components";

export const ButtonHighlight = styled.button`
  background-color: ${({ theme }) => theme.highlightCol};
  box-shadow: ${({ theme }) => theme.blueFadeBxShdw};
  border-radius: 7px;
  color: ${({ theme }) => theme.white};
  padding: ${(props) => (props.padding ? props.padding : "0.55em 1em")};

  border: none;

  width: ${(props) => (props.width ? props.width : "100%")};
`;
