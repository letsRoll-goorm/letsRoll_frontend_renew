import { styled } from "styled-components";

export const s = {
  MainTitle :styled.div`
      font-size: 1.625rem;
  padding: 0.625rem 0rem;
  padding-top: 2.5rem;
  `,
  MainPageWrapper : styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.25rem;
    min-height: 100vh;
  `,
  MainWrapper : styled.div`
    width: 100%;
    background-color: ${porps => porps.theme.colors.white};

    display: flex;
    justify-content: space-between;

    padding-top: 2.5rem;
  `,

}
