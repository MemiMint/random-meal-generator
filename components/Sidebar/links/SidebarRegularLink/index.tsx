import { FunctionComponent } from "react";
import NextLink from "next/link";

import Tooltip from "@mui/joy/Tooltip";
import SvgIcon from "@mui/joy/SvgIcon"
import Link from "@mui/joy/Link";

import { IProps } from "../IProps";

const SidebarRegularLink: FunctionComponent<IProps> = (props) => {
    return (
        <NextLink href={props.href} passHref >
            <Link>
                <Tooltip title={props.title} placement="right">
                    <SvgIcon sx={{ fontSize: 30, color: "#A7A9AF" }} component={props.Icon} />
                </Tooltip>
            </Link>
        </NextLink>
    )
}

export default SidebarRegularLink;