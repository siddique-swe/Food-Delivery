import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
   <div className="explore-menu" id="explore-menu">
    <h1>Explore our Menu</h1>
        <p className="explore-menu-text">Here are so many Exciting food that will make you lovely. Choose one for you and your family and enjoy your meal. Our passion for culinary excellence and commitment to quality ensures every meal is a memorable experience.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                        return (
                            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    }
                )
            }
        </div>
        <hr />
   </div>
  )
}

export default ExploreMenu
