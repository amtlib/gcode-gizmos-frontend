import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { format } from 'date-fns'
import React from "react";

export const Comment = ({ document, username, createdAt }: { username: string; document: any, createdAt: string }) => {
    const formattedDate = format(Date.parse(createdAt), 'dd/LL/yyyy HH:mm:ss');
    return (
        <Flex alignItems="center" gap={3} _dark={{ bg: "gray.700"}} bg="gray.100" position="relative">
            <Tooltip label={username}>
                <Avatar
                    my={8}
                    mx={3}
                    mr={1}
                    size={'sm'}
                    name={username}
                />
            </Tooltip>
            <Box px={3} pl={1} py={8} w="full">
                <DocumentRenderer document={document} />
            </Box>
            <Box _dark={{ color: "gray.300"}} color="gray.500" p={1} position="absolute" right="0" alignSelf="flex-end" justifySelf="flex-end" textAlign="right">{formattedDate}</Box>
        </Flex>
    )
}