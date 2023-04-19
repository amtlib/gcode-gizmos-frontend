import { useQuery } from "@apollo/client";
import { SimpleGrid, Flex, Stack, Heading, StackDivider, VStack, List, ListItem, Button, Box, Text, Spinner, Select } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Download from "../../components/Download/Download";
import { StlPreview } from "../../components/StlPreview/StlPreview";
import { ModalContext } from "../../contexts/ModalContext";
import { ModelContext } from "../../contexts/ModelContext";
import { UserContext } from "../../contexts/UserContext";
import { ModelQuery } from "../../graphql/operations/models";
import { BaseLayout } from "../../layouts/BaseLayout";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

export default function Model() {
    const router = useRouter();
    const { slug } = router.query;
    const { username, isAdmin } = useContext(UserContext);
    const { deleteModel, deleteModelLoading } = useContext(ModelContext);
    const { launchModelModal } = useContext(ModalContext);
    const [selectedModelUrl, setSelectedModelUrl] = useState<string | undefined>();


    const { data, loading } = useQuery(ModelQuery, { variables: { slug: slug?.toString() } });


    const handleDelete = async () => {
        if (slug) {
            const result = await deleteModel(slug.toString());
            if (result) {
                router.push("/");
            }
        }
    };

    const handleEdit = async () => {
        launchModelModal("update", {
            slug,
            ...data?.model
        });
    }
    useEffect(() => {
        if (model) {
            setSelectedModelUrl(data.model.files[0].file.url)
        }
    }, [data, model]);

    if (loading) {
        return (
            <BaseLayout>
                <Flex align="center" justify="center" w="full" minH="calc(100vh - 170px)">
                    <Spinner color='purple.200' size="xl" />
                </Flex>
            </BaseLayout>
        )
    }
    const { model } = data;
    const haveAccessToAdmin = model.createdBy?.username === username || isAdmin;

    return (
        <BaseLayout>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex direction="column">
                    <Box w={"100%"}>
                        <ImageCarousel images={model.images.map(image => image.image.url)} />
                    </Box>

                    <Box w="full" h="full">
                        {selectedModelUrl && (
                            <>
                                <StlPreview url={selectedModelUrl} />
                                <Select defaultValue={model.files[0]?.file.url} onChange={(e => setSelectedModelUrl(e.target.value))}>
                                    {model.files.map((file, index) => (<option key={file.file.url} value={file.file.url}>Model {index + 1}</option>))}
                                </Select>
                            </>
                        )}
                    </Box>
                </Flex>
                <Stack spacing={{ base: 6, md: 10 }}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {model.name}
                        </Heading>
                    </Box>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        divider={
                            <StackDivider
                                borderColor='gray.200'
                                _dark={{ borderColor: 'gray.600' }}
                            />
                        }>
                        <Box>
                            <Text fontSize={'lg'} textAlign="left" >
                                {model.description}
                            </Text>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color='yellow.500'
                                _dark={{ color: 'yellow.300' }}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Additional informations
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Recommended infill:
                                    </Text>{' '}
                                    {model.recommendedInfill ? `${Math.floor(parseFloat(model.recommendedInfill))}%` : `unknown`}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Recommended material:
                                    </Text>{' '}
                                    {model.recommendedMaterial?.toUpperCase() || "PLA"}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Supports:
                                    </Text>{' '}
                                    {model.supports === "yes" ? "Yes" : model.supports === "no" ? "No" : "Doesn't matter"}
                                </ListItem>
                            </List>
                        </Box>
                        {haveAccessToAdmin && (
                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color='yellow.500'
                                    _dark={{ color: 'yellow.300' }}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}>
                                    Administration
                                </Text>

                                <List spacing={2}>
                                    <ListItem>
                                        <Button onClick={handleEdit}>Edit model</Button>
                                    </ListItem>
                                    <ListItem>
                                        <Button onClick={handleDelete} isLoading={deleteModelLoading}>Delete model</Button>
                                    </ListItem>
                                </List>
                            </Box>
                        )}
                    </Stack>
                    <Download model={model} />
                    {/* <Button
                        rounded={'none'}
                        as="a"
                        // href={model.modelFile.url}
                        w={'full'}
                        mt={8}
                        size={'lg'}
                        py={'7'}
                        bg='gray.900'
                        color='white'
                        _dark={{
                            bg: 'gray.50',
                            color: 'gray.900'
                        }}
                        textTransform={'uppercase'}
                        _hover={{
                            transform: 'translateY(2px)',
                            boxShadow: 'lg',
                        }}>
                        Download
                    </Button> */}
                </Stack>
            </SimpleGrid>
        </BaseLayout>
    )
};
