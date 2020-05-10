import axios from 'axios'

export default axios.create({
  baseURL: 'http://sf-legacy-api.now.sh',
})
