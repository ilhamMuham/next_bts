import { useEffect, useState } from "react"
import { ListAPI } from "./api"

const List = () => {
    const [dataList, setDataList] = useState([])

    const user = localStorage.getItem('user_info')
    ? JSON.parse(localStorage.getItem('user_info'))
    : null
    console.log('token : ',user.token)

    const _getList = async() => {
        try {
            const response = await ListAPI.GetList(user.token)
            console.log('response get list: ',response)
            if(response.status == 200) {
                setDataList(response.data.data)
            }
            } catch (err) {
            return err
        }
    }

    useEffect(()=> {
        _getList()
    },[])

    return (
        <div>
            <p>Name Item</p>
            <input/>
            <button>Add Item to List</button>
        </div>
    )
}
export default List