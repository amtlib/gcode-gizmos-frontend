import { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Button, useToast } from '@chakra-ui/react';

const Download = ({ model }: { model: { name?: string; images?: { image?: { url: string } }[], files?: { file?: { url: string } }[] } }) => {
    const [isCreating, setIsCreating] = useState(false);
    const toast = useToast();

    const getFileExtension = (url: string) => {
        const regex = /\.([a-zA-Z0-9]+)\?.*$/;
        const match = regex.exec(url);
        if (match) {
            const extension = match[1];
            return extension;
        }
    }

    const zipFile = async (folder, prefix, url, index) => {
        const response = await fetch(url);
        const blob = await response.blob();
        folder.file(`${prefix}-${index}.${getFileExtension(url)}`, blob);
    }

    const handleCreateZip = async () => {
        setIsCreating(true);
        const zip = new JSZip();

        try {
            const imageUrls = [...model.images.map(({ image }) => image.url)];
            const fileUrls = [...model.files.map(({ file }) => file.url)];

            const imagesFolder = zip.folder("images");
            const filesFolder = zip.folder("files");

            const promises = [...imageUrls.map((url, index) => zipFile(imagesFolder, "image", url, index + 1)), ...fileUrls.map((url, index) => zipFile(filesFolder, "file", url, index + 1))];
            await Promise.all(promises);

            const content = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' });
            saveAs(content, `${model.name || "files"}.zip`)

            setIsCreating(false);
            toast({
                title: 'Zip file created',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            console.error(error);
            setIsCreating(false);
            toast({
                title: 'Error creating zip file',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Button colorScheme="blue" onClick={handleCreateZip} isLoading={isCreating}>
            Download all files
        </Button>
    );
};

export default Download;