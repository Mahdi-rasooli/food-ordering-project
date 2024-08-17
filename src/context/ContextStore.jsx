import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { useNavigate } from "react-router-dom";


export const ContextStore = createContext(null);

function StoreContextProvider(props) {



    const [cardItems , setCardItems] = useState({})

    function addtoCard(itemId){
        if(!cardItems[itemId]){
            setCardItems((c) => ({...c , [itemId]:1}))
        }
        else{
            setCardItems((c) => ({...c , [itemId]: c[itemId] + 1}))
        }
    }

    function removeFromCard(itemId){
        setCardItems((c) => ({...c , [itemId]: c[itemId] - 1}))
    }



    function getTotalCardsAmount(){
        let totalAmount = 0;

        for(let item in cardItems){
            if(cardItems[item] > 0){
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
        getTotalCardsAmount
    };

    return (
        <ContextStore.Provider value={contextValue}>
            {props.children}
        </ContextStore.Provider>
    );
}

export default StoreContextProvider;


