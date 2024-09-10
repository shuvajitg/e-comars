import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigation = useNavigate()

    const [conframePassword, setConframePassword] = useState("")
    const [user, setUser] = useState({
        email: '',
        number: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((user)=>({
            ...user,
            [name]: value,
        }))
    }
    const creatAccount = async (e) => {
        e.preventDefault()
        try {
            const {
                email,
                number,
                password
            } = user
            console.log("users are ", user);
            
            if(!email || !number || !password ) {
                alert("All fields are required")
                return
            }if(password === conframePassword) {
                await axios.post("/api/user/register",{
                    email,
                    number,
                    password
                })
                navigation("/login")
            }else{
                alert("Passwords do not match")
            }
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <div className="contain py-16">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
            <p className="text-gray-600 mb-6 text-sm">
                Register for new cosutumer
            </p>
            <form autoComplete="off">
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
                        <label htmlFor="name" className="text-gray-600 mb-2 block">Number</label>
                        <input 
                            type="text" 
                            name="number" 
                            id="number"
                            value={user.number}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="+91"/>
                    </div>
                    <div>
                        <label 
                            htmlFor="password" 
                            className="text-gray-600 mb-2 block"
                            >Password</label>

                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            value={user.password}
                            onChange={handleChange}
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                    <div>
                        <label htmlFor="confirm" className="text-gray-600 mb-2 block">Confirm password</label>
                        <input 
                            type="password" 
                            name="confirm" 
                            id="confirm"
                            value={conframePassword}
                            onChange={(e) => setConframePassword(e.target.value)}
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="*******"/>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                        <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <a
                                href="#" className="text-primary">terms & conditions</a></label>
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        onClick={creatAccount}
                        className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">create
                        account</button>
                </div>
            </form>

            <p className="mt-4 text-center text-gray-600">Already have account? <Link to={"/login"}
                    className="text-primary">Login now</Link></p>
        </div>
    </div>
  )
}
