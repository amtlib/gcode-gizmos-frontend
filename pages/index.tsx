import React from "react";
import { Card } from "../components/Grid/Card";
import { Grid } from "../components/Grid/Grid";
import { BaseLayout } from "../layouts/BaseLayout";

export default function Home() {
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
}