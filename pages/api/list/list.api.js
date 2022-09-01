import axios from 'axios'

// Base_URL = '94.74.86.174:8080/api'


const GetList = async (token) => {
    console.log('token : ',token)
    try {
        const response = await axios.get(
            `http://94.74.86.174:8080/api/checklist`,{

                headers: {
                    'Authorization': `Bearer ${token}`,
                    }
            }
        )
        return response
      } catch (error) {
        return error
      }
}

export default {
    GetList
}