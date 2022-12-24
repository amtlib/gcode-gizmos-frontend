import { Cube } from "grommet-icons";
import { Box, Text } from "grommet";

export const Logo = (props) => (
    <Box direction="row" gap="small" align="center" {...props}>
        <Cube  />
        <Text size="large">gcode gizmos...</Text>
    </Box>
)