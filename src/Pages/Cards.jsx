import React, { useContext } from 'react'
import './pages.css'
import { ContextStore } from '../context/ContextStore'
import { useNavigate } from 'react-router-dom'

function Cards() {



  const { cardItems, food_list, removeFromCard , getTotalCardsAmount } = useContext(ContextStore)

  const navigate = useNavigate()

  return (
    <div className='cards'>
      <div className="cards-items">
        <div className="cards-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cardItems[item._id] > 0) {
            return (
              <div>
                <div className='cards-items-title cards-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>${item.price * cardItems[item._id]}</p>
                  <p onClick={() => removeFromCard(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cards-bottom">
        <div className="cards-total">
          <h2>Card Totals</h2>
          <div className="cards-total-details">
            <p>subtotal</p>
            <p>${getTotalCardsAmount()}</p>
          </div>
          <hr />
          <div className="cards-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCardsAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className="cards-total-details">
            <b>Total</b>
            <b>${getTotalCardsAmount() === 0 ? 0 : getTotalCardsAmount() + 2}</b>
          </div>
          <button onClick={() => navigate('/orders')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cards-promocode">
          <div>
            <p>If you have any promo code,Enter it here</p>
            <div className="cards-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cards