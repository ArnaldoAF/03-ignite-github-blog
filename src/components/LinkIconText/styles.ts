import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

export const LinkIconTextContainer = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  color: ${(props) => props.theme["blue"]};
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 130%;
  border: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
    overflow: hidden;
    /* box-sizing: border-box; */
  }

  &.reverse {
    flex-direction: row-reverse;
  }
`;

export const LinkIconTextAchorContainer = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  color: ${(props) => props.theme["blue"]};
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 130%;
  border: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
    overflow: hidden;
    /* box-sizing: border-box; */
  }

  &.reverse {
    flex-direction: row-reverse;
  }
`;
