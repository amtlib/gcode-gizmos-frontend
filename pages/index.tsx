import { useQuery } from "@apollo/client";
import React from "react";
import { Card } from "../components/Grid/Card";
import { Grid } from "../components/Grid/Grid";
import { ModelsQuery } from "../graphql/queries/models";
import { BaseLayout } from "../layouts/BaseLayout";

export default function Home() {
    const { data } = useQuery(ModelsQuery);
    console.log(data)
    return (
        <BaseLayout>
            <Grid>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Grid>
        </BaseLayout>
    )
};
