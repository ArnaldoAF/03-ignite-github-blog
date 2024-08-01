import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  /* align-items: center; */
  justify-content: center;
  height: 18.5rem;
  padding-top: 4rem;
  /* 
  background: ${(props) => props.theme["base-profile"]}; */
  background-image: linear-gradient(
    to bottom right,
    ${(props) => props.theme["base-profile"]},
    #14589c
  );

  img {
    width: 9.25rem;
    height: 6.125rem;
  }
`;
