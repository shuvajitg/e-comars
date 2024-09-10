import Breadcrumb from "../components/Breadcrumb";
import ShopWraper from "../components/ShopWraper";
import Drawer from "../components/Drawer";
import Sidebar from "../components/Sidebar";
import Products from "../components/Products";
import { FaAnglesRight } from "react-icons/fa6";


function Shop() {
  return (
    <>
      <Breadcrumb >Shop</Breadcrumb>
      <ShopWraper>
        <div className="text-center md:hidden">
          <button
            className="text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
          >
            <FaAnglesRight className="text-xl"/>
          </button>
        </div>
      </ShopWraper>
      <Drawer />
      <div className="flex ml-8 mr-8 gap-4 -mt-16">
        <Sidebar />
        <Products />
      </div>
    </>
  );
}

export default Shop;
