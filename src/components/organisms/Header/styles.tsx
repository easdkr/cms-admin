import styled from "styled-components";

const HeaderLayout = styled.div<{ backgroundColor: string }>`
    max-width: 100%;
    display: flex;
    align-items: center;
    background-color: ${props => props.backgroundColor};
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const LogoBox = styled.div`
    margin : 1rem 0.2rem 0rem 0.5rem;
    width: 150px;
    order: 2;
`

const LogoutBox = styled.div`
    display: flex;
    padding-left: 2rem;
    order: 3;
    font-size: 1.5rem;
`

const ToggleBox = styled.div`
    display: none;
    font-size: 1.5rem;
    padding: 1rem 1rem;
    @media screen and (max-width: 768px) {
        display: block;
    }
`

const MenuList = styled.ul<{ isToggled: boolean }>`
    list-style: none;
    display: flex;
    padding-left: 0;
    margin-top: 1rem;
    order: 2;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        order: 4;
        display : ${props => `${props.isToggled ? "flex" : "none"}`}
    }
`

const MenuItem = styled.li`
    padding-left:1rem;
    font-size: 15px;
    color: cyan;
    :hover{
        font-size: 17px;
        color: gray;
        font-weight: bold;
    }
    @media screen and (max-width: 768px) {
        margin: .5rem 0;
        padding: 0;
    }
    
`

export {
    HeaderLayout,
    LogoBox,
    ToggleBox,
    MenuList,
    MenuItem,
    LogoutBox
}
