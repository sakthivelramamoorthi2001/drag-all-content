<script lang="ts">

// import { uniqueId } from './utils/index'
import DropScreen from './components/DropScreen.vue'
import DragOption from './components/DragOption.vue'
import DragSetting from './components/DragSetting.vue';
import DragAdd from './components/DragAdd.vue';

import { listT } from './type/dragOption';
import { uniqueId } from './utils';

export default {
  data(): { list: Array<listT>, error?: string } {
    return {
      list: [
        {
          id: '1',
          content: '<p>sample data can able to drag </p>',
        },

      ],
      error: ''
    }
  },
  methods: {
    addData(e: {
      content: string,
      typeOfContent: string
    }) {

      if (e.typeOfContent == '1') {
        this.updateList('<p>' + e.content + '</p>')

      } else if (e.typeOfContent == '2') {
        this.updateList(e.content)

      } else if (e.typeOfContent == '3') {

        let data: Array<string> = [];
        try {
          data = JSON.parse(e.content);
        } catch (erro) {
          this.error = "can you put correct json"
          setTimeout(() => {
            this.error = ''
          }, 1000);
          return;
        }
        data.map(i => {
          this.updateList(i)
        })


      }
    },
    updateList(content: string) {
      content.length && this.list.push({
        content: '<p>' + content + '</p>',
        id: uniqueId(),
      })
    }
  },

  components: {
    DropScreen,
    DragOption,
    DragSetting,
    DragAdd
  },

}

</script>

<template>
  <div class="container">

    <p v-if="error && error.length">{{ error }}</p>
    <div style="display: flex;width: 100%;">
      <DragSetting />
      <DragAdd :update="addData" />
    </div>


    <p>Drag Option</p>


    <DragOption :list="list" />

    <p>Drop screen</p>
    <DropScreen />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.container>* {
  margin-top: 10px;
}
</style>
