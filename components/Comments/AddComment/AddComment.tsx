import React, { useState } from "react";
import { RichTextBlock } from "./RichTextBlocks";
import { Button, Flex } from "@chakra-ui/react";
import { Descendant } from "slate";

const initialValue = [
    {
        type: "paragraph",
        children: [{ text: "" }]
    }
];

export const AddComment = () => {
    const [value, setValue] = useState<Descendant[]>(initialValue);
    return (
        <Flex direction="column" gap="3">
            <RichTextBlock value={value} setValue={setValue}/>
            <Button alignSelf="flex-end">Add comment</Button>
        </Flex>
    )
}