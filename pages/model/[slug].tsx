import { useQuery } from "@apollo/client";
import { SimpleGrid, Flex, Stack, Heading, StackDivider, List, ListItem, Button, Box, Text, Spinner, Select, AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, useDisclosure } from "@chakra-ui/react";
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
import { Comments } from "../../components/Comments/Comments";
import { DocumentRenderer } from "@keystone-6/document-renderer";

export default function Model() {
    const router = useRouter();
    const { slug } = router.query;
    const { username, isAdmin, loggedIn } = useContext(UserContext);
    const { deleteModel, deleteModelLoading, createRemix } = useContext(ModelContext);
    const { launchModelModal } = useContext(ModalContext);
    const { isOpen: isDeleteModelDialogOpen, onOpen: onDeleteModelDialogOpen, onClose: onDeleteModelDialogClose } = useDisclosure()
    const deleteModelDialogCancelRef = React.useRef()
    const [selectedModelUrl, setSelectedModelUrl] = useState<string | undefined>();

    const { data, loading } = useQuery(ModelQuery, { variables: { slug: slug?.toString() } });

    const handleRemix = async (slug: string) => {
        const newModelSlug = await createRemix(slug);
        console.log(newModelSlug);

        router.push(`/model/${newModelSlug}`);
    }

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
        if (data?.model && data.model.files.length) {
            setSelectedModelUrl(data.model.files[0].file.url)
        }
    }, [data]);

    useEffect(() => {
        if (!loading && !data?.model) {
            router.push("/");
        }
    }, [loading, data])

    if (loading) {
        return (
            <BaseLayout>
                <Flex align="center" justify="center" w="full" minH="calc(100vh - 170px)">
                    <Spinner color='purple.200' size="xl" />
                </Flex>
            </BaseLayout>
        )
    }
    if (!data?.model) {
        return;
    }
    const haveAccessToAdmin = data?.model.createdBy?.username === username || isAdmin;
    return (
        <BaseLayout>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex direction="column" gap={5}>
                    <Box w={"100%"}>
                        <ImageCarousel images={data?.model.images.map(image => image.image.url)} />
                    </Box>

                    <Box w="full" h="full">
                        {selectedModelUrl && (
                            <>
                                <StlPreview url={selectedModelUrl} />
                                <Select defaultValue={data?.model.files[0]?.file.url} onChange={(e => setSelectedModelUrl(e.target.value))}>
                                    {data?.model.files.map((file, index) => (<option key={file.file.url} value={file.file.url}>Model {index + 1}</option>))}
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
                            {data?.model.name}
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
                        <Box sx={{
                            'ul': {
                                ml: 4,
                                my: 2
                            },
                            'p:empty': {
                                my: 4
                            }
                        }}>
                            <DocumentRenderer document={data?.model.description.document} />
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
                                    {data?.model.recommendedInfill ? `${Math.floor(data?.model.recommendedInfill)}%` : `unknown`}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Recommended material:
                                    </Text>{' '}
                                    {data?.model.recommendedMaterial?.toUpperCase() || "PLA"}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Supports:
                                    </Text>{' '}
                                    {data?.model.supports === "yes" ? "Yes" : data?.model.supports === "no" ? "No" : "Doesn't matter"}
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
                                        <Button onClick={onDeleteModelDialogOpen} isLoading={deleteModelLoading}>Delete model</Button>
                                    </ListItem>
                                </List>
                            </Box>
                        )}
                    </Stack>
                    <Download model={data?.model} />
                </Stack>
                {loggedIn && (
                    <Button onClick={() => handleRemix(slug.toString())}>Create Remix</Button>
                )}
            </SimpleGrid>
            <Comments modelSlug={slug.toString()} comments={data.model.comments} />
            <AlertDialog
                isOpen={isDeleteModelDialogOpen}
                leastDestructiveRef={deleteModelDialogCancelRef}
                onClose={onDeleteModelDialogClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent rounded={0}>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Model
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={deleteModelDialogCancelRef} onClick={onDeleteModelDialogClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={handleDelete} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </BaseLayout>
    )
};
