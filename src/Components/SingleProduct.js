import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from '../Component2/Context'

const SingleProduct = ({prod}) => {

  const { 
    state: { cart },
    dispatch,
  } = CartState()

  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.imageURL} alt={prod.name}/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom: 10}}>
            <span>₹{prod.price}</span>
          </Card.Subtitle>
          {
            
            cart.some(p=> p.id===prod.id) ? (
              <Button onClick={()=>{
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: prod
                })
              }} variant='danger' className='my-2'>
                Remove from Cart
              </Button>
            // <Button onClick={()=>{
            //   dispatch({
            //     type: 'ADD_TO_CART',
            //     payload: prod
            //   });
            //   onChangeQuantity={onChangeQuantity};
            //   if(restQty<=0){
            //     alert("Item not available!")
            //   }
            // }} disabled={!prod.quantity}
            // >
            //     {!prod.quantity ? "Out of Stock" : "Add to Cart"}
            // </Button>
            ):(
              <Button onClick={()=>{
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: prod
                })
              }} disabled={!prod.quantity}
              >
                {!prod.quantity ? "Out of Stock" : "Add to Cart"}
              </Button>
            )
          }
  
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct