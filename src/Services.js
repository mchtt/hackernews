import axios from "axios"

export const getRequest = {
  get(search) {
    return axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
  }
}