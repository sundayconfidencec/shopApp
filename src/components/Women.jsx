import React, { useState } from 'react';
import { Container } from 'react-bootstrap';





export default function Women({ setCart, cart, products, WOMEN }) {
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.id === item.id
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.id === item.id
    );
    if (itemInCart) {
      if (itemInCart.quantity === 1) {
        newCart = newCart.filter((item) => item.id !== product.id);
      } else {
        itemInCart.quantity--;
      }
      setCart(newCart);
    }
  };

  const [category, setCategory] = useState(WOMEN);

  const getProductsInCategory = () => {
    return products.map((product) => {
      const itemInCart = cart.find((item) => item.id === product.id);
      if (itemInCart) {
        return { ...product, quantity: itemInCart.quantity };
      } else {
        return { ...product, quantity: 0 };
      }
    }).filter((product) => product.category === category);
  };
  return (
    <Container>
      <div id='swallow' className="products-grid" >
        {getProductsInCategory().map((product, index) => (
          <div className="productss" key={index}>
            <div>
            <img src={product.image} alt={product.name} width={200} />
            </div>
            <div className='productdetails'>
           <div>
           <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
           </div>
           <div className='btnss'>
          <p className='qtn'>Quantity</p>
          <div className='btns'>
            <button onClick={() => addToCart(product)}>+</button>
            <p>{product.quantity}</p>
            <button onClick={() => removeFromCart(product)}> - </button>
              </div>
          </div>
          </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
