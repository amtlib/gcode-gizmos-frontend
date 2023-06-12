import React, { useContext, useState } from "react";
import { RichTextBlock } from "./RichTextBlocks";
import { Button, Flex } from "@chakra-ui/react";
import { Descendant } from "slate";
import { ModelContext } from "../../../contexts/ModelContext";
import { UserContext } from "../../../contexts/UserContext";
import { Text } from "@chakra-ui/react";

const initialValue = [
    {
        type: "paragraph",
        children: [{ text: "" }]
    }
];

export const AddComment = ({ modelSlug }: {modelSlug: string }) => {
    const { loggedIn } = useContext(UserContext);
    const [value, setValue] = useState<Descendant[]>(initialValue);
    const [hasErrors, setHasErrors] = useState<boolean>(false);
    const { createComment} = useContext(ModelContext);

    if(!loggedIn) {
        return null;
    }
    const handleSend = () => {
        // @ts-ignore
        if (value.length < 2 && value?.[0]?.children?.[0].text === "") {
            setHasErrors(true);
        } else {
            createComment(modelSlug, value);
            setValue(initialValue);
            setHasErrors(false);
        }
    }

    return (
        <Flex direction="column" gap="3">
            <RichTextBlock value={value} setValue={setValue}/>
            {hasErrors && <Text color="red.500">Please provide any content before adding the comment</Text>}
            <Button alignSelf="flex-end" onClick={handleSend}>Add comment</Button>
        </Flex>
    )
}