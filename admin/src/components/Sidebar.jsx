import { Link, useLocation } from 'react-router-dom'
import { X, ShoppingBag, Users, Settings, User } from 'lucide-react'
import { Button } from "./ui/button"

function Sidebar({ isSidebarOpen, toggleSidebar }) {
    const location = useLocation()
  
    return (
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <Link to="/" className="text-xl font-semibold">Admin Dashboard</Link>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="mt-4">
          <Link to="/products" className={`flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 ${location.pathname === '/products' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
            <ShoppingBag className="mr-3 h-5 w-5" />
            Products
          </Link>
          <Link to="/orders" className={`flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 ${location.pathname === '/orders' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
            <ShoppingBag className="mr-3 h-5 w-5" />
            Orders
          </Link>
          <Link to="/customers" className={`flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 ${location.pathname === '/customers' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
            <Users className="mr-3 h-5 w-5" />
            Customers
          </Link>
          <Link to="/settings" className={`flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 ${location.pathname === '/settings' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
          <Link to="/profile" className={`flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 ${location.pathname === '/profile' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
            <User className="mr-3 h-5 w-5" />
            Profile
          </Link>
        </nav>
      </aside>
    )
  }

  export default Sidebar