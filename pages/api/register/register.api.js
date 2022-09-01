import axios from 'axios'

// Base_URL = '94.74.86.174:8080/api'

const PostRegister = async (data) => {
    console.log('data : ',data)
    try {
        const response = await axios.post(
            `http://94.74.86.174:8080/api/register`,
            data
            // await Header()
        )
        return response
      } catch (error) {
        return error
      }
}

export default {
    PostRegister
}