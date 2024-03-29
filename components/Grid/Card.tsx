import React, { useContext, useState } from 'react';
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

export const Card = React.memo(function CardComponent({ name, imageUrl, slug, doUserLikesIt }: { name: string; imageUrl?: string; slug: string; doUserLikesIt: boolean }) {
    const [liked, setLiked] = useState<boolean>(doUserLikesIt);
    const [shadowWhite, shadowBlack] = useToken('colors', ['black', 'purple.200']);
    const { loggedIn, username } = useContext(UserContext);
    const { likeModel, dislikeModel } = useContext(UserContext);


    const handleLike = () => {
        setLiked(prev => !prev);
        if (username && slug) {
            if (liked) {
                dislikeModel(slug, username);
            } else {
                likeModel(slug, username);
            }
        }
    }

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
                <Link href={`/model/${slug}`}>
                    <Box borderBottom={'1px'} borderColor="black">
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
                </Link>
                <Link href={`/model/${slug}`}>
                    <Box p={4}>
                        <Heading color={'black'} fontSize={'2xl'} noOfLines={3}>
                            {name}
                        </Heading>
                    </Box>
                </Link>
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
                            zIndex={4}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (loggedIn) handleLike();
                            }}>
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
})