//import React, { useState } from "react"

//const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
//}

//export default ShopCart

import { useAtom } from "jotai";
import React, { useEffect, useState } from "react"
import { selectedCategoryAtom } from "../../lib/atom";

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const [selectedCategory] = useAtom(selectedCategoryAtom);
  const [products, setProducts] = useState([]);


  const increment = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    if (!selectedCategory) return; 

    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://34.229.4.148:3000/products/filter/${selectedCategory}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <>
     {products.map((product) => (
        <div className='box' key={product.ID}>
          <div className='product mtop'>
            <div className='img'>
              <img src={product.url_image} alt='' />
              <div className='product-like'>
                <label>{count[product.ID] || 0}</label> <br />
                <i className='fa-regular fa-heart' onClick={() => increment(product.ID)}></i>
              </div>
            </div>
            <div className='product-details'>
              <h3>{product.product_name}</h3>
              <div className='price'>
                <h4>${product.price}.00 </h4>
                <button onClick={() => addToCart(product)}>
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ShopCart
