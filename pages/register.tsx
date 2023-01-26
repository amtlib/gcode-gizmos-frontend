import { useMutation } from "@apollo/client";
import { Flex, FormControl, FormLabel, Input, Stack, Button, Heading, useColorModeValue, Box, Text, Link, FormErrorMessage } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../contexts/UserContext";
import { BaseLayout } from "../layouts/BaseLayout";

const RegisterPage = () => {
    const { createAccount, createAccountLoading } = useContext(UserContext);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const { register, watch, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            passwordRepeat: "",
        }
    });

    // clear general error on form change
    useEffect(() => {
        const subscription = watch(() => setError(null));
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = async (values) => {
        try {
            const result = await createAccount(values.username, values.email, values.password);
            if (result) {
                router.push("/login");
            }
        } catch(e) {
            setError(e.message);
        }
    }

    return (
        <BaseLayout>
            <Flex
                as="form"
                onSubmit={handleSubmit(onSubmit)}
                minH={'80vh'}
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
                            <FormControl id="username" isInvalid={!!errors.username}>
                                <FormLabel>Username</FormLabel>
                                <Input type="text" {...register("username", { required: { value: true, message: "Username is required" }, pattern: { value: /^[a-zA-Z1-9]+$/, message: "You can use only letters and numbers"} })} />
                                {errors.username && (
                                    <FormErrorMessage>{errors.username.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl id="email" isInvalid={!!errors.email}>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" {...register("email", { required: { value: true, message: "Email is required" }, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Provide a valid email address"} })} />
                                {errors.email && (
                                    <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl id="password" isInvalid={!!errors.password}>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" {...register("password", { required: { value: true, message: "Password is required" }, minLength: { value: 8, message: "Password has to be at least 8 character long" } })} />
                                {errors.password && (
                                    <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <FormControl id="password-repeat" isInvalid={!!errors.passwordRepeat}>
                                <FormLabel>Repeat password</FormLabel>
                                <Input type="password" {...register("passwordRepeat", {
                                    required: { value: true, message: "Please repeat your password" }, minLength: { value: 8, message: "Password has to be at least 8 characters long" }, validate: (val: string) => {
                                        if (watch('password') != val) {
                                            return "Passwords have to match";
                                        }
                                    }
                                })} />
                                {errors.passwordRepeat && (
                                    <FormErrorMessage>{errors.passwordRepeat.message}</FormErrorMessage>
                                )}
                            </FormControl>
                            <Stack spacing={10}>
                                <FormControl isInvalid={!!error}>
                                    <Button type="submit" isLoading={createAccountLoading} disabled={createAccountLoading}>
                                        Register
                                    </Button>
                                    {error && (
                                        <FormErrorMessage>{error}</FormErrorMessage>
                                    )}
                                </FormControl>
                                <Box>Have an account? <Link textDecoration="underline" href="/login">Log in here</Link></Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </BaseLayout>
    )
};

export default RegisterPage;