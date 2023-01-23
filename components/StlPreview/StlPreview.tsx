import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import { ModelDimensions, StlViewer } from "react-stl-viewer";

export const StlPreview = ({ url }: { url: string }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [positionX, setPositionX] = useState<number | null>(null);
    const [positionY, setPositionY] = useState<number | null>(null);
    const style = {
        width: '400px',
        height: '400px',
    }

    const handleFinishLoading = (ev: ModelDimensions) => {
        console.log(ev);
        setIsLoading(false);
        setPositionX(ev.width/2);
        setPositionY(ev.height/2);
    }


    return (
        <>
            <Flex align="center" w="400px" h="400px" justify="center" display={isLoading ? "flex" : "none"}>
                <Spinner />
            </Flex>
            <Box visibility={isLoading ? "hidden" : "visible"}>
                <StlViewer
                    style={style}
                    orbitControls
                    showAxes
                    modelProps={{ scale: 1, positionX, positionY }}
                    shadows
                    onFinishLoading={handleFinishLoading}
                    floorProps={{ gridWidth: 10, gridLength: 10 }}
                    url={url}
                />
            </Box>
        </>
    )
}