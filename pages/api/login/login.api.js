import axios from 'axios'

const PostLogin = async (data) => {
    try {
        const response = await axios.post(
            `http://94.74.86.174:8080/api/login`,
            data
        )
        return response
      } catch (error) {
        return error
      }
}

export default {
    PostLogin
}