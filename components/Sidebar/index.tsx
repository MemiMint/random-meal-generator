import React, { FunctionComponent } from "react";
import { useRouter } from "next/router"

import Grid from "@mui/joy/Grid";

import SidebarActiveLink from "./links/SidebarActiveLink";
import SidebarRegularLink from "./links/SidebarRegularLink"

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { Link as ILink} from "../../types/Link"

const links: ILink[] = [
    {
        href: "/home",
        label: "Home",
        Icon: HomeRoundedIcon
    },
    {
        href: "/favorites",
        label: "Favorites",
        Icon: FavoriteBorderRoundedIcon
    },
    {
        href: "/categories",
        label: "Categories",
        Icon: CategoryRoundedIcon
    },
    {
        href: "/random",
        label: "Random Dish",
        Icon: ShuffleRoundedIcon
    },
    {
        href: "/settings",
        label: "Settings",
        Icon: SettingsRoundedIcon
    }
]

const SideBar = () => {
    const router = useRouter();

    return (
        <Grid
            width={120}
            height="100%"
            sx={{ backgroundColor: "#ffffff" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={8}
            py={2}
        >
            {
                links.map((link, index) => {
                    link.active = router.asPath === link.href;

                    return link.active ? (
                        <SidebarActiveLink
                            key={index}
                            href={link.href}
                            title={link.label}
                            Icon={link.Icon}  
                        />
                    ) : (
                        <SidebarRegularLink
                            key={index}
                            href={link.href}
                            title={link.label}
                            Icon={link.Icon} 
                        />
                    )
                })
            }
        </Grid>
    )
}

export default SideBar;