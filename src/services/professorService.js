import axios from 'axios'

const url = 'https://sched-backend.herokuapp.com/'

export default {
    getProfessors() {
        return axios.get(url + 'professors')
            .then(response => response.data)
    },

    postProfessor(data) {
        return axios.post(url + 'professors', data)
            .then(response => response.data)
    },

    updateProfessor(id, data) {
        return axios.put(url + 'professors/' + id, data)
            .then(response => response.data)
    },

    deleteProfessor(id) {
        return axios.delete(url + 'professors/' + id)
            .then(response => response.data)
    }
}