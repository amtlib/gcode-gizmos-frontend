import { Box, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Dispatch, SetStateAction, useState } from 'react';

const getFileExtension = (url: string) => {
    const regex = /\.([a-zA-Z0-9]+)$/;
    const match = regex.exec(url);
    if (match) {
        const extension = match[1];
        return extension;
    }
}

export const FileUploader = ({ uploadedFiles, setUploadedFiles, acceptedFileExtensions }: { uploadedFiles: File[], setUploadedFiles: Dispatch<SetStateAction<File[]>>; acceptedFileExtensions: string[] }) => {
    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const files = Array.from(event.dataTransfer.files) as File[];

        const allowedFiles = files.filter((file) =>
            acceptedFileExtensions.includes(getFileExtension(file.name))
        );

        // Add the filtered files to the uploadedFiles array
        setUploadedFiles((prevFiles) => [...prevFiles, ...allowedFiles]);
    };

    const handleDelete = (index) => {
        setUploadedFiles((prevFiles) => {
            const newFiles = [...prevFiles];
            newFiles.splice(index, 1);
            return newFiles;
        });
    };

    return (
        <Box
            border="2px dashed"
            borderRadius="md"
            borderColor="gray.300"
            p={4}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {uploadedFiles.length > 0 ? (
                <Box>
                    {uploadedFiles.map((file, index) => (
                        <Box key={index} display="flex" alignItems="center" mb={2}>
                            <Box>{file.name}</Box>
                            <IconButton
                                icon={<CloseIcon />}
                                variant="ghost"
                                ml={2}
                                onClick={() => handleDelete(index)}
                                aria-label="delete"
                            />
                        </Box>
                    ))}
                </Box>
            ) : (
                <Box>Drop files here ({acceptedFileExtensions.map(ext => `*.${ext}`).join(", ")})</Box>
            )}
        </Box>
    );
};