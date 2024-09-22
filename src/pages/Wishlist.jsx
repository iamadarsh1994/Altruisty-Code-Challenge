// import { useState } from 'react';

// const Wishlist = () => {
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // You can add mock items or fetch real data
//   const mockWishlist = [
//     { id: 1, name: 'Smartphone', category: 'electronics', price: 299 },
//     { id: 2, name: 'Shoes', category: 'fashion', price: 49 },
//   ];

//   useState(() => {
//     setWishlistItems(mockWishlist); // Initialize wishlist
//   }, []);

//   return (
//     <div className="h-screen bg-white p-8">
//       <h1 className="text-2xl font-bold mb-4">Wishlist</h1>

//       {wishlistItems.length > 0 ? (
//         <div className="grid grid-cols-2 gap-4">
//           {wishlistItems.map((item) => (
//             <div key={item.id} className="border p-4 rounded-lg shadow-lg">
//               <h2 className="text-xl font-semibold">{item.name}</h2>
//               <p className="text-gray-600">{item.category}</p>
//               <p className="text-gray-900 font-bold">${item.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No items in your wishlist.</p>
//       )}
//     </div>
//   );
// };

// export default Wishlist;

// import React from 'react';
import Cards from '../components/Cards';  // Use the Card component
import about from '../assets/about.png'
export default function Wishlist() {
  const wishlistItems = [
    { id: 1, name: 'Smartphone', description: 'Latest smartphone', image: {about} },
    { id: 2, name: 'Shoes', description: 'Comfortable shoes', image: {about} },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>

      <div className="grid grid-cols-2 gap-4">
        {wishlistItems.map((item) => (
          <Cards
            key={item.id}
            title={item.name}
            description={item.description}
            image={item.image}
            buttonLabel="Remove from Wishlist"
            onButtonClick={() => alert(`${item.name} removed from wishlist`)}
          />
        ))}
      </div>
    </div>
  );
};

