import {
    IconButton,
    HStack,
    useColorMode,
    chakra,
    ListItem,
    OrderedList,
    UnorderedList,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
    MdCode,
    MdFormatBold,
    MdFormatItalic,
    MdFormatListBulleted,
    MdFormatListNumbered,
    MdFormatQuote,
    MdFormatUnderlined,
} from "react-icons/md";
import {
    useSlate,
    ReactEditor,
    RenderElementProps
} from "slate-react";
import { Editor, Transforms, Element as SlateElement } from "slate";
import { HistoryEditor } from "slate-history";

type EditorProps = Editor | ReactEditor | HistoryEditor;
const LIST_TYPES = ["ordered-list", "unordered-list"];

const isBlockActive = (editor: EditorProps, format: string) => {
    const nodeGen = Editor.nodes(editor, {
        match: (n) =>
            !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format
    });

    let node = nodeGen.next();
    while (!node.done) {
        return true;
    }
    return false;
};

const isMarkActive = (editor: EditorProps, format: string) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

export const toggleBlock = (editor: EditorProps, format: string) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
        match: (n) =>
            LIST_TYPES.includes(
                (!Editor.isEditor(n) && SlateElement.isElement(n) && n.type) as string
            ),
        split: true
    });
    const newProperties: Partial<SlateElement> = {
        type: isActive ? "paragraph" : isList ? "list-item" : format
    };
    Transforms.setNodes(editor, newProperties);

    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};

export const toggleMark = (editor: EditorProps, format: string) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
};

export const MarkButton = ({
    format,
    icon
}: {
    format: string;
    icon: ReactElement;
}) => {
    const editor = useSlate();
    return (
        <IconButton
            variant="outline"
            colorScheme="purple"
            isActive={isMarkActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault();
                toggleMark(editor, format);
            }}
            aria-label={format}
            icon={icon}
            borderWidth={0}
            fontSize={"20px"}
        />
    );
};

export const BlockButton = ({
    format,
    icon
}: {
    format: string;
    icon: ReactElement;
}) => {
    const editor = useSlate();
    return (
        <IconButton
            variant="outline"
            colorScheme="purple"
            isActive={isBlockActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault();
                toggleBlock(editor, format);
            }}
            aria-label={format}
            icon={icon}
            borderWidth={0}
            fontSize={"20px"}
        />
    );
};

export const Toolbar = () => {
    return (
        <HStack
            borderWidth={"0 0 1px 0"}
            padding={"10px 5px"}
            spacing={"5px"}
            wrap={"wrap"}
        >
            <MarkButton format="bold" icon={<MdFormatBold />} />
            <MarkButton format="italic" icon={<MdFormatItalic />} />
            <MarkButton format="underline" icon={<MdFormatUnderlined />} />
            <MarkButton format="code" icon={<MdCode />} />
            <BlockButton format="blockquote" icon={<MdFormatQuote />} />
            <BlockButton format="ordered-list" icon={<MdFormatListNumbered />} />
            <BlockButton format="unordered-list" icon={<MdFormatListBulleted />} />
        </HStack>
    );
};

const BlockquoteStyle: React.CSSProperties | undefined = {
    margin: "1.5em 10px",
    padding: "0.5em 10px"
};

export const Element = ({
    attributes,
    children,
    element
}: RenderElementProps) => {
    switch (element.type) {
        case "blockquote":
            return (
                <chakra.blockquote
                    style={BlockquoteStyle}
                    borderLeftWidth={"10px"}
                    borderLeftColor={"gray.200"}
                    {...attributes}
                >
                    {children}
                </chakra.blockquote>
            );
        case "list-item":
            return <ListItem {...attributes}>{children}</ListItem>;
        case "ordered-list":
            return <OrderedList {...attributes}>{children}</OrderedList>;
        case "unordered-list":
            return <UnorderedList {...attributes}>{children}</UnorderedList>;
        default:
            return <p {...attributes}>{children}</p>;
    }
};

export const Leaf = ({ attributes, children, leaf }) => {
    const { colorMode } = useColorMode();

    if (leaf.bold) {
        children = <strong {...attributes}>{children}</strong>;
    }

    if (leaf.code) {
        children = (
            <chakra.code
                padding={"3px"}
                backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
                fontSize={"90%"}
                {...attributes}
            >
                {children}
            </chakra.code>
        );
    }

    if (leaf.italic) {
        children = <em {...attributes}>{children}</em>;
    }

    if (leaf.underline) {
        children = <u {...attributes}>{children}</u>;
    }

    return <span {...attributes}>{children}</span>;
};
