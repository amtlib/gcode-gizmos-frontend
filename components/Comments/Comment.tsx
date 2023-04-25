import { Avatar, Box, Flex, Tooltip } from "@chakra-ui/react";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import React from "react";

export const Comment = ({ document, username }: { username: string; document: any }) => {
    return (
        <Flex alignItems="flex-start" gap={3} bg="gray.100" p={5}>
            <Tooltip label={username}>
                <Avatar
                    size={'sm'}
                    name={username}
                />
            </Tooltip>
            <DocumentRenderer document={document} />
        </Flex>
    )
}