import { Flex, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, useColorModeValue, Box, Text, Link, FormErrorMessage } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../contexts/UserContext";
import { BaseLayout } from "../layouts/BaseLayout";

const LoginPage = () => {
    const { authenticate } = useContext(UserContext);
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ defaultValues: { username: "", password: "" } });
    const router = useRouter();

    // clear general error on form change
    useEffect(() => {
        const subscription = watch(() => setError(null));
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = async (values) => {
        const { username, password } = values;
        try {
            const result = await authenticate(username, password);
            // redirect to the frontpage after successful login
            if (result) {
                router.push("/");
            }
        } catch (e) {
            setError(e);
        }
    }

    return (
        <BaseLayout>
            <Flex
                minH="80vh"
                align={'center'}
                justify={'center'}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            to enjoy all of our cool features
                        </Text>
                    </Stack>
                    <Box
                        bg={useColorModeValue('white', 'gray.700')}
                        as="form"
                        onSubmit={handleSubmit(onSubmit)}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="username" isInvalid={!!errors.username}>
                                <FormLabel>Username</FormLabel>
                                <Input type="text" {...register("username", { required: { value: true, message: "Username is required" }, pattern: { value: /^[a-zA-Z1-9]+$/, message: "You can use only letters and numbers"} })} />
                                {!!errors.username &&
                                    <FormErrorMessage>{errors.username.message}</FormErrorMessage>
                                }
                            </FormControl>
                            <FormControl id="password" isInvalid={!!errors.password}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" {...register("password", { required: { value: true, message: "Password is required" } })} />
                                {!!errors.password &&
                                    <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                                }
                            </FormControl>
                            <Stack spacing={10}>
                                {/* <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                </Stack> */}
                                <FormControl isInvalid={!!error}>
                                    <Button type="submit">
                                        Sign in
                                    </Button>
                                    {error && (
                                        <FormErrorMessage>{error.message}</FormErrorMessage>
                                    )}
                                </FormControl>
                                <Box>Don&apos;t have an account? <Link href="/register" textDecor="underline">Register here</Link></Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </BaseLayout>
    )
};

export default LoginPage;