import { Header as GrommetHeader, Text } from "grommet";
import { Cube } from "grommet-icons";
import { Logo } from "./Logo";

export const Header = (props) => (
    <GrommetHeader
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        justify="left"
        {...props}
    >
        <Logo />
    </GrommetHeader>

);