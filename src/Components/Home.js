import React from 'react'
import { CartState } from '../Component2/Context'
import SingleProduct from './SingleProduct';
import './style.css'
import Filters from './Filters';

const Home = () => {

  const { state: { products },
  productState:{ byWomen, byMen, byGreen, byRed, byBlue, byYellow, byPink, byPurple, byWhite, byBlack, byGrey, 
    byHoodie, byPolo, byBasic, searchQuery, byPrice1, byPrice2, byPrice3 }
 } = CartState();
  
  const transformProducts = () => {
    let sortedProducts = products;

    if(byGreen) {
      sortedProducts = sortedProducts.filter((prod)=> prod.color==="Green")
    }

    if(byRed) {
      sortedProducts = sortedProducts.filter((prod)=> prod.color==="Red")
    }

    if(byBlue) {
      sortedProducts = sortedProducts.filter((prod)=> prod.color==="Blue")
    }

    if(byYellow) {
      sortedProducts = sortedProducts.filter((prod)=> prod.color==="Yellow")
    }

    if(byPink) {
      sortedProducts = sortedProducts.filter((prod)=> prod.color==="Pink")
    }

    if(byPurple) {
      sortedProducts = sortedProducts.filter((prod)=> prod.color==="Purple")
    }

    if(byWhite) {
      sortedProducts = sortedProducts.filter((prod)=> prod.color==="White")
    }

    if(byBlack) {
      sortedProducts = sortedProducts.filter((prod)=> prod.color==="Black")
    }

    if(byGrey) {
      sortedProducts = sortedProducts.filter((prod)=> prod.color==="Grey")
    }

    if(byPolo) {
      sortedProducts = sortedProducts.filter((prod)=> prod.type==="Polo")
    }

    if(byHoodie) {
      sortedProducts = sortedProducts.filter((prod)=> prod.type==="Hoodie")
    }

    if(byBasic) {
      sortedProducts = sortedProducts.filter((prod)=> prod.type==="Basic")
    }

    if(byWomen) {
      sortedProducts = sortedProducts.filter((prod)=> prod.gender==="Women")
    }

    if(byMen) {
      sortedProducts = sortedProducts.filter((prod)=> prod.gender==="Men")
    }

    if(byPrice1) {
      sortedProducts = sortedProducts.filter((prod)=> prod.price<=350)
    }

    if(byPrice2) {
      sortedProducts = sortedProducts.filter((prod)=> prod.price>=350 && prod.price<=500)
    }

    if(byPrice3) {
      sortedProducts = sortedProducts.filter((prod)=> prod.price<=1000 && prod.price>=500)
    }

    if(searchQuery){
      sortedProducts=sortedProducts.filter((prod)=>
      prod.name.toLowerCase().includes(searchQuery) ||
        prod.type.toLowerCase().includes(searchQuery) ||
        prod.color.toLowerCase().includes(searchQuery) ||
        prod.gender.toLowerCase().includes(searchQuery)
      );
    }
    
    return sortedProducts;
  }

  return (
    <div className='home'>
      <Filters/>
      <div className='productContainer'>
        {
        transformProducts().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id}/>
        })}
      </div>
    </div>
  )
}

export default Home