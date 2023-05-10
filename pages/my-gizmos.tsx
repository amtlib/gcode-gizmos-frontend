import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Card } from "../components/Grid/Card";
import { Grid } from "../components/Grid/Grid";
import { ModelContext } from "../contexts/ModelContext";
import { BaseLayout } from "../layouts/BaseLayout";
import { UserContext } from "../contexts/UserContext";

export default function MyGizmos() {
    const { models, modelsLoading } = useContext(ModelContext);
    const { username } = useContext(UserContext);
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
            <Text fontSize="4xl">My gizmos</Text>
            {models?.filter(model => model.createdBy.username === username).length === 0 && (
                <Box my={10}>
                    <Text textAlign="center" fontSize="4xl">Hmmm... No created models yet. Go ahead and add something awesome!</Text>
                </Box>
            )}
            <Grid>
                {models?.filter(model => model.createdBy.username === username).map(model => <Card key={model.id} name={model.name} imageUrl={model.images[0]?.image.url} doUserLikesIt={model.doUserLikesIt} slug={model.slug} />)}
            </Grid>
        </BaseLayout>
    )
};
