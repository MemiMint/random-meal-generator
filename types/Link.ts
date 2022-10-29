import { SvgIconComponent } from "@mui/icons-material";

export type Link = {
    href: string;
    label: string;
    active?: boolean;
    Icon: SvgIconComponent;
}