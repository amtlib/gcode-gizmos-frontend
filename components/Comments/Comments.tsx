import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Comment } from "./Comment";
import { AddComment } from "./AddComment/AddComment";

type CommentType = {
    createdAt?: string;
    author?: {
        username?: string;
    };
    content?: {
        document?: any;
    };
};

export const Comments = ({ modelSlug, comments }: { modelSlug: string; comments: CommentType[] }) => {
    return (
        <Stack spacing={{ base: 3, md: 6 }}>
            <Box as={'header'}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: 'l', sm: 'xl', lg: 'xl' }}>
                    Comments
                </Heading>
            </Box>
            <AddComment modelSlug={modelSlug} />

            {comments.map((comment, key) => (
                <Comment key={key} createdAt={comment.createdAt} username={comment.author.username} document={comment.content.document} />
            ))}
        </Stack>
    )
}