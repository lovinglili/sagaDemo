import axios from 'axios'

export const api = {
    getUserList() {
      return axios.get('/xiaoyi/add')
    },
  }