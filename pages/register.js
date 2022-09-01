import { useState } from "react"
import {RegisterAPI} from './api'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userName, setUserName] = useState()
    const _changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const _changePassword = (e) => {
        setPassword(e.target.value)
    }

    const _changeUserName = (e) => {
        setUserName(e.target.value)
    }

    const _register = async () => {
        let data = {
            username : userName,
            email : email,
            password : password
        }

        try {
            const response = await RegisterAPI.PostRegister(data)
            if(response.status == 200) {
                router.push('/login')
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
                <p>Email</p>
                <input onChange={(e)=>_changeEmail(e)}/>
                <p>Password</p>
                <input onChange={(e)=>_changePassword(e)}/>
                <div>
                    <button onClick={_register} tyle='submit'>Register</button>
                </div>
            </div>
        </div>
    )
}
export default Login