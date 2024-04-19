<template>

    <div class="OverWrap-drag-option-box">
        <div draggable="true" class="OverWrap-drag-option-box-item" v-for="(i, index) in list" :key="i.id"
            v-html="i.content" @drag="(e) => dragging(e, i)" @dragstart="(e) => {
            dragStart(e, i, index)
        }"></div>


    </div>

</template>



<script lang="ts">

import { listT, optionComponentT } from '../type/dragOption'
import { useSelecteditem } from "../store/selectedItem";


export default {
    props: {
        list: {
            type: Array<listT>,
            required: true,
            default: []

        }
    },
    data(): optionComponentT {

        return {

        }
    },
    methods: {
        dragging(event: DragEvent, item: listT) {
            // console.log(event, item);

        },
        dragStart(event: DragEvent, item: listT, index: number) {
            useSelecteditem().seletedItemUpdate(item);
            console.log(event, item, index);
        },
    },
    mounted() {
        console.log(this.list, 'listtt');

    }
}

</script>