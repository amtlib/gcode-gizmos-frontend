import { ReactNode, useState } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
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

const Links = ['Explore', 'My gizmos'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const [maxW, setMaxW] = useState("960px");

    return (
        <Box px={4} position="sticky" top={0} bgColor="Background" borderBottomWidth={1} borderBottomColor={useColorModeValue('black', 'transparent')}>
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
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <HStack spacing={8} justify="center" mx="8" flexGrow={1} display={{ base: "none", md: "block"}}>
                        <Input rounded={0} type="search" placeholder="find gizmo..." onBlur={() => setMaxW("960px")} onFocus={() => setMaxW("full")} />
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button
                            variant={'solid'}
                            colorScheme={'purple'}
                            size={'sm'}
                            mr={4}
                            borderRadius={0}
                            leftIcon={<AddIcon />}>
                            Create gizmo
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList rounded={0}>
                                <MenuItem onClick={toggleColorMode}>
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                    <Box ml={2}>Toggle color scheme</Box>
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem>Log out</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                            <Box><Search /></Box>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </Box>
    );
}