import { styled } from "styled-components"; 
import { Link } from "react-router-dom";


export const s = {
  Content: styled(Link)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.125rem;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.colors.gray1};
  `,
  ContentImg: styled.div`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color:${props => props.theme.colors.gray1};
    `,
    
  LogoutSvg: styled.img`
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  `,

  ContentDiv: styled.div`
    display: flex;
      align-items: center;
      flex-grow: 1;
      padding-right: 0.3125rem;
  `,
  
   LoginContent: styled(Link)`
    width: 100%;
    display: flex;
    justify-content: space-between;
  
    font-size: 1.125rem;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid;
    border-color: ${props => props.theme.colors.gray1};
  `
}
