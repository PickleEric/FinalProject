import axios from "axios"

let base_url = "/api/clients"

export default {
    addClient(client) {
        return axios.post(base_url, client).then(response => {
            return response.data
        })
    }
}