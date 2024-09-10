import { Link,NavLink } from 'react-router-dom'
import SomaIcon from "../assets/images/icons/sofa.svg"
import Terarce from "../assets/images/icons/terrace.svg"
import Bed from "../assets/images/icons/bed.svg"
import Office from "../assets/images/icons/office.svg"
import Outdoor from "../assets/images/icons/outdoor-cafe.svg"
import Mattress from "../assets/images/icons/bed-2.svg"
import { LuMenu } from "react-icons/lu";
import { getCookie } from '../../lib/getCookie'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [cookie, setCookie] = useState(null)
    useEffect(()=>{
            const cookie = getCookie("token")
            if (cookie) {
                setCookie(cookie)
            }

        },[cookie])
  return (
    
    <nav className="bg-gray-800">
        <div className="container flex">
            <div className="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                <span className="text-white">
                    <LuMenu className='text-xl w-6'/>
                </span>
                <span className="capitalize ml-2 text-white">All Categories</span>

                {/* <!-- dropdown --> */}
                <div
                    className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    <Link to={"/"}className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src={SomaIcon} alt="sofa" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                    </Link>
                    <Link to={"/"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src={Terarce} alt="terrace" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                    </Link>
                    <Link to={"/"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src={Bed} alt="bed" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Bed</span>
                    </Link>
                    <Link to={"/"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src={Office} alt="office" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">office</span>
                    </Link>
                    <Link to={"/"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src={Outdoor} alt="outdoor" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                    </Link>
                    <Link to={"/"} className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src={Mattress} alt="Mattress" className="w-5 h-5 object-contain"/>
                        <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                    </Link>
                </div>
            </div>

            <div className="flex items-center justify-between flex-grow md:pl-12 py-5">
                <div className="flex items-center space-x-6 capitalize">
                    <NavLink to={"/"} className="text-gray-200 hover:text-white transition">Home</NavLink>
                    <NavLink to={"/shop"} className="text-gray-200 hover:text-white transition">Shop</NavLink>
                    <NavLink to={"/product"} className="text-gray-200 hover:text-white transition">Product</NavLink>
                    <NavLink to={"/contact"} className="text-gray-200 hover:text-white transition">Help</NavLink>
                </div>
                <NavLink to={"login"} className={`${cookie ? "hidden" : "text-gray-200 hover:text-white transition"}`}>Login</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
