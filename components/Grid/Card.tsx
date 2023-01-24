import { useContext, useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Image,
    Flex,
    useColorModeValue,
    HStack,
    GridItem,
    useToken,
    Tooltip,
} from '@chakra-ui/react';
import { BsArrowUpRight, BsHeartFill, BsHeart, BsBox } from 'react-icons/bs';
import Link from 'next/link';
import { UserContext } from '../../contexts/UserContext';
import { ModelContext } from '../../contexts/ModelContext';

export const Card = ({ name, imageUrl, description, slug, doUserLikesIt }: { name: string; imageUrl?: string; description: string; slug: string; doUserLikesIt: boolean }) => {
    const [liked, setLiked] = useState<boolean>(doUserLikesIt);
    const [shadowWhite, shadowBlack] = useToken('colors', ['black', 'purple.200']);
    const { loggedIn, username } = useContext(UserContext);
    const { likeModel, dislikeModel } = useContext(ModelContext);

    useEffect(() => {
        if (username) {
            if (liked) {
                likeModel(slug, username)
            } else {
                dislikeModel(slug, username);
            }
        }
    }, [liked])

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
                    <Image
                        src={
                            imageUrl
                        }
                        objectFit="cover"
                        h="full"
                        w="full"
                        alt=""
                        fallback={<>
                            <Flex w="full" h="full" align="center" justify="center">
                                <BsBox style={{ width: "80%", height: "80%" }} color="black" />
                            </Flex>
                        </>}
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
                    <Tooltip label={loggedIn ? liked ? 'Click to dislike!' : 'Click to like!' : 'Log in to like models!'}>
                        <Flex
                            p={4}
                            alignItems="center"
                            justifyContent={'space-between'}
                            roundedBottom={'sm'}
                            borderLeft={'1px'}
                            cursor="pointer"

                            onClick={() => loggedIn ? setLiked(!liked) : null}>
                            {liked ? (
                                <BsHeartFill fill="red" fontSize={'24px'} />
                            ) : (
                                <BsHeart fontSize={'24px'} />
                            )}
                        </Flex>
                    </Tooltip>
                </HStack>
            </Box>
        </GridItem>
    );
}