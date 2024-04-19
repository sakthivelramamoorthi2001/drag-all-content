import { defineStore } from "pinia";
import { stateTypeT } from "../type/seletedItemType";
import { listT } from "../type/dragOption";

export const useSelecteditem = defineStore({
  id: "selected-item",
  state: (): stateTypeT => ({
    content: null,
    id: null,
    style: null,
  }),
  getters: {
    // seletedItemGet() {
    //   return { ...this };
    // },
  },
  actions: {
    seletedItemClear() {
      this.content = null;
      this.id = null;
      this.style = null;
    },
    seletedItemUpdate(e: listT) {
      this.content = e.content;
      this.id = e.id;
      this.style = e.style || null;
    },
    seletedItemGet() {
      if (this.id == null || this.content == null) {
        return null;
      } else {
        return { id: this.id, content: this.content, style: this.style };
      }
    },
  },
});
