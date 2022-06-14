import styled, { createGlobalStyle } from "styled-components"

export const LoginLayout = styled.div`
    background: #303030;
    color: white;
    
    width: 100%;
    height: 100%;
`
export const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: 100%;
    height: 100%;
`

export const LoginItem = styled.div`
    width: 300px;
    margin: auto;
    background: #282c32;
    padding: 20px 40px 20px 40px;
    border-radius: 15px;
    transition: all 0.3s;
`