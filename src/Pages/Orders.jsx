import React, { useContext } from 'react'
import './pages.css'
import { ContextStore } from '../context/ContextStore'

function Orders() {


  const { getTotalCardsAmount } = useContext(ContextStore)

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
      <div className="multi-fields">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder='Zip-code' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text" placeholder='Phone' />
      </div>
      <div className='place-order-right'>
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
          <button>PROCEED TO PPAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Orders