import styled from "styled-components";
import Colors from "utils/styles/colors";
import Size from "utils/styles/size";

const HeaderLayout = styled.div<{ backgroundColor: string }>`
    max-width: 100%;
    display: flex;
    align-items: center;
    background-color: ${props => props.backgroundColor};

    @media screen and (max-width: ${Size.TABLET}) {
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const LogoBox = styled.div<{ largeWidthOrder: number, smallWidthOrder: number }>`
    width: 150px;
    margin: 0.5rem;
    order: ${props => props.largeWidthOrder}; //1
    @media screen and (max-width: ${Size.TABLET}) {
        order: ${props => props.smallWidthOrder}; //2
    }
`

const LogoutBox = styled.div<{ largeWidthOrder: number, smallWidthOrder: number }>`
    display: flex;
    align-content: center;
    padding: 1rem 1rem;
    order: ${props => props.largeWidthOrder}; //3
    @media screen and (max-width: ${Size.TABLET}) {
        order: ${props => props.smallWidthOrder}; //3
    }
`

const ToggleBox = styled.div`
    display: none;
    padding: 1rem 1rem;
    @media screen and (max-width: ${Size.TABLET}) {
        display: block;
    }
`

const MenuBox = styled.ul<{ isToggled: boolean, largeWidthOrder: number, smallWidthOrder: number }>`
    list-style: none;
    display: flex;
    padding-left: 0;
    order: ${props => props.largeWidthOrder}; //2
    @media screen and (max-width: ${Size.TABLET}) {
        flex-direction: column;
        width: 100%;
        order: ${props => props.smallWidthOrder}; //4;
        display : ${props => `${props.isToggled ? "flex" : "none"}`}
    }
`

const MenuItem = styled.li`
    padding-left:1rem;
    color: white;

    :hover{
        color: ${Colors.MENU_HOVER};
        font-weight: bold;
        cursor: pointer;
    }

    @media screen and (max-width: ${Size.TABLET}) {
        margin: .5rem .5rem;
        padding: 0;
    }
`

export {
    HeaderLayout,
    LogoBox,
    ToggleBox,
    MenuBox,
    MenuItem,
    LogoutBox
}
