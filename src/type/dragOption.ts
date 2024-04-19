import { CSSProperties } from "vue";

export type listT = {
  id: string;
  content: string;
  style?: CSSProperties;
};

export type optionComponentT = {
  //   list: listT[];
};

export type optionComponentPropsT = {
  list: listT[];
};
