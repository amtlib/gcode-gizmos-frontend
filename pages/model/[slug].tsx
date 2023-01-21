import { useQuery } from "@apollo/client";
import { Container, SimpleGrid, Flex, Stack, Heading, StackDivider, VStack, List, ListItem, Button, Box, Image, Text, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { ModelQuery } from "../../graphql/operations/models";
import { BaseLayout } from "../../layouts/BaseLayout";


export default function Model() {
    const router = useRouter();
    const { slug } = router.query;

    const { data, loading } = useQuery(ModelQuery, { variables: { slug: slug?.toString() } });
    if (loading) {
        return (
            <BaseLayout>
                <Flex align="center" justify="center" w="full" minH="85vh">
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
                <Flex>
                    <Image

                        alt=""
                        src={model.modelImage.url}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={{ base: '100%', sm: '400px', lg: '500px' }}
                    />
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
                        <VStack spacing={{ base: 4, sm: 6 }}>
                            <Text
                                color='gray.500'
                                _dark={{ color: 'gray.400' }}
                                fontSize={'2xl'}
                                fontWeight={'300'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore
                            </Text>
                            <Text fontSize={'lg'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                                maxime modi nam officiis porro, quae, quisquam quos
                                reprehenderit velit? Natus, totam.
                            </Text>
                        </VStack>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color='yellow.500'
                                _dark={{ color: 'yellow.300'}}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Features
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2}>
                                    <ListItem>Chronograph</ListItem>
                                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                                    <ListItem>Tachymeter</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>Anti‑magnetic</ListItem>
                                    <ListItem>Chronometer</ListItem>
                                    <ListItem>Small seconds</ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color='yellow.500'
                                _dark={{ color: 'yellow.300'}}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Product Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Between lugs:
                                    </Text>{' '}
                                    20 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Bracelet:
                                    </Text>{' '}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case:
                                    </Text>{' '}
                                    Steel
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Case diameter:
                                    </Text>{' '}
                                    42 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Dial color:
                                    </Text>{' '}
                                    Black
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Crystal:
                                    </Text>{' '}
                                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                                    treatment inside
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                        Water resistance:
                                    </Text>{' '}
                                    5 bar (50 metres / 167 feet){' '}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>

                    <Button
                        rounded={'none'}
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
                        Add to cart
                    </Button>

                    <Stack direction="row" alignItems="center" justifyContent={'center'}>
                        <Text>2-3 business days delivery</Text>
                    </Stack>
                </Stack>
            </SimpleGrid>
        </BaseLayout>
    )
};
