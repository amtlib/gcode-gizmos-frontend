import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { Comment } from "./Comment";
import { AddComment } from "./AddComment/AddComment";

type CommentType = {
    author?: {
        username?: string;
    };
    content?: {
        document?: any;
    };
};

export const Comments = ({ comments }: { comments: CommentType[] }) => {
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
            <AddComment />

            {comments.map((comment, key) => (
                <Comment key={key} username={comment.author.username} document={comment.content.document} />
            ))}
        </Stack>
    )
}