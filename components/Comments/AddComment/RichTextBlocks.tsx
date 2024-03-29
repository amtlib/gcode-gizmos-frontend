import React, { useCallback, useMemo, useState } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, Slate, ReactEditor } from "slate-react";
import { Editor, Transforms, createEditor, Node, Descendant } from "slate";
import { withHistory } from "slate-history";
import { Box } from "@chakra-ui/react";
import { Element, Leaf, toggleMark, Toolbar } from "./components";

// @refresh reset
const HOTKEYS: { [hotkey: string]: string } = {
    "mod+b": "bold",
    "mod+i": "italic",
    "mod+u": "underline",
    "mod+`": "code"
};

export interface RichTextBlockProps { }

export const RichTextBlock = ({ value, setValue }: { value: Descendant[]; setValue: React.Dispatch<React.SetStateAction<Descendant[]>>; }) => {
    const renderElement = useCallback((props) => <Element {...props} />, []);
    const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    //focus selection
    const [focused, setFocused] = React.useState(false);
    const savedSelection = React.useRef(editor.selection);

    const onFocus = React.useCallback(() => {
        setFocused(true);
        if (!editor.selection && value?.length) {
            Transforms.select(
                editor,
                savedSelection.current ?? Editor.end(editor, [])
            );
        }
    }, [editor, value]);

    const onBlur = React.useCallback(() => {
        setFocused(false);
        savedSelection.current = editor.selection;
    }, [editor]);

    const divRef = React.useRef<HTMLDivElement>(null);

    const focusEditor = React.useCallback(
        (e: React.MouseEvent) => {
            if (e.target === divRef.current) {
                ReactEditor.focus(editor);
                e.preventDefault();
            }
        },
        [editor]
    );

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
            }
        }
    };

    return (
        <Box ref={divRef} onMouseDown={focusEditor} borderWidth={"1px"}>
            <Slate
                editor={editor}
                value={value}
                onChange={(newValue) => setValue(newValue)}
            >
                <Toolbar />
                <Box padding={3}>
                    <Editable
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onKeyDown={onKeyDown}
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        placeholder="Write your text here..."
                        spellCheck
                        style={{ minHeight: "150px", resize: "vertical", overflow: "auto" }}
                    />
                </Box>
            </Slate>
        </Box>
    );
};
