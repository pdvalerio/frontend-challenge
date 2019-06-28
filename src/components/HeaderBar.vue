<template>
    <header class="flex-center-container">
        <div class="content flex-space-container">
            <div id="logo">Transcriptions</div>
            <div class="actions">
                <button class="upload" @click.prevent="uploadData"></button>
                <button class="fetch" @click.prevent="fetchData"></button>
            </div>
        </div>
    </header>
</template>

<script>
    import { EventDispatcher } from "@/services/EventDispatcher.js"

    export default {
        name: "HeaderBar",
        methods: {
            uploadData() {
                EventDispatcher.$emit('upload-data');
            },
            fetchData() {
                EventDispatcher.$emit('fetch-data');
            }
        }
    }
</script>

<style scoped>

    header {
        width: 100%;
        height: 69px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
        background-color: #ffffff;

    }

    .content {
        width: 100%;
        max-width: 690px;
        padding:0 4.8rem;
    }

    #logo {
        font-family: "Montserrat", sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        color: #414c5e;
    }

    button{
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 2.4rem;

        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-color: transparent;

        cursor: pointer;
    }

    button:last-child {
        margin-right: 0px;
    }

    button.upload {
        background-image: url("./../assets/images/upload.svg");

    }

    button.fetch {
        background-image: url("./../assets/images/fetch-document.svg");

    }


</style>