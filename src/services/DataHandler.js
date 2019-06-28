import axios from 'axios'

const baseURI = 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c';

axios.defaults.baseURL = baseURI;

export default {

    fetch() {
        return axios.get("/")
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error;
            })
    },

    post(data) {
        return axios.post("/", data)
            .then(response => {
                window.console.log("POST CALL:", response);
                return response.data;
            })
            .catch(error => {
                window.console.log("POST ERROR:", error);
                return error;
            })
    }
}