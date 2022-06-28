import LogoImage from "components/atoms/LogoImage";
import useAuth from "hooks/useAuth";
import { useEffect, useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import Colors from "utils/styles/colors";
import { HeaderLayout, LogoBox, LogoutBox, MenuBox, MenuItem, ToggleBox } from "./styles";
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SimpleButton from "components/atoms/SimpleButton";
import { useMediaQuery } from "@mui/material";
import Size from "utils/styles/size";

interface SignOutButtonProps {
    handleLogout: any;
}

const SignOutButton = ({ handleLogout }: SignOutButtonProps) => {
    const isTablet = useMediaQuery(`(max-width: ${Size.TABLET})`);
    return (
        isTablet ?
            <ExitToAppRoundedIcon color="error" onClick={handleLogout} /> :
            <SimpleButton variant="outlined" color="error" text="Sign Out" onClick={handleLogout} />
    )
}

export default function Header() {
    const [isToggled, setIsToggled] = useState(false);
    const { handleLogout } = useAuth();
    const nav = useNavigate();

    return (
        <HeaderLayout backgroundColor={Colors.HEADER}>
            {/* 
                width에 따라 순서가 변함
                큰화면 --> Logo / 메뉴 리스트 / 로그아웃 버튼 순서 
                작은 화면 --> 메뉴리스트 버튼 / Logo / 로그아웃 순서 
                이부분은 mui 적용전에 만들어서 코드 그지같은데 나중에 mui로 통일할 것.
            */}

            <ToggleBox
                onClick={() => { setIsToggled(!isToggled) }}>
                <MenuRoundedIcon color="action" />
            </ToggleBox>

            <LogoBox largeWidthOrder={1} smallWidthOrder={2}>
                <LogoImage />
            </LogoBox>

            <LogoutBox largeWidthOrder={3} smallWidthOrder={3}>
                <SignOutButton handleLogout={handleLogout} />
            </LogoutBox>

            <MenuBox
                isToggled={isToggled}
                largeWidthOrder={2}
                smallWidthOrder={4} >
                <MenuItem onClick={() => { setIsToggled(!isToggled); nav('/contents'); }}>CONTENTS</MenuItem>
                <MenuItem>SETTINGS</MenuItem>
                <MenuItem>MODELS</MenuItem>
            </MenuBox>

        </HeaderLayout >
    )
};

