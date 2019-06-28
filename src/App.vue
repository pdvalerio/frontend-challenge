<template>
  <div id="app" class="flex-center-container flex-column flex-wrap">
    <HeaderBar />
    <TranscriptionsList
        :listItems="listItems"
    />
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import TranscriptionsList from "./components/TranscriptionsList.vue"
import DataHandler from "./services/DataHandler.js"
import { EventDispatcher } from "./services/EventDispatcher.js"

export default {
    name: 'app',
    data: function() {
        return {
            listItems: [],
            itemID: 0
        }
    },
    computed: {
        transcripts: {
            get: function () {
                return this.listItems;
            },
            set: function (data) {

                this.listItems = data;
            }

        }

    },
    components: {
        HeaderBar,
        TranscriptionsList
    },
    methods: {
        uploadData () {

            let newData = JSON.parse(JSON.stringify(this.listItems));

            //Remove app internal property 'itemID'
            newData.forEach( (item) => {
              delete item.itemID;
            });

            DataHandler.post(newData)
              .then(response => {
                  //Insert post success logic
                  return response;
              })
              .catch(error => {

                  //Insert post error logice
                  return error;
              });
        },

        fetchData () {

           DataHandler.fetch().then(response => {

                response.forEach( (item) => {
                  item["itemID"] = this.itemID++;
                });

                this.listItems = this.listItems.concat(response);

            });

        },

        updateData(itemID, title,content) {

            let index = this._getIndexByItemID(itemID);
            let id = this.listItems[index].id;
            this.listItems.splice(index,1, {itemID: itemID, id: id, voice: title, text: content});
        },

        removeData(itemID) {

            let index = this._getIndexByItemID(itemID);
            this.listItems.splice(index,1);

        },

        addData() {

            // New data ID will be -1 to indicate new data not in backend
            this.listItems.push ({
                id: -1,
                voice: '',
                text: '',
                itemID: this.itemID++
            });
        },

      _getIndexByItemID (itemID) {
            return this.listItems.findIndex(element => element.itemID === itemID);
        }

    },
    mounted() {
        EventDispatcher.$on('remove-data', this.removeData);
        EventDispatcher.$on('add-data', this.addData);
        EventDispatcher.$on('update-data', this.updateData);
        EventDispatcher.$on('upload-data', this.uploadData);
        EventDispatcher.$on('fetch-data', this.fetchData);
    },
    beforeDestroy() {
        EventDispatcher.$off('remove-data', this.removeData);
        EventDispatcher.$off('add-data', this.addData);
        EventDispatcher.$off('update-data', this.updateData);
        EventDispatcher.$off('upload-data', this.uploadData);
        EventDispatcher.$off('fetch-data', this.fetchData);
    }
}
</script>

<style src='./assets/css/layout.css'></style>

<style>

  #app {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: #f6f7f8;

    margin-bottom: 6.6rem;

  }
</style>
