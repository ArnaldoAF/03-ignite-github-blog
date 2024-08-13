import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const PostCardContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["base-post"]};
  padding: 2rem;
  border-radius: 10px;
  height: 16.25rem;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme["base-text"]};

  a {
    text-decoration: none;
    color: ${(props) => props.theme["base-text"]};
  }

  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(props) => props.theme["base-label"]};
    box-sizing: border-box;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    p {
      text-wrap: nowrap;
    }
  }

  main {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
