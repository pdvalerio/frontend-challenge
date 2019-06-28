<template>
    <div class="item" @mouseenter="showRemove" @mouseleave="hideRemove">
        <div class="check">
            <label>
                <input type="checkbox" class="checkbox" value="" />
                <span class="custom-checkbox"></span>
            </label>
        </div>
        <div class="avatar"><img src="@/assets/images/person.svg" /></div>
        <div class="container">
            <input type="text"
                   class="title"
                   placeholder="Item Title"
                   v-model="title"
                   @change="update"
                   @keyup.enter="removeFocus" />

            <resizable-textarea>
                <textarea
                    class="content"
                    placeholder="Item Content here"
                    v-model="content"
                    @change="update"
                ></textarea>
            </resizable-textarea>
        </div>
        <button class="remove" v-show="removeVisible" @click.prevent="remove"></button>
    </div>
</template>

<script>

    import ResizableTextarea from './ui/ResizableTextArea.js'
    import { EventDispatcher } from '../services/EventDispatcher.js'

    export default {
        name: "Transcript",
        components: {
            ResizableTextarea
        },
        data: function () {
            return {
                removeVisible: false,
                title: this.voice,
                content: this.text
            }
        },
        props:['voice', 'text', 'id','itemID'],
        methods: {
            showRemove () {
                this.removeVisible = true;
            },
            hideRemove () {
                this.removeVisible = false;
            },
            remove () {
                EventDispatcher.$emit('remove-data', this.itemID);
            },
            update () {
                EventDispatcher.$emit('update-data', this.itemID, this.title, this.content);
            },
            removeFocus (event) {
                event.target.blur();
            }

        }
    }
</script>

<style scoped>

    .item {
        position:relative;

        width: 100%;

        padding: 2.4rem 5.3rem 2.4rem 2.4rem;

        border-bottom: 1px solid #eaedef;
        background-color: #ffffff;

        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;

        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;


        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;

        -webkit-align-content: flex-start;
        -ms-flex-line-pack: start;
        align-content: flex-start;

        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;

    }

    .item:last-child {
        border-bottom: 0px;
    }

    .avatar {
        margin-right: 0.8rem;
        margin-left: 0.8rem;

    }

    .container {
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        margin-top:4px;
    }

    .title {
        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem;
        font-weight: 600;
        color: #566074;

        margin-bottom: 8px;

    }

    textarea.content {
        font-family: "Open Sans", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        color: #778195;

        height:auto;

        overflow-y:hidden;
        resize: none;
    }

    button.remove{
        width: 1.6rem;
        height: 2.0rem;

        background-image: url("./../assets/images/delete.svg");
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;

        cursor: pointer;

        position: absolute;
        top: 2.4rem;
        right: 2.4rem;
    }

    .check {
        flex-shrink: 0;
        position:relative;

        width: 1.6rem;
        height: 1.6rem;

        margin-right: 0.8rem;
        margin-top: 0.5rem;

    }

    input[type='checkbox'].checkbox {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    input[type='checkbox'].checkbox ~ .custom-checkbox {
        position:relative;
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 2px;
        border: 2px solid #859eff;
        background-color: #ffffff;
        cursor: pointer;
    }

    input[type='checkbox'].checkbox:checked ~ .custom-checkbox {
        background-image: url("./../assets/images/check.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-color: #859eff;
    }

    textarea,
    input[type="text"] {
        border: 0;
        width: 100%;
    }

    textarea::placeholder,
    input[type="text"]::placeholder {
        opacity: 0.7;
    }

</style>