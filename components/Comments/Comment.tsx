import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { format } from 'date-fns'
import React from "react";

export const Comment = ({ document, username, createdAt }: { username: string; document: any, createdAt: string }) => {
    const formattedDate = format(Date.parse(createdAt), 'dd/LL/yyyy HH:mm:ss');
    return (
        <Flex alignItems="flex-start" gap={3} bg="gray.100" position="relative">
            <Tooltip label={username}>
                <Avatar
                    my={8}
                    mx={3}
                    alignSelf="flex-start"
                    size={'sm'}
                    name={username}
                />
            </Tooltip>
            <Box px={3} py={8} w="full" alignSelf="flex-start">
                <DocumentRenderer document={document} />
            </Box>
            <Box color="gray.500" p={1} position="absolute" right="0" alignSelf="flex-end" justifySelf="flex-end" textAlign="right">{formattedDate}</Box>
        </Flex>
    )
}