import Bedroom from "../assets/images/category/category-1.jpg"
import Mattrass from "../assets/images/category/category-2.jpg" 
import Outdoor from "../assets/images/category/category-3.jpg"
import Sofa from "../assets/images/category/category-4.jpg"
import Room from "../assets/images/category/category-5.jpg"
import Kitchen from "../assets/images/category/category-6.jpg"
import { Link } from "react-router-dom"


export default function Categories() {
  return (
    <div className="container py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">shop by category</h2>
        <div className="grid grid-cols-3 gap-3">
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Bedroom} alt="category 1" className="w-full"/>
                <Link to={"/"}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Mattrass} alt="category 1" className="w-full"/>
                <Link to={"/"}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Mattrass</Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Outdoor} alt="category 1" className="w-full"/>
                <Link to={"/"}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Outdoor
                </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Sofa} alt="category 1" className="w-full"/>
                <Link to={"/"}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Sofa</Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Room} alt="category 1" className="w-full"/>
                <Link to={"/"}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Living
                    Room</Link>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src={Kitchen} alt="category 1" className="w-full"/>
                <Link to={"/"}
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Kitchen</Link>
            </div>
        </div>
    </div>
  )
}
