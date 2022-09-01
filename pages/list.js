import { useEffect, useState } from "react"
import { ListAPI } from "./api"

const List = () => {
    const [dataList, setDataList] = useState([])
    const [nameItem, setNameItem] = useState('')

    const user = localStorage.getItem('user_info')
    ? JSON.parse(localStorage.getItem('user_info'))
    : null

    const _getList = async() => {
        try {
            const response = await ListAPI.GetList(user.token)
            if(response.status == 200) {
                setDataList(response.data.data)
            }
            } catch (err) {
            return err
        }
    }

    const _addItem = async() => {
        let data = {
            name : nameItem
        }
        try {
            const response = await ListAPI.AddItem(data, user.token)
            if(response.status == 200) {
                _getList()
            }
            } catch (err) {
            return err
        }
    }

    const _changeName = (e) => {
        setNameItem(e.target.value)
    }

    useEffect(()=> {
        _getList()
    },[])

    return (
        <div>
            <p>Name Item</p>
            <input onChange={(e)=>_changeName(e)}/>
            <button onClick={()=>_addItem()}>Add Item to List</button>
            <div style={{marginTop: '5vh'}}>
                {dataList.length > 0 ? dataList.map((e,i)=> {
                    return (
                        <div key={i}>{e.name}</div>
                    )
                }): null}

            </div>
        </div>
    )
}
export default List