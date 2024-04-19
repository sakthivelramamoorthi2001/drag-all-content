<template>


    <div class="OverWrap-drag-setting flex upcomming-div-have-top-12px">
        <p>Drag setting</p>

        <div class="flexRow upcomming-div-have-left-12px">

            <div>
                <p>1. Drop Sceern list setting</p>
                <input type="radio" id="option2" name="options" value="list" v-model="order">
                <label for="option1">List </label>
                <input type="radio" id="option1" name="options" value="index" v-model="order">
                <label for="option1">Index </label>
                <input type="radio" id="option1" name="options" value="grid" v-model="order">
                <label for="option1">Grid</label>
                <input type="radio" id="option3" name="options" value="position" v-model="order">
                <label for="option1">Position</label>
            </div>
        </div>
    </div>

</template>



<script lang="ts">
import { DragSettingT } from '../type/dragSetting'

export default {
    data(): DragSettingT {
        return {
            order: 'list',
        }
    }
}

</script>

<style>
.OverWrap-drag-setting {
    border: 1px solid black;
    width: 50%;
    height: 300px;
    overflow: scroll;
}
</style>