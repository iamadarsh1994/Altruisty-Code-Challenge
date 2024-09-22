import { useState } from 'react';

export default function Cart() {
  // Cart items mock data
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: 'https://example.com/monitor.jpg' },
    { id: 2, name: 'H1 Gamepad', price: 550, quantity: 2, image: 'https://example.com/gamepad.jpg' },
  ]);

  // Handle item quantity change
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Handle removing items from cart
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <table className="w-full text-left mb-6">
        <thead>
          <tr className="border-b">
            <th className="pb-2">Product</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Quantity</th>
            <th className="pb-2">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="flex items-center py-4">
                <button
                  className="text-red-500 mr-4"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  &#10060;
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <span>{item.name}</span>
              </td>
              <td className="py-4">${item.price}</td>
              <td className="py-4">
                <select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                  className="border rounded-md p-2"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </td>
              <td className="py-4">${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mb-6">
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
          Return To Shop
        </button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
          Update Cart
        </button>
      </div>

      <div className="flex justify-between items-start">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border p-2 w-1/2 rounded-md mr-2"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Apply Coupon
          </button>
        </div>

        <div className="w-1/3 border p-4 rounded-md">
          <h2 className="text-lg font-bold mb-4">Cart Total</h2>
          <p className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${calculateTotal()}</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </p>
          <p className="flex justify-between mb-4 font-bold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </p>
          <button className="bg-red-500 text-white w-full py-2 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
