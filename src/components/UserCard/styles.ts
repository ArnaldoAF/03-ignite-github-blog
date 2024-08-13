import styled from "styled-components";

export const UserCardContainer = styled.div`
  background: ${(props) => props.theme["base-profile"]};
  padding: 2rem;
  display: flex;
  gap: 2rem;
  border-radius: 10px;
  filter: drop-shadow(0px 2px 5px #000000);

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  .content {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .footer {
    display: flex;
    flex: 1;
    align-items: flex-end;
    flex-direction: row;
    gap: 1.5rem;
    margin-top: 0.5rem;
  }
`;
