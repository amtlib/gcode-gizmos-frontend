import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Box, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Select, Checkbox, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { ModelContext } from "../../contexts/ModelContext";

type FormType = {
    slug?: string;
    id?: string;
    name?: string;
    description?: string;
    recommendedInfill?: number,
    recommendedMaterial?: "pla" | "abs" | "pet" | "tpe",
    supports?: 'yes' | 'no' | 'n/a',
    files?: any,
    images?: any,
}

export const ModelModal = ({ action, data }: { action: "create" | "update"; data?: FormType }) => {
    const { createModel, createModelLoading, updateModel, updateModelLoading } = useContext(ModelContext);
    const { isModelModalOpen: isOpen, onModelModalClose: onClose } = useContext(ModalContext);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: data?.id || "",
            name: data?.name || "",
            description: data?.description || "",
            recommendedInfill: data?.recommendedInfill ?? 0,
            recommendedMaterial: data?.recommendedMaterial || "pla",
            supports: data?.supports || 'no',
            files: data?.files || null,
            images: data?.images || null,
        }
    })

    const onSubmit = async (values: Record<string, any>) => {
        console.log(action)
        if (action === "create") {
            const slug = await createModel(values.name, values.description, values.files, values.images, values.recommendedInfill.toString(), values.recommendedMaterial, values.supports);
            console.log(slug)
            if (slug) {
                onClose();
                router.push(`/model/${slug}`);
            }
        } else if (action === "update") {
            const slug = await updateModel(data.slug, values.name, values.description, values.recommendedInfill.toString(), values.recommendedMaterial, values.supports);
            console.log(slug)
            if (slug) {
                onClose();
                router.push(`/model/${slug}`);
            }
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader>{action === "create" ? "Add gizmo" : "Update gizmo"}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack gap={2}>
                        <FormControl isInvalid={!!errors.name}>
                            <FormLabel>Name</FormLabel>
                            <Input type="text" {...register("name", { required: { value: true, message: "Name is required" }, maxLength: { value: 50, message: "Name is too long" } })} />
                            {!!errors.name &&
                                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl isInvalid={!!errors.description}>
                            <FormLabel>Description</FormLabel>
                            <Textarea noOfLines={5} {...register("description", { required: { value: true, message: "Description is required" }, maxLength: { value: 500, message: "Description is too long" } })} rounded={0} />
                            {!!errors.description &&
                                <FormErrorMessage>{errors.description.message}</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl isInvalid={!!errors.recommendedInfill}>
                            <FormLabel>Recommended infill %</FormLabel>
                            <Input type="number" min={0} max={100} {...register("recommendedInfill", { min: 0, max: 100 })} />
                            {!!errors.recommendedInfill &&
                                <FormErrorMessage>{errors.recommendedInfill.message}</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl isInvalid={!!errors.recommendedMaterial}>
                            <FormLabel>Recommended material</FormLabel>
                            <Select {...register("recommendedMaterial")} rounded={0}>
                                <option value='pla'>PLA</option>
                                <option value='abs'>ABS</option>
                                <option value='pet'>PET</option>
                                <option value='tpe'>TPE</option>
                            </Select>
                            {!!errors.recommendedMaterial &&
                                <FormErrorMessage>{errors.recommendedMaterial.message}</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl isInvalid={!!errors.supports}>
                            <FormLabel>Supports</FormLabel>
                            <Select {...register("supports")} rounded={0}>
                                <option value='yes'>Yes</option>
                                <option value='no'>No</option>
                                <option value='n/a'>Doesn&quot;t matter</option>
                            </Select>
                            {!!errors.supports &&
                                <FormErrorMessage>{errors.supports.message}</FormErrorMessage>
                            }
                        </FormControl>
                        {action === "create" && (
                            <>
                                <FormControl isInvalid={!!errors.images}>
                                    <FormLabel>Image</FormLabel>
                                    <Input type="file" multiple accept="image/jpg,image/png,image/jpeg" {...register("images")} py={1} pl={1} />
                                    {!!errors.images &&
                                        <FormErrorMessage>{errors.images.message.toString()}</FormErrorMessage>
                                    }
                                </FormControl>
                                <FormControl isInvalid={!!errors.files}>
                                    <FormLabel>Model</FormLabel>
                                    <Input type="file" multiple accept=".stl" {...register("files")} py={1} pl={1} />
                                    {!!errors.files &&
                                        <FormErrorMessage>{errors.files.message.toString()}</FormErrorMessage>
                                    }
                                </FormControl>
                            </>
                        )}
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button type="submit" disabled={createModelLoading || updateModelLoading} isLoading={createModelLoading || updateModelLoading}>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}