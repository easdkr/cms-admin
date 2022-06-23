import { faBars, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoImage from "components/atoms/LogoImage";
import useAuth from "hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Colors from "utils/styles/colors";
import { HeaderLayout, LogoBox, LogoutBox, MenuItem, MenuList, ToggleBox } from "./styles";

export default function Header() {
    const [isToggled, setIsToggled] = useState(false);
    const { handleLogout } = useAuth();
    const nav = useNavigate();
    return (
        <HeaderLayout backgroundColor={Colors.HeaderColor}>
            <ToggleBox
                onClick={() => { setIsToggled(!isToggled) }}>
                <FontAwesomeIcon icon={faBars} />
            </ToggleBox>

            <LogoBox>
                <LogoImage />
            </LogoBox>

            <LogoutBox>
                <FontAwesomeIcon onClick={handleLogout} icon={faSignOut} color={"red"} />
            </LogoutBox>

            <MenuList isToggled={isToggled} >
                <MenuItem onClick={() => { nav('/contents') }}>
                    CONTENTS</MenuItem>
                <MenuItem>SETTINGS</MenuItem>
                <MenuItem>MODELS</MenuItem>
            </MenuList>

        </HeaderLayout >
    )
};

