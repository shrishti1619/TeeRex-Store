import React from 'react'
import { Container, Navbar, Dropdown, Nav, Badge, Button } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartState } from '../Component2/Context';


function Header() {

    const { 
        state: {cart}, 
        dispatch,
        productDispatch,
        
    } = CartState()
  return (
    <Navbar bg="dark" variant='dark'  expand="lg">
        <Container fluid>
            <Navbar.Brand>
                <Link to="/">TeeRex Store</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
            
                    {/* <Navbar.Text className="search">
                    <FormControl
                    style={{ width: 370}} 
                    placeholder="search a product"
                    className="m-auto"
                    onChange={(e)=>{
                        productDispatch({
                            type:"FILTER_BY_SEARCH",
                            payload: e.target.value,
                        });
                    }}
                    />
                        </Navbar.Text> */}
                    <SearchBox/>
                    <Nav>
                        <Dropdown id="dropdown-menu-align-right">
                            <Dropdown.Toggle variant="success">
                                <FaShoppingCart color="white" fontSize="25px"/>
                                <Badge>{cart.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ minWidth: 370 }}>
                                { cart.length>0 ? (
                                    <>
                                    {
                                        cart.map(prod=> (
                                            <span className='cartitem' key={prod.id}>
                                                <img
                                                    src={prod.imageURL}
                                                    className='cartItemImg'
                                                    alt={prod.name}
                                                />
                                                <div className='cartItemDetail' >
                                                    <span>{prod.name}</span>
                                                    <span>{prod.price}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize='20px'
                                                    style={{cursor: "pointer"}}
                                                    onClick={() => 
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod,
                                                        })
                                                    }
                                                />
                                            </span>
                                        ))
                                    }
                                    <Link to="/cart">
                                        <Button style={{ width: "95%", margin:"0 10px" }}>
                                            Go To Cart
                                        </Button>
                                    </Link>
                                    </>
                                ) : (<span style={{padding: 10}}>Cart is Empty!</span>)}
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header