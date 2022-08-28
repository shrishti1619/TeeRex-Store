import React from 'react'

function GetList() {
  return (
    fetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')
  .then(data => data.json())
  )
}

export default GetList