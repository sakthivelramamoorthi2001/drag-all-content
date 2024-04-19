import { defineStore } from "pinia";
import { DragSettingT } from "../type/dragSetting";

export const useSelecteditem = defineStore({
  id: "selected-item",
  state: (): { setting: DragSettingT } => ({
    setting: {
      order: "list",
    },
  }),
  getters: {
    // seletedItemGet() {
    //   return { ...this };
    // },
  },
  actions: {
    seletedItemClear() {},
    // seletedItemUpdate(e: listT) {
    // this.content = e.content;
    // this.id = e.id;
    // this.style = e.style || null;
    // },
    seletedItemGet() {
      // if (this.id == null || this.content == null) {
      //   return null;
      // } else {
      //   return { id: this.id, content: this.content, style: this.style };
      // }
    },
  },
});
