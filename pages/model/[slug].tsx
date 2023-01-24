import { useQuery } from "@apollo/client";
import { SimpleGrid, Flex, Stack, Heading, StackDivider, VStack, List, ListItem, Button, Box, Image, Text, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { BsBox } from "react-icons/bs";
import { StlPreview } from "../../components/StlPreview/StlPreview";
import { ModelQuery } from "../../graphql/operations/models";
import { BaseLayout } from "../../layouts/BaseLayout";


export default function Model() {
    const router = useRouter();
    const { slug } = router.query;

    const { data, loading } = useQuery(ModelQuery, { variables: { slug: slug?.toString() } });
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
    return (
        <BaseLayout>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex direction="column">
                    <Image
                        alt=""
                        src={model.modelImage?.url}
                        fit={'cover'}
                        align={'center'}
                        objectFit='cover'
                        w={'100%'}
                        pb={4}
                        fallback={null}
                    />
                    <StlPreview url={model.modelFile.url} />
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
                                _dark={{borderColor: 'gray.600'}}
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
                                _dark={{ color: 'yellow.300'}}
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
                                    {model.recommendedInfill ? `${model.recommendedInfill}%` : `unknown`}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Recommended material:
                                    </Text>{' '}
                                    {model.recommendedMaterial || "PLA"}
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Supports:
                                    </Text>{' '}
                                    {model.supports === "yes" ? "Yes" : model.supports === "no" ? "No" : "Doesn't matter"}
                                </ListItem>
                            </List>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color='yellow.500'
                                _dark={{ color: 'yellow.300'}}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Administration
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Button>Edit model</Button>
                                </ListItem>
                                <ListItem>
                                    <Button>Delete model</Button>
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>

                    <Button
                        rounded={'none'}
                        as="a"
                        href={model.modelFile.url}
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
                    </Button>
                </Stack>
            </SimpleGrid>
        </BaseLayout>
    )
};
