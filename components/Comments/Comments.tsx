import { Box, Heading, Stack, Text } from "@chakra-ui/react";
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
const compare = (a: CommentType, b: CommentType, prop: keyof CommentType) => {
    if (a[prop] < b[prop]) {
        return -1;
    }
    if (a[prop] > b[prop]) {
        return 1;
    }
    return 0;
}

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
            {comments.length === 0 && (
                <Text>No comments yet...</Text>
            )}
            {[...comments].sort((a, b) => -compare(a, b, "createdAt")).map((comment, key) => (
                <Comment key={key} createdAt={comment.createdAt} username={comment.author.username} document={comment.content.document} />
            ))}
        </Stack>
    )
}