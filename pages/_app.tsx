import { Grommet } from "grommet";
import { theme } from "../styles/theme";
import "../styles/reset.css";

export default function MyApp({ Component, pageProps }) {
    return <Grommet theme={theme} full><Component {...pageProps} /></Grommet>
}