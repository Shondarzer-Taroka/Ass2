
import { Outlet } from 'react-router-dom'
import './App.css'
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
