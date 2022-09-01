import axios from 'axios'

// Base_URL = '94.74.86.174:8080/api'

const PostLogin = async (data) => {
    console.log('data : ',data)
    try {
        const response = await axios.post(
            `http://94.74.86.174:8080/api/login`,
            data
            // await Header()
        )
        return response
      } catch (error) {
        return error
      }
}

export default {
    PostLogin
}