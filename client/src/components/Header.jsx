import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";
import { GiShoppingBag } from "react-icons/gi";
import { MdOutlineAccountBox } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../lib/getCookie";

function Header() {
  const navigate = useNavigate();
  const cookie = getCookie("token")

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-32" />
        </Link>

        <div className="w-full max-w-xl relative flex left-4">
          <div className="flex flex-row items-center">
          <span className="absolute left-4 text-lg text-gray-400">
            <IoIosSearch/>
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
            placeholder="search"
          />
          </div>
          <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to={"/wishlist"}
            className="text-center flex flex-col items-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <GiSelfLove/>
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </div>
          </Link>
          <Link to={"/card"}
            className="text-center flex flex-col items-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <GiShoppingBag/>
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className={`${!cookie ? "hidden" : "absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs"}`}>
              2
            </div>
          </Link>
          <Link 
            to={"/profile"}
            className="text-center flex flex-col items-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <MdOutlineAccountBox/>
            </div>
            <div className="text-xs leading-3">Account</div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
