import { Flex, Spinner } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Card } from "../components/Grid/Card";
import { Grid } from "../components/Grid/Grid";
import { ModelContext } from "../contexts/ModelContext";
import { BaseLayout } from "../layouts/BaseLayout";

export default function Home() {
    const { models, modelsLoading } = useContext(ModelContext);
    if (modelsLoading) {
        return (
            <BaseLayout>
                <Flex align="center" justify="center" w="full" minH="calc(100vh - 130px)">
                    <Spinner color='purple.200' size="xl" />
                </Flex>
            </BaseLayout>
        )
    }
    return (
        <BaseLayout>
            <Grid>
                {models?.map(model => <Card key={model.id} name={model.name} imageUrl={model.modelImage?.url} doUserLikesIt={model.doUserLikesIt} description={model.description} slug={model.slug} />)}
            </Grid>
        </BaseLayout>
    )
};
