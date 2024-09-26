import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ContextStore } from '../../context/ContextStore'
import axios from 'axios'

function Verify() {

    const [searchParams,setSearchParams] = useSearchParams()
    const orderId = searchParams.get('orderId')
    const success = searchParams.get('success')
    const {url} = useContext(ContextStore)
    const navigate = useNavigate()

    const verifyPayment = async () => {
      await axios.post(url + '/api/order/verify',{success,orderId})
      if(response.data.success){
        navigate('/myorders')
      }
      else{
        navigate('/')
      }
    }

    useEffect(()=> {
      verifyPayment()
    },[])

  return (
    <div className='verify'>
        <div className="spinner"></div>
    </div>
  )
}

export default Verify