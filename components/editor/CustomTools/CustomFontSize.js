import * as React from "react";
import {EditorTools, EditorToolsSettings} from "@progress/kendo-react-editor";
const fontSizeToolSettings = {
  ...EditorToolsSettings.fontSize,
  defaultItem:{

    text:"Размер текста",
    value:""
  },
  items: [

    {
      text: "12",
      value: "12pt",
    },
    {
      text: "14",
      value: "14pt",
    },
    {
      text: "18",
      value: "18pt",
    },
    {
      text: "22",
      value: "22pt",
    },
    {
      text: "36",
      value: "36pt",
    },
    {
      text: "50",
      value: "50pt",
    },
  ],
}; // Creates custom FontSize tool.

const WrapperFontSize =
  EditorTools.createStyleDropDownList(fontSizeToolSettings); // Styles the FontSize tool (DropDownList).

const CustomFontSize = (props) => (
  <WrapperFontSize
    {...props}
    style={{
      width: "130px",
      ...props.style,
    }}
  />
);

export default CustomFontSize;
