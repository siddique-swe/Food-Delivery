import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Sidebar from './component/SideBar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url ="http://localhost:4000"
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
    <div className="app-content">
    <Sidebar />
    <Routes>
      <Route path='/add' element={<Add url={url} /> } />
      <Route path='/list' element={<List url={url}/>}  />
      <Route path='/orders' element={<Orders url={url}/>}  />
    </Routes>

    </div>
      
    </div>
  )
}

export default App
