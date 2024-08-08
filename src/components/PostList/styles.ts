import styled from "styled-components";

export const PostListContainer = styled.div`
  margin-top: 4.5rem;

  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  .form-header {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  input {
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    font-family: "Nunito", sans-serif;
    font-size: 1rem;

    &:focus {
      border: 1px solid ${(props) => props.theme["blue"]};
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`;
