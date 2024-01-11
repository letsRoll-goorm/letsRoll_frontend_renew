import { styled } from "styled-components";

export const s = {
  MainNavWrapper : styled.div`
    width: 12.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  MainNavBtn : styled.div`
    padding: 1rem 0.625rem;
    font-size: 1rem;
    margin-bottom: 0.3125rem;
    background-color: ${props =>
      props.$isSelected ? props.theme.colors.gray0 : ""};
    &:hover,
    &:focus,
    &:active {
      background-color: ${props => props.theme.colors.gray0};
    `,
}