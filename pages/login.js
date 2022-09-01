import { useState } from "react"
import {LoginAPI} from './api'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const _changeUserName = (e) => {
        setUserName(e.target.value)
    }

    const _changePassword = (e) => {
        setPassword(e.target.value)
    }

    const _login = async () => {
        let data = {
            username : userName,
            password : password
        }

        try {
            const response = await LoginAPI.PostLogin(data)
            if(response.status == 200) {
                localStorage.setItem("user_info",JSON.stringify(response.data.data))
                router.push('/list')
            }
          } catch (err) {
            return err
          }
    }

    return (
        <div>
            <div>
                <p>User Name</p>
                <input onChange={(e)=>_changeUserName(e)}/>
                <p>Password</p>
                <input onChange={(e)=>_changePassword(e)}/>
                <div>
                    <button onClick={_login} tyle='submit'>Login</button>
                    <button onClick={()=>router.push('/register')} tyle='submit'>Register</button>
                </div>
            </div>
        </div>
    )
}
export default Login