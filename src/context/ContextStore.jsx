import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const ContextStore = createContext(null);

function StoreContextProvider(props) {

    const url = 'http://localhost:4000'

    const [token, setToken] = useState('')

    const [cardItems, setCardItems] = useState({})
    const [food_list, setFood_list] = useState([])

    async function addtoCard(itemId) {
        if (!cardItems[itemId]) {
            setCardItems((c) => ({ ...c, [itemId]: 1 }))
        }
        else {
            setCardItems((c) => ({ ...c, [itemId]: c[itemId] + 1 }))
        }
        if(token){
            await axios.post(url + '/api/cart/add',{itemId},{headers:{token}})
        }
    }

    async function removeFromCard(itemId) {
        setCardItems((c) => ({ ...c, [itemId]: c[itemId] - 1 }))
        await axios.post(url + '/api/cart/remove',{itemId},{headers:{token}})
    }


    const fetchFoods = async () => {
        const response = await axios.get(url + '/api/food/list')
        setFood_list(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + '/api/cart/get',{},{headers:{token}})
        setCardItems(response.data.cartData)
    }


    useEffect(() => {

        async function loadData() {
            await fetchFoods()
        
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            await loadCartData(localStorage.getItem('token'))
        }
    }
    loadData()
    }, [])


    function getTotalCardsAmount() {
        let totalAmount = 0;

        for (let item in cardItems) {
            if (cardItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalAmount += itemInfo.price * cardItems[item]
            }
        }
        return totalAmount
    }


    const contextValue = {
        food_list,
        cardItems,
        setCardItems,
        addtoCard,
        removeFromCard,
        getTotalCardsAmount,
        token,
        setToken,
        url
    };

    return (
        <ContextStore.Provider value={contextValue}>
            {props.children}
        </ContextStore.Provider>
    );
}

export default StoreContextProvider;


