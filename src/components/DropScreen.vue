<template>
    <div class="OverWrap-drop-box" id="dropId" @dragover.prevent @drop="(e) => dropItem(e)">

        <div class="divvvv" v-for="(i, index) in list" :key="i.id" v-html="i.content" :style="i.style"
            @drag="(e) => dragging(e, i)" @dragstart="(e) => {
        dragStart(e, i, index)
    }">
        </div>
    </div>
</template>



<script lang="ts">

import { listT } from '../type/dragOption'
import { useSelecteditem } from "../store/selectedItem";




// const selectedItem = useSelecteditem();

export default {

    data(): { list: listT[] } {
        return {
            list: []
        }
    },
    methods: {
        dragStart(event: DragEvent, item: listT, index: number) {
            // selectedItem.seletedItemUpdate(item, index)
        },
        dragging(event: DragEvent, data: any) {
        },
        dropItem(event: DragEvent) {
            let data = useSelecteditem().seletedItemGet();

            if (!data) {
                return;
            }

            console.log(data.content, 'drops');
            useSelecteditem().seletedItemClear()
            console.log("droped", event);
            this.list.push({
                content: data.content,
                id: data.id,
                style: {}
            })
        }
    }

}

</script>

<style>
.divvvv {
    overflow: scroll;
}

.divvvv>* {
    margin: 0% !important;
    padding: 0% !important;
}
</style>