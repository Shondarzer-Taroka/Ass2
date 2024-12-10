
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import ProNavBar from './components/NavBar/ProNavbar'
import ProFooter from './components/ProFooter/ProFooter'



function App() {

  return (
    <>

      <ProNavBar />
      <div className='full-section'>
        
        <Outlet />
        <ProFooter/>
      </div>


    </>
  )
}

export default App
