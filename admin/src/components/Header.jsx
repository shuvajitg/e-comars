import { Moon, Sun, Menu } from 'lucide-react'
import { Button } from "./ui/button"


function Header({ toggleSidebar, toggleDarkMode, isDarkMode }) {
    return (
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 border-b">
        <div className="flex items-center justify-between h-16 px-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center ml-auto">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>
    )
  }

export default Header;