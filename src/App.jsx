
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/Navbar'


function App() {

  return (
    <>
   
      <NavBar />
      <div className='full-section'>
      <Outlet />     
      </div>
   

    </>
  )
}

export default App
