import { Link } from "react-router-dom"
import { TiHome } from "react-icons/ti";
import { FaAnglesRight } from "react-icons/fa6";



export default function Breadcrumb({ children}) {
  return (
    <div className="container py-4 flex items-center gap-3">
        <Link to={"/"} className="text-primary text-base">
        <TiHome className="text-2xl text-primary"/>

        </Link>
        <span className="text-sm text-gray-400">
        <FaAnglesRight />
        </span>
        <p className="text-gray-600 font-medium">{children}</p>
    </div>
  )
}
