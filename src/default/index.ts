import { CSSProperties } from "vue";
import { DragComponentT, ListItemT } from "../type/index";
const list: ListItemT[] = [
  {
    id: "1",
    content: "<p >------ elit.</p>",
    label: "Label 1",
    style: {},
    data: {
      value: "Value 1",
    },
  },
  {
    id: "2",
    content: "<p>Sed do aliqua.</p>",
    label: "Label 2",
    style: {},
    data: {
      value: "Value 2",
    },
  },
  {
    id: "3",
    content:
      "<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
    label: "Label 3",
    style: {},
    data: {
      value: "Value 3",
    },
  },
  {
    id: "4",
    content:
      "<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
    label: "Label 4",
    style: {},
    data: {
      value: "Value 4",
    },
  },
  {
    id: "5",
    content:
      "<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    label: "Label 5",
    style: {},
    data: {
      value: "Value 5",
    },
  },
  {
    id: "6",
    content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
    label: "Label 6",
    style: {},
    data: {
      value: "Value 6",
    },
  },
  {
    id: "7",
    content:
      "<p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
    label: "Label 7",
    style: {},
    data: {
      value: "Value 7",
    },
  },
  {
    id: "8",
    content:
      "<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
    label: "Label 8",
    style: {},
    data: {
      value: "Value 8",
    },
  },
  {
    id: "9",
    content:
      "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjTg7qF7Haj4Wi2_8cZxD8Uake4V07FTSrQ&s ></img>",
    label: "Label 9",
    style: {},
    data: {
      value: "Value 9",
    },
  },
  {
    id: "10",
    content: "<p>borum.</p>",
    label: "Label 10",
    style: {},
    data: {
      value: "Value 10",
    },
  },
  {
    id: "11",
    content: "<p>borum.</p>",
    label: "Label 10",
    style: {},
    data: {
      value: "Value 10",
    },
  },
  {
    id: "10",
    content: "<p>sdfljbljknljbljbljbljbljb;lkn;kn;kn;kn;borum.</p>",
    label: "Label 10",
    style: {},
    data: {
      value: "Value 10",
    },
  },
  {
    id: "11",
    content: "<p>borum.</p>",
    label: "Label 10",
    style: {},
    data: {
      value: "Value 10",
    },
  },
];

export const defaultDragComponet: DragComponentT = {
  setting: {
    optionScreenHeight: "25%",
    optionScreenWidth: "100%",
    viewScreenHeight: "50%",
    viewScreenWidth: "100%",
    grid: true,
    optionScreenShow: true,
    positionBased: true,
  },
  list: list,
};

export const basicAttributOfElement: CSSProperties = {
  position: "absolute",
  fontSize: "",
  width: "max-content",
  height: "max-content",
  marginBottom: 0,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 0,
  textAlign: "left",
};
