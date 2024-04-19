import { CSSProperties } from "vue";
import { listT } from "./dragOption";

export type stateTypeT = {
  id: string | null;
  content: string | null;
  style: CSSProperties | null;
};
