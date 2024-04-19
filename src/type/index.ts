import { CSSProperties, VueElement } from "vue";
import { basicAttributOfElement } from "../default/index";

export type DragComponentT = {
  setting: settingTypeT;
  list: Array<ListItemT>;
};

export enum elementMoveSideE {
  left = "left",
  right = "right",
  top = "top",
  bottom = "bottom",
}

export type basicAttributOfElementT = typeof basicAttributOfElement;
export type selestedItemT = {
  id: string | null;
  style: CSSProperties;
  listItem: ListItemT | null;
};

export type formstateT = {
  basicAttributOfElement: basicAttributOfElementT;
  selectedItem: selestedItemT;
  viewSceernList: ListItemT[];
};

export type DragComponentComponentT = {
  data: {
    setting: settingTypeT;
    list: Array<ListItemT>;
    formstate: formstateT;
  };
};

export type settingTypeT = {
  viewScreenHeight: string;
  viewScreenWidth: string;
  optionScreenHeight: string;
  optionScreenWidth: string;
  grid?: boolean;
  optionScreenShow?: boolean;
  positionBased: boolean;
};

export type ListItemT = {
  id: string;
  label: string;
  content: string;
  data?: any;
  style: CSSProperties;
};
