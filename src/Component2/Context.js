import React, { useContext, useReducer } from 'react';
import { createContext, useEffect, useState } from 'react'
import GetList from '../Services/GetList';
import { cartReducer } from './Reducers';
import { data } from '../Data';
import { productReducer } from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {

  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   GetList()
  //     .then(items => {
  //       if(mounted) {
  //         setList(items)
  //       }
  //     })
  //   return () => mounted = false;
  // }, [])

  // console.log(list);

  const list = data;
  

  const [state, dispatch] = useReducer(cartReducer, {
    products: list,
    cart: []
  })

  const [ productState, productDispatch ] = useReducer(productReducer, {
    byWomen: false,
    byMen: false,
    byGreen: false,
    byBlue: false,
    byPink: false,
    byGrey: false,
    byPurple: false,
    byBlack: false,
    byWhite: false,
    byYellow: false,
    byRed: false,
    byPolo: false,
    byHoodie: false,
    byBasic: false,
    byPrice1: false,
    byPrice2: false,
    byPrice3: false,
    searchQuery: "",
  })

  

  return( 
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
        {children}
    </Cart.Provider>
  )
};

export default Context;

export const CartState = () => {
  return useContext(Cart)
}

