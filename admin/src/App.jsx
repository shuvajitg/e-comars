import { Toaster } from 'react-hot-toast'
import './App.css'
import Dashboard from './components/Dashbord'

function App() {

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Dashboard/>
    </>
  )
}

export default App
