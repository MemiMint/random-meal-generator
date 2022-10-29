import { FunctionComponent } from "react";
import NextLink from "next/link";

import Tooltip from "@mui/joy/Tooltip";
import Box from "@mui/joy/Box";
import SvgIcon from "@mui/joy/SvgIcon";
import Link from "@mui/joy/Link";

import { IProps } from "../IProps";

const SidebarActiveLink: FunctionComponent<IProps> = (props): JSX.Element => {
    return (
        <NextLink href={props.href} passHref>
            <Link>
                <Tooltip title={props.title} variant="solid" placement="right">
                    <Box
                        borderRadius="50%"
                        width={50}
                        height={50}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            backgroundColor: "#FB9300",
                            boxShadow: "#FB9300 0px 5px 15px"
                        }}
                    >
                        <SvgIcon sx={{ fontSize: 30, color: "#ffffff" }} component={props.Icon} />
                    </Box>
                </Tooltip>
            </Link>
        </NextLink>
    )
}

export default SidebarActiveLink;