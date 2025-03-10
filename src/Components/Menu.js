import React, {useState} from 'react'
import MenuCategory from './MenuCategory'

function Menu() {
    const [menus, setMenus] = useState(false);
    const [cgry, setCgry] = useState('pasta-maggie');

    return (
        <div>
            {/* Menu Section */}
            <section id="menu" className="py-16 bg-amber-100">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Menu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Pasta & Maggie", slug: "pasta-maggie" },
                            { name: "Hot Beverages", slug: "hot-beverages" },
                            { name: "Rice Bowls", slug: "rice-bowls" },
                            { name: "Cold Beverages", slug: "cold-beverages" },
                            { name: "Desserts", slug: "desserts" },
                        ].map((category) => (
                            // <Link to={`/menu/${category.slug}`} key={category.slug}>
                                <div className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300" onClick={() => {
                                    setCgry(category.slug);
                                    setMenus(true);
                                }}>
                                    <h3 className="text-xl font-semibold mb-2 text-amber-800">{category.name}</h3>
                                    <p className="text-gray-600">Click to view our selection of {category.name.toLowerCase()}</p>
                                </div>
                            // </Link>
                        ))}
                    </div>
                </div>
                {menus && (
                    <MenuCategory category={cgry} setMenus={setMenus}/>
                )}  
            </section>
        </div>
    )
}

export default Menu