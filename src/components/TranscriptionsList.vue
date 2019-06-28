<template>
    <div class="list-container flex-center-container flex-column">
        <div class="list flex-center-container flex-column">
            <Transcript
                    v-for="item in listItems"
                    :key="item.itemID"
                    v-bind="item" />

        </div>
        <button class="add" @click.prevent = "addRow"></button>
    </div>
</template>

<script>
    import Transcript from "./Transcript";
    import { EventDispatcher } from "@/services/EventDispatcher.js"

    export default {
        name: "TranscriptionsList",
        components: {Transcript},
        props: {
            listItems: {
                            type: Array,
                            required: true,
                            default: []
                        }
        },
        methods: {
            addRow() {
                EventDispatcher.$emit('add-data');
            }
        }

    }

</script>

<style scoped>

    .list-container {
        padding: 2.4rem;
        width: 100%;
        max-width: 786px;
    }

    .list {
        width: 100%;
        border: 1px solid #eaedef;
        background-color: #ffffff;

    }

    button.add {
        width: 3.2rem;
        height: 3.2rem;

        background-image: url("./../assets/images/add-row.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-color: transparent;

        margin-top: 2.4rem;

        cursor: pointer;
    }


</style>