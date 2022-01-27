import styled from "styled-components";

export const ButtonOutline = styled.button`
  color: ${({ theme }) => theme.txtCol};
  background: ${({ theme }) => theme.backgroundCol};
  border: 1px solid ${({ theme }) => theme.highlightCol};
  font-size: 20px;
  padding: ${(props) => (props.padding ? props.padding : "0.55em 1em")};
  border-radius: 7px;

  width: ${(props) => (props.width ? props.width : "100%")};
`;
