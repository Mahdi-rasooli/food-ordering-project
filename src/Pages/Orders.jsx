import React, { useContext, useEffect, useState } from 'react'
import './pages.css'
import { ContextStore } from '../context/ContextStore'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Orders() {


  const { getTotalCardsAmount, token, food_list, cardItems, url } = useContext(ContextStore)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(d => ({ ...d, [name]: value }))
  }

  const placeOrder = async (event) => {
    event.preventDefault()

    let orderItems = []
    food_list.map((item) => {
      if (cardItems[item._id] > 0) {
        let itemInfo = item
        itemInfo['quantity'] = cardItems[item._id]
        orderItems.push(itemInfo)
      }
    })

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCardsAmount() + 2
    }


    let response = await axios.post(url + '/api/order/place', orderData, { headers: { token } })
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    }
    else {
      alert('Error');
    }
  }

  const navigate = useNavigate()

  useEffect(() => {

    if (!token) {
      navigate('/cart')
    }
    else if (getTotalCardsAmount() === 0) {
      navigate('/cart')
    }
  }, [token])


  return (
    <form className='place-order' onSubmit={placeOrder}>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input required onChange={onChangeHandler} name='firstName' value={data.firstName} type="text" placeholder='First Name' />
          <input required onChange={onChangeHandler} name='lastName' value={data.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Email address' />
        <input required onChange={onChangeHandler} name='street' value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required onChange={onChangeHandler} name='city' value={data.city} type="text" placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required onChange={onChangeHandler} name='zipcode' value={data.zipcode} type="text" placeholder='Zip-code' />
          <input required onChange={onChangeHandler} name='country' value={data.country} type="text" placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={data.phone} type="text" placeholder='Phone' />
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
          <button type='submit'>PROCEED TO PPAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Orders