import axios from 'axios'

const GetList = async (token) => {
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

const AddItem = async (data, token) => {
    try {
        const response = await axios.post(
            `http://94.74.86.174:8080/api/checklist`,
            data,{

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
    GetList,
    AddItem
}