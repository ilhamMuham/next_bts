import axios from 'axios'

const PostRegister = async (data) => {
    try {
        const response = await axios.post(
            `http://94.74.86.174:8080/api/register`,
            data
        )
        return response
      } catch (error) {
        return error
      }
}

export default {
    PostRegister
}