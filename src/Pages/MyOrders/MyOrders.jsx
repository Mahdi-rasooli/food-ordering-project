import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { ContextStore } from '../../context/ContextStore'
import axios from 'axios'
import { assets } from '../../assets/assets'

const MyOrders = () => {


    const { url, token } = useContext(ContextStore)
    const [data, setData] = useState([])

    const fetchOrders = async () => {
        const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } })
        setData(response.data.data)
    }

    useEffect(() => {
        if (token) {
            fetchOrders()
        }
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order,index)=> {
                    return(
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item,index)=> 
                                index === order.items.length - 1  
                                   ? `${item.name}  x  ${item.quantity}`
                                   : `${item.name} x ${item.quantity}, `
                            )}</p>
                            <p>${order.amount}.00</p>
                            <p>items: {order.items.length}</p>
                            <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                            <button onClick={fetchOrders}>Track Order</button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default MyOrders