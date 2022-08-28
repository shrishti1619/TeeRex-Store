import React from 'react'
import { Navbar, FormControl, InputGroup } from "react-bootstrap";
import { CartState } from '../Component2/Context';
import { FaSearch } from 'react-icons/fa';

function SearchBox() {

  const {
    productDispatch
  } = CartState();

  return (
    <Navbar.Text className='search mr-sm-2'>
      <InputGroup>
        <FormControl
        style={{ width: 500 }}
        placeholder="Search a product"
        className="me-5"
        aria-describedby="basic-addon2"
        onChange={(e)=>{
          productDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value,
          });
        }}
        />
        <InputGroup.Text id="basic-addon2"><FaSearch/></InputGroup.Text>
      </InputGroup>
    </Navbar.Text>
  )
}

export default SearchBox;