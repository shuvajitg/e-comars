import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"

export default function Login() {
    const navigation = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const login = async (e)=>{
        e.preventDefault()
        try {
            const {
                email,
                password
            } = user
            if(!email || !password){
                toast.error("invalid login credentials")
                return
            }
            else{
                await axios.post("/api/user/login", {
                    email,
                    password
            })
            navigation("/")
            toast.success("Sucess fully Login")
            }
        } catch (error) {
            console.log(error.message);
            
        }
    }
  return (
    <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
            <p className="text-gray-600 mb-6 text-sm">
                welcome back customer
            </p>
            <form autoComplete='off' >
                <div className="space-y-2">
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">Email address</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value={user.email}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="youremail.@domain.com"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value={user.password}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="remember" id="remember"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                        <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                    </div>
                    <a className="text-primary">Forgot password</a>
                </div>
                <div className="mt-4">
                    <button 
                        type="submit"
                        onClick={login}
                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">Login</button>
                </div>
            </form>
            <p className="mt-4 text-center text-gray-600">Don&#39;t have account? <Link to="/register"
                    className="text-primary">Register
                    now</Link></p>
        </div>
    </div>
  )
}
