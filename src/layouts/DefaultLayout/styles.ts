import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;

  margin: 0 auto;

  background: ${(props) => props.theme["base-background"]};

  flex-direction: column;
`;
