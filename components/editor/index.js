import * as React from "react";
import {
    Editor,
    EditorTools,
    EditorUtils,
    ProseMirror,
} from "@progress/kendo-react-editor";
// import mySchema from "./schema";
import "@progress/kendo-theme-default/dist/all.css";
import MyFontSizeTool from "./CustomTools/CustomFontSize";
import {useState} from "react";
import CustomFontName from "./CustomTools/CustomFontName";
import mySchema from "./schema/schema";
import {
    defaultMarkdownParser,
    defaultMarkdownSerializer,
} from "prosemirror-markdown";

const {
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Subscript,
    Superscript,
    AlignLeft,
    AlignCenter,
    AlignRight,
    AlignJustify,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    ForeColor,
    FontSize,
    FontName,
    FormatBlock,
    Link,
    Unlink,
    InsertImage,
    ViewHtml,
    InsertTable,
    AddRowBefore,
    AddRowAfter,
    AddColumnBefore,
    AddColumnAfter,
    DeleteRow,
    DeleteColumn,
    DeleteTable,
    MergeCells,
    SplitCell,
} = EditorTools;

const styles = `
    .k-content {
      font-size: 24px;
      color: #92400E;
    }
    p {
        color: #53d2fa;
    }
    h1 {
        color:red;
    }
`;


export const EditorComponent = () => {

    const {EditorView, EditorState, InputRule, inputRules} = ProseMirror;

    const [state, setState] = useState(
        defaultMarkdownParser.parse("")
    )
    const onChange = (e) => {
        setState(e.value)
    }
    console.log({EditorView, EditorState})

    const inputRule = (nodes) => {
        return inputRules({
            rules: [
                new InputRule(/hello$/, 'hi')
            ]
        })
    }

    const onMount = (event) => {
        const iframeDocument = event.dom.ownerDocument;
        const style = iframeDocument.createElement('style');
        style.appendChild(iframeDocument.createTextNode(styles));
        iframeDocument.head.appendChild(style);
    };


    return (
        <Editor
            tools={[
                [Bold, Italic, Underline, Strikethrough],
                [Subscript, Superscript],
                [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                [Indent, Outdent],
                [OrderedList, UnorderedList],
                ForeColor,
                FontSize,
                MyFontSizeTool,
                FontName,
                CustomFontName,
                FormatBlock,
                [Undo, Redo],
                [Link, Unlink, InsertImage, ViewHtml],
                [InsertTable],
                [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
                [DeleteRow, DeleteColumn, DeleteTable],
                [MergeCells, SplitCell],
            ]}
            contentStyle={{
                height: 630,
                styles
            }}
            defaultContent={"content"}
            onMount={onMount}
            onChange={onChange}
            value={state}
        />
    );
};