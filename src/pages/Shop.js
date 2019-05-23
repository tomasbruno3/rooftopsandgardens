import React, { Component } from 'react';

import ProductList from '../components/Shop/ProductList.js';
import Footer from '../components/Footer/Footer.js';



class Shop extends Component {

render () {

  return (

    <div>

    <ProductList />
    <Footer />
    </div>

  )

}
}

export default Shop
