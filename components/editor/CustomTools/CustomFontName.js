import * as React from "react";
import {EditorTools, EditorToolsSettings} from "@progress/kendo-react-editor";

const fonts = [
    {
        style: {fontFamily: 'Arial, Helvetica, sans-serif'},
        text: "Arial",
        value: "Arial, Helvetica, sans-serif"
    },
    {
        style: {fontFamily: "'Times New Roman', Times,serif"},
        text: "Times New Roman",
        value: "'Times New Roman', Times,serif",
    }
]
const fontNameToolSettings = {
    ...EditorToolsSettings.fontName,
    defaultItem: {
        text: "Шрифт",
        value: ""

    },
    items: [...fonts],
};

console.log({EditorTools})
console.log("fontNameToolSettings", fontNameToolSettings)
console.log({EditorToolsSettings})

const WrapperFontName =
    EditorTools.createStyleDropDownList(fontNameToolSettings); // Styles the FontSize tool (DropDownList).

const CustomFontName = (props) => (
    <WrapperFontName
        {...props}
        style={{
            width: "130px",
            ...props.style,
        }}
    />
);

export default CustomFontName;
