import { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    useColorModeValue,
    HStack,
    GridItem,
    useToken,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs';
import Link from 'next/link';

export const Card = ({ name, imageUrl, description, slug }: { name: string; imageUrl?: string; description: string; slug: string; }) => {
    const [liked, setLiked] = useState(false);
    const [shadowWhite, shadowBlack] = useToken('colors', ['black', 'purple.200']);

    return (
        <GridItem>
            <Box
                my={5}
                mx={0}
                overflow={'hidden'}
                bg="white"
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue(`6px 6px 0 ${shadowWhite}`, `6px 6px 0 ${shadowBlack}`)}>
                <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                    <Img
                        src={
                            imageUrl
                        }
                        objectFit="cover"
                        h="full"
                        w="full"
                        alt={'Blog Image'}
                    />
                </Box>
                <Box p={4}>
                    {/* <Box
                        bg="black"
                        display={'inline-block'}
                        px={2}
                        py={1}
                        color="white"
                        mb={2}>
                        <Text fontSize={'xs'} fontWeight="medium">
                            React
                        </Text>
                    </Box> */}
                    <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                        {name}
                    </Heading>
                    <Text color={'gray.500'} noOfLines={2}>
                        {description}
                    </Text>
                </Box>
                <HStack borderTop={'1px'} color="black">
                    <Box p={4} w="full">
                        <Link href={`/model/${slug}`}>
                            <Flex
                                alignItems="center"
                                justifyContent={'space-between'}
                                roundedBottom={'sm'}
                                cursor={'pointer'}
                                w="full">
                                <Text fontSize={'md'} fontWeight={'semibold'}>
                                    View more
                                </Text>
                                <BsArrowUpRight />
                            </Flex>
                        </Link>
                    </Box>

                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        borderLeft={'1px'}
                        cursor="pointer"
                        onClick={() => setLiked(!liked)}>
                        {liked ? (
                            <BsHeartFill fill="red" fontSize={'24px'} />
                        ) : (
                            <BsHeart fontSize={'24px'} />
                        )}
                    </Flex>
                </HStack>
            </Box>
        </GridItem>
    );
}