
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ProNavBar from './components/NavBar/ProNavbar'



function App() {

  return (
    <>

      <ProNavBar />
      <div className='full-section'>
        
        <Outlet />
      </div>


    </>
  )
}

export default App
