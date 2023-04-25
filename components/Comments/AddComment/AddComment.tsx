import React, { useContext, useState } from "react";
import { RichTextBlock } from "./RichTextBlocks";
import { Button, Flex } from "@chakra-ui/react";
import { Descendant } from "slate";
import { ModelContext } from "../../../contexts/ModelContext";
import { UserContext } from "../../../contexts/UserContext";

const initialValue = [
    {
        type: "paragraph",
        children: [{ text: "" }]
    }
];

export const AddComment = ({ modelSlug }: {modelSlug: string }) => {
    const { loggedIn } = useContext(UserContext);
    const [value, setValue] = useState<Descendant[]>(initialValue);
    const { createComment} = useContext(ModelContext);

    if(!loggedIn) {
        return null;
    }

    const handleSend = () => {
        createComment(modelSlug, value);
    }
    return (
        <Flex direction="column" gap="3">
            <RichTextBlock value={value} setValue={setValue}/>
            <Button alignSelf="flex-end" onClick={handleSend}>Add comment</Button>
        </Flex>
    )
}