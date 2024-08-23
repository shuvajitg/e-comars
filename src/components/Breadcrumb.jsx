import { Link } from "react-router-dom"

export default function Breadcrumb({icon, children}) {
  return (
    <div className="container py-4 flex items-center gap-3">
        <Link to={"/"} className="text-primary text-base">
            <i className="fa-solid fa-house"></i>
        </Link>
        <span className="text-sm text-gray-400">
            <i>{icon}</i>
        </span>
        <p className="text-gray-600 font-medium">{children}</p>
    </div>
  )
}
