import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <NavLink to='/add' className="sidebar-option">
        <img src={assets.add_icon} alt="" />
        <p>Add items</p>
      </NavLink>
      <NavLink to='/list' className="sidebar-option">
        <img src={assets.order_icon} alt="" />
        <p>List Items</p>
      </NavLink>
      <NavLink to='/orders' className="sidebar-option">
        <img src={assets.order_icon} alt="" />
        <p>Orders</p>
      </NavLink>
      
    </div>
  )
}

export default Sidebar
