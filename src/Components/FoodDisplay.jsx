import React, { useContext }  from 'react'
import { ContextStore } from '../context/ContextStore'
import FoodItem from './FoodItem'

function FoodDisplay({ category }) {

   const { food_list } = useContext(ContextStore)
 

  return (
    <div className='food-display'>
        <h2>Order whatever you want</h2>
        <div className="food-display-list">
          {food_list.map((item,index) => {
            if(category === 'All' || category === item.category)
            return <FoodItem key={index} id={item._id} price={item.price} name={item.name} description={item.description} image={item.image} />
          })}
        </div>
    </div>
  )
}

export default FoodDisplay