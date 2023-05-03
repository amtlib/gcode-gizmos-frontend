import { ComponentPropsWithoutRef, ReactNode, useContext, useMemo, useState } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    Link as ChakraLink,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Input,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Logo } from './Logo';
import { Search } from './Search';
import { UserContext } from '../../contexts/UserContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ModalContext } from '../../contexts/ModalContext';
import { ModelContext } from '../../contexts/ModelContext';


const Links = [
    {
        name: "Explore",
        href: "/",
        hasToBeLoggedIn: false,
    },
    {
        name: "Favorities",
        href: "/favorities",
        hasToBeLoggedIn: true,
    }
] as const;

const NavLink = ({ children, ...rest }: { children: ReactNode; } & ComponentPropsWithoutRef<typeof ChakraLink>) => (
    <ChakraLink
        px={2}
        py={1}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        {...rest}>
        {children}
    </ChakraLink>
);

export function Header({ withSearch }: { withSearch?: boolean }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const {launchModelModal} = useContext(ModalContext);
    const router = useRouter();
    const { loggedIn, unauthenticate, username } = useContext(UserContext);
    const [maxW, setMaxW] = useState("960px");
    const { setSearchQuery } = useContext(ModelContext);

    return (
        <Box zIndex={1000} px={4} position="sticky" top={0} bgColor="Background" borderBottomWidth={1} borderBottomColor={useColorModeValue('black', 'transparent')}>
            <Box maxW={maxW} mx="auto" transitionDuration="0.5s">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Link href='/'><Logo /></Link>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => ((link.hasToBeLoggedIn && loggedIn) || !link.hasToBeLoggedIn) && (
                                <NavLink href={link.href} key={link.name}>{link.name}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    {withSearch && (
                        <HStack spacing={8} justify="center" mx="8" flexGrow={1} display={{ base: "none", md: "block" }}>
                            <Input rounded={0} type="search" placeholder="find gizmo..." onBlur={() => setMaxW("960px")} onFocus={() => setMaxW("full")} onChange={(e) => setSearchQuery(e.target.value)} />
                        </HStack>
                    )}
                    <Flex alignItems={'center'}>
                        {loggedIn && (
                            <Button
                                variant={'solid'}
                                colorScheme={'purple'}
                                size={'sm'}
                                mr={4}
                                borderRadius={0}
                                onClick={() => launchModelModal("create")}
                                leftIcon={<AddIcon />}>
                                Create gizmo
                            </Button>
                        )}
                        {loggedIn ? (
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    _hover={{
                                        textDecoration: "none"
                                    }}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        name={username}
                                    />
                                </MenuButton>
                                <MenuList rounded={0}>
                                    <MenuItem onClick={() => router.push("/account")}>
                                        Account
                                    </MenuItem>
                                    {/* <MenuItem>
                                        My gizmos
                                    </MenuItem> */}
                                    <MenuItem onClick={toggleColorMode}>
                                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                        <Box ml={2}>Toggle color scheme</Box>
                                    </MenuItem>
                                    <MenuDivider />
                                    <MenuItem onClick={unauthenticate}>Log out</MenuItem>
                                </MenuList>
                            </Menu>
                        ) : (
                            <Button onClick={() => router.push("/login")}>Log in</Button>
                        )}
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => ((link.hasToBeLoggedIn && loggedIn) || !link.hasToBeLoggedIn) && (
                                <NavLink href={link.href} key={link.name}>{link.name}</NavLink>
                            ))}
                            <Box><Search /></Box>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </Box>
    );
}