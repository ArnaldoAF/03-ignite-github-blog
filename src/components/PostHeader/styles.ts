import styled from "styled-components";

export const PostHeaderContainer = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  padding: 2rem;
  display: flex;
  border-radius: 10px;
  filter: drop-shadow(0px 2px 5px #000000);
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.25rem;
  }

  .footer {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }
`;
