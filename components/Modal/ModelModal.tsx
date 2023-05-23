import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Box, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Select, Checkbox, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalContext } from "../../contexts/ModalContext";
import { ModelContext } from "../../contexts/ModelContext";
import { RichTextBlock } from "../Comments/AddComment/RichTextBlocks";
import { Descendant } from "slate";
import { FileUploader } from "../FileUploader/FileUploader";

type FormType = {
    slug?: string;
    id?: string;
    name?: string;
    description?: { document: Descendant[]; };
    recommendedInfill?: number,
    recommendedMaterial?: "pla" | "abs" | "pet" | "tpe",
    supports?: 'yes' | 'no' | 'n/a',
    files?: any,
    images?: any,
}

const initialDescriptionValue = [
    {
        type: 'paragraph',
        children: [{ text: '' }],
    },
]

export const ModelModal = ({ action, data }: { action: "create" | "update"; data?: FormType }) => {
    const [description, setDescription] = useState<Descendant[]>(initialDescriptionValue);
    const [isDescriptionUpdated, setIsDescriptionUpdated] = useState<boolean>(false);
    const [uploadedImages, setUploadedImages] = useState<File[]>([]);
    const [uploadedImagesError, setUploadedImagesError] = useState<string | null>(null);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [uploadedFilesError, setUploadedFilesError] = useState<string | null>(null);
    const { createModel, createModelLoading, updateModel, updateModelLoading } = useContext(ModelContext);
    const { isModelModalOpen: isOpen, onModelModalClose: onClose } = useContext(ModalContext);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            id: data?.id || "",
            name: data?.name || "",
            recommendedInfill: data?.recommendedInfill || 0,
            recommendedMaterial: data?.recommendedMaterial || "pla",
            supports: data?.supports || 'no',
        }
    });

    useEffect(() => {
        if (data && data.description.document) {
            setDescription(data.description.document);
            setIsDescriptionUpdated(true);
        }
    }, [data]);

    const onSubmit = async (values: Record<string, any>) => {
        if (action === "create") {
            if (uploadedImages.length === 0) {
                setUploadedImagesError("Please provide at least 1 image");
                return;
            } else {
                setUploadedImagesError(null);
            }

            if (uploadedFiles.length === 0) {
                setUploadedFilesError("Please provide at least 1 model");
                return;
            } else {
                setUploadedFilesError(null);
            }

            const slug = await createModel(values.name, description, uploadedFiles, uploadedImages, values.recommendedInfill, values.recommendedMaterial, values.supports);
            if (slug) {
                onClose();
                router.push(`/model/${slug}`);
            }
        } else if (action === "update") {
            const slug = await updateModel(data.slug, values.name, description, values.recommendedInfill, values.recommendedMaterial, values.supports, uploadedImages, uploadedFiles);
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
            <ModalContent as="form" onSubmit={handleSubmit(onSubmit)} rounded={0}>
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
                        {((action === "update" && isDescriptionUpdated) || (action === "create")) && (
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <RichTextBlock value={description} setValue={setDescription} />
                            </FormControl>
                        )}
                        <FormControl isInvalid={!!errors.recommendedInfill}>
                            <FormLabel>Recommended infill %</FormLabel>
                            <Input type="number" min={0} max={100} {...register("recommendedInfill", { min: 0, max: 100, valueAsNumber: true })} />
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
                        <FormControl isInvalid={!!uploadedImagesError}>
                            <FormLabel>Images</FormLabel>
                            <FileUploader uploadedFiles={uploadedImages} setUploadedFiles={setUploadedImages} acceptedFileExtensions={["jpg", "png", "jpeg"]} />
                            {!!uploadedImagesError &&
                                <FormErrorMessage>{uploadedImagesError}</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl isInvalid={!!uploadedFilesError}>
                            <FormLabel>Models</FormLabel>
                            <FileUploader acceptedFileExtensions={["stl"]} uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles} />
                            {!!uploadedFilesError &&
                                <FormErrorMessage>{uploadedFilesError}</FormErrorMessage>
                            }
                        </FormControl>
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