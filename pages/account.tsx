import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea, useToast, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../contexts/UserContext";
import { BaseLayout } from "../layouts/BaseLayout";

export default function Account() {
    const { changePassword } = useContext(UserContext);
    const toast = useToast()
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            newPassword: "",
            newPasswordRepeat: ""
        }
    });

    const onSubmit = async (values) => {
        const { newPassword, newPasswordRepeat } = values;
        if (newPassword === newPasswordRepeat) {
            const success = await changePassword(newPassword);
            if (success) {
                toast({
                    title: 'Password changed successfully!',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                  })
            }
        }
    }

    return (
        <BaseLayout>
            <Box w="50%">
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                    Change password
                </Heading>
                <VStack gap={2} my={10} as="form" onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={!!errors.newPassword}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" {...register("newPassword", { required: { value: true, message: "Password is required" }, minLength: { value: 8, message: "Password has to be at least 8 characters long" } })} />
                        {!!errors.newPassword &&
                            <FormErrorMessage>{errors.newPassword.message}</FormErrorMessage>
                        }
                    </FormControl>
                    <FormControl isInvalid={!!errors.newPasswordRepeat}>
                        <FormLabel>Repeat password</FormLabel>
                        <Input type="password" {...register("newPasswordRepeat", { required: { value: true, message: "Password is required" }, minLength: { value: 8, message: "Password has to be at least 8 characters long" }, validate: (val: string) => {
                                        if (watch('newPassword') != val) {
                                            return "Passwords have to match";
                                        }
                                    } })} />
                        {!!errors.newPasswordRepeat &&
                            <FormErrorMessage>{errors.newPasswordRepeat.message}</FormErrorMessage>
                        }
                    </FormControl>
                    <Button w="full" type="submit">Change</Button>
                </VStack>
            </Box>
        </BaseLayout>
    )
}