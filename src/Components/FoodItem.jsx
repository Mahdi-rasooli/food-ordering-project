import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { ContextStore } from '../context/ContextStore'

function FoodItem({ id , name , description , image , price }) {


    const { cardItems , addtoCard , removeFromCard} = useContext(ContextStore)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt="" />
            {!cardItems[id] 
                ? <img onClick={() => addtoCard(id)} className='add' src={assets.add_icon_white}/>
                : <div className='food-item-counter'>
                    <img onClick={() => removeFromCard(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cardItems[id]}</p>
                    <img onClick={() => addtoCard(id)} src={assets.add_icon_green} alt="" />
                  </div>
            }
        </div>
        <div className='food-item-info'>
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem