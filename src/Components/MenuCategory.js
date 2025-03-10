import React from 'react';

const menuItems = {
  "pasta-maggie": [
    { name: "White Sauce Pasta", price: 250, image: "https://images.pexels.com/photos/16988264/pexels-photo-16988264/free-photo-of-pasta-made-from-semolina-and-shaped-in-the-form-of-slender-tubes.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Spicy Maggie", price: 100, image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Pesto Pasta", price: 270, image: "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Pesto Pasta", price: 270, image: "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Cheese Maggie", price: 120, image: "https://img-global.cpcdn.com/recipes/ccc19b016b25a917/1200x630cq70/photo.jpg" }
  ],
  "hot-beverages": [
    { name: "Espresso", price: 150, image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb" },
    { name: "Masala Chai", price: 50, image: "https://images.pexels.com/photos/2697931/pexels-photo-2697931.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { name: "Cappuccino", price: 180, image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200" }
  ],
  "rice-bowls": [
    { name: "Paneer Biryani", price: 300, image: "https://images.pexels.com/photos/9609859/pexels-photo-9609859.jpeg?auto=compress&cs=tinysrgb" },
    { name: "Fried Rice", price: 220, image: "https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb" }
  ],
  "cold-beverages": [
    { name: "Iced Coffee", price: 160, image: "https://images.pexels.com/photos/1432528/pexels-photo-1432528.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Lemonade", price: 90, image: "https://images.pexels.com/photos/31000076/pexels-photo-31000076/free-photo-of-refreshing-lemon-and-mint-beverages-display.jpeg?auto=compress&cs=tinysrgb&w=300" }
  ],
  desserts: [
    { name: "Chocolate Brownie", price: 200, image: "https://images.pexels.com/photos/27359377/pexels-photo-27359377/free-photo-of-sweet-brownie-cake-with-chocolate-sauce.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { name: "Cheesecake", price: 250, image: "https://images.pexels.com/photos/1098592/pexels-photo-1098592.jpeg?auto=compress&cs=tinysrgb&w=1200" }
  ]
};

function MenuCategory({ category,setMenus }) {
  const items = menuItems[category] || [];

  return (
    <div className="p-4 mt-4 sm:p-8 text-center bg-white text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#78350f]">{category.replace('-', ' ').toUpperCase()}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-yellow-100 text-black p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-m text-gray-500">Price: ₹{item.price}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 block text-slate-500 border-2 rounded-md px-2 py-1 hover:underline mx-auto"
        onClick={() => setMenus(false)}>Close</button>

    </div>
  );
}

export default MenuCategory;
