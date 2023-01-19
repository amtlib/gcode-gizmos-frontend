import { Flex, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, useColorModeValue, Box, Text, Link } from "@chakra-ui/react";
import React from "react";
import { BaseLayout } from "../layouts/BaseLayout";

const RegisterPage = () => {

    return (
        <BaseLayout>
            <Flex
                minH={'90vh'}
                align={'center'}
                justify={'center'}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Register an account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features ✌️
                        </Text>
                    </Stack>
                    <Box
                        bg={useColorModeValue('white', 'gray.700')}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="username">
                                <FormLabel>Username</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <FormControl id="password-repeat">
                                <FormLabel>Repeat password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button>
                                    Register
                                </Button>
                                <Box>Have an account? <Link href="/login">Log in</Link></Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex> 
        </BaseLayout>
    )
};

export default RegisterPage;