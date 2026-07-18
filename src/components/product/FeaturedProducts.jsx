import ProductCard from "./ProductCard";

import product1 from "../../assets/images/products/product1.jpg";
import product2 from "../../assets/images/products/product2.jpg";
import product3 from "../../assets/images/products/product3.jpg";
import product4 from "../../assets/images/products/product4.jpg";
import product5 from "../../assets/images/products/product5.jpg";
import product6 from "../../assets/images/products/product6.jpg";
import product7 from "../../assets/images/products/product7.jpg";
import product8 from "../../assets/images/products/product8.jpg";


const products = [
    {
        id: 1,
        name: "Wireless Headphone",
        image: product1,
        price:1999,
        oldPrice: 2499,
        rating: 4.8,
        badge: "New"
    },
    {
        id: 2,
        name: "Running Shoes",
        image: product2,
        price: 2999,
        oldPrice: 3999,
        rating: 4.7,
        badge: "Sale",
    },
    {
        id: 3,
        name: "Smart Watch",
        image: product3,
        price: 2499,
        oldPrice: 2999,
        rating: 4.6,
        badge: "New",
    },
    {
        id: 4,
        name: "Smartphone",
        image: product4,
        price: 15999,
        oldPrice: 17999,
        rating: 4.9,
        badge: "Hot",
    },
    {
        id: 5,
        name: "Laptop",
        image: product5,
        price: 54999,
        oldPrice: 59999,
        rating: 4.8,
        badge: "Sale",
    },
    {
        id: 6,
        name: "T-Shirt",
        image: product6,
        price: 799,
        oldPrice: 999,
        rating: 4.5,
        badge: "New",
    },
    {
        id: 7,
        name: "Backpack",
        image: product7,
        price: 1499,
        oldPrice: 1999,
        rating: 4.7,
        badge: "Sale",
    },
    {
        id: 8,
        name: "Camera",
        image: product8,
        price: 28999,
        oldPrice: 31999,
        rating: 4.9,
        badge: "Hot",
    },
];

function FeaturedProducts() {
    return (

        <section className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-14">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {products.map((product)=>(
                    <ProductCard
                    key={product.id}
                    product={product}
                    />
                  ))}
            </div>
        </section>
    )


}
export default FeaturedProducts;