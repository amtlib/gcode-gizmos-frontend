import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Card } from "../components/Grid/Card";
import { Grid } from "../components/Grid/Grid";
import { ModelContext } from "../contexts/ModelContext";
import { BaseLayout } from "../layouts/BaseLayout";

export default function Favorities() {
    const { models, modelsLoading } = useContext(ModelContext);
    if (modelsLoading) {
        return (
            <BaseLayout withSearch>
                <Flex align="center" justify="center" w="full" minH="calc(100vh - 130px)">
                    <Spinner color='purple.200' size="xl" />
                </Flex>
            </BaseLayout>
        )
    }
    return (
        <BaseLayout withSearch>
            <Text fontSize="4xl">Favorities</Text>
            {models?.filter(model => model.doUserLikesIt).length === 0 && (
                <Box my={10}>
                    <Text textAlign="center" fontSize="4xl">Hmmm... No liked models yet</Text>
                </Box>
            )}
            <Grid>
                {models?.filter(model => model.doUserLikesIt).map(model => <Card key={model.id} name={model.name} imageUrl={model.images[0]?.image.url} doUserLikesIt={model.doUserLikesIt} slug={model.slug} />)}
            </Grid>
        </BaseLayout>
    )
};
