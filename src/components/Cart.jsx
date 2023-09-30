import React from 'react';

export default function Cart({ cart, setCart, navigateTo, PAGE_PRODUCTS }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === product.id);
    if (amount <= 0) {
      newCart.splice(index, 1);
    } else {
      newCart[index].quantity = amount;
    }
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };
  
  
  return (
    <div  className="cart-container">
      {cart.length > 0 && (
        <button onClick={clearCart} className="clear-cart-button">Clear Order</button>
      )}
      {cart.length === 0 ? (
        <div>
    <p id='empty'>Your cart is empty.</p>
    <button id='homebtn' onClick={() => navigateTo(PAGE_PRODUCTS)}>Back Home</button>
    </div>
  ) : (
      <table id='margin' className="cart-table margin">
        <thead>
          <tr id='th'>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={index}>
              <td><img src={product.image} alt={product.name} className="product-image" /></td>
              <td><h3>{product.name}</h3></td>
              <td id='btnqtn' >
                <button className="quantity-button" onClick={() => setQuantity(product, product.quantity - 1)}> - </button>
                <p className="quantity-text">{product.quantity}</p>
                <button className="quantity-button" onClick={() => setQuantity(product, product.quantity + 1)}> + </button>
              </td>
              <td>${product.cost.toFixed(2)}</td>
              <td>${(product.quantity * product.cost).toFixed(2)}</td>
              <td><button onClick={() => removeFromCart(product)} className="remove-button">Remove</button></td>
            </tr>
          ))}
          <tr>
            <td colSpan="4"></td>
            <td>Total Cost:</td>
            <td>${getTotalSum().toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
  )}
    </div>
  );
}
