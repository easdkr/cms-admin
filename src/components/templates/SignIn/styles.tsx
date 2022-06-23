import styled from "styled-components"
import Colors from "utils/styles/colors"

export const SignInContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const SignInBox = styled.div`
    width: 300px;
    height: 280px;
    margin: auto;
    background: ${Colors.SIGN_IN_FORM};
    padding: 20px 25px 20px 25px;
    border-radius: 15px;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`