<template>

    <div class="Over-wrap-drag-add flex upcomming-div-have-top-12px">
        <p>Drag Add</p>


        <select v-model="formstate.typeOfContent" class="input">
            <option value="1">Normal Text</option>
            <option value="2">Html</option>
            <option value="3">Json</option>
        </select>

        <textarea :placeholder="formstate.placeHolder" class="text-area" v-model="formstate.content" />

        <button @click="() => (update(formstate))">Update </button>


    </div>
</template>


<script lang="ts">
export default {
    props: {
        update: {
            type: Function,
            default: () => { },
            required: true,
        }
    },
    data(): {
        formstate: {
            content: string,
            placeHolder: string,
            typeOfContent: string
        }
    } {
        return {
            formstate: {
                content: "",
                placeHolder: "sample data like this",
                typeOfContent: "1"
            }
        }
    },
    watch: {
        'formstate.typeOfContent': function (newValue, oldValue) {
            if (newValue == '1') {
                this.formstate.content = ""
                this.formstate.placeHolder = 'sample data like this'
            } else if (newValue == '2') {
                this.formstate.content = ""

                this.formstate.placeHolder = '<p>sample data like this</p>'
            } else if (newValue == '3') {
                this.formstate.content = ""

                this.formstate.placeHolder = '["sample", "data", "like", "this"]'
            }
        }
    }
}

</script>

<style>
.Over-wrap-drag-add {

    border: 1px solid black;
    height: 300px;
    width: 50%;
}



.input {
    width: 250px;
    height: 30px;
}

.text-area {
    width: 250px;
    height: 150px;
}

button {
    width: 250px;
    background: blue;
    color: white;
    height: 30px;
}
</style>