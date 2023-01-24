import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Box, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { ModelContext } from "../../contexts/ModelContext";

export const CreateModelModal = () => {
    const { createModel } = useContext(ModelContext);
    const { isCreateModelModalOpen: isOpen, onCreateModelModalClose: onClose} = useContext(ModalContext);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: "",
            name: "",
            description: "",
            modelFile: null,
            modelImage: null,
        }
    })

    const onSubmit = async (values: Record<string, any>) => {
        const slug = await createModel(values.name, values.description, values.modelFile[0], values.modelImage[0]);

        if (slug) {
            onClose();
            router.push(`/model/${slug}`);
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader>Add gizmo</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" {...register("name", { required: { value: true, message: "Name is required" } })} />
                            {!!errors.name &&
                                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Textarea noOfLines={5} {...register("description", { required: { value: true, message: "Description is required" } })} />
                            {!!errors.description &&
                                <FormErrorMessage>{errors.description.message}</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl>
                            <FormLabel>Image</FormLabel>
                            <Input type="file" accept="image/*" {...register("modelImage")} />
                            {!!errors.modelImage &&
                                <FormErrorMessage>{errors.modelImage.message.toString()}</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl>
                            <FormLabel>Model</FormLabel>
                            <Input type="file" accept=".stl" {...register("modelFile")} />
                            {!!errors.modelFile &&
                                <FormErrorMessage>{errors.modelFile.message.toString()}</FormErrorMessage>
                            }
                        </FormControl>
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button type="submit">Add</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}