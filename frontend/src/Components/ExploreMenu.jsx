import React from 'react'
import './style.css'
import { menu_list } from '../assets/assets'

function ExploreMenu({ category , setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Eplore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum at unde voluptatibus corrupti tempore. Eius similique eaque velit debitis facere inventore blanditiis numquam vel obcaecati, quisquam eos quam libero?</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                return (
                    <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)} className='explore-menu-list-items'>
                        <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu