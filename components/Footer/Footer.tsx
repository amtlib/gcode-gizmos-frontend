import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export const Footer = () => {
    return (
      <Box
        px={4}
        bg={useColorModeValue('white', 'black')}
        color={useColorModeValue('gray.700', 'gray.200')}
        borderTopWidth={1} borderTopColor={useColorModeValue('black', 'transparent')}
        >
        <Container
          as={Stack}
          maxW="960px"
          mx="auto"
          py={4}
          px={0}
          w="full"
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2023 gcode gizmos. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <BsTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <BsYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <BsInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }