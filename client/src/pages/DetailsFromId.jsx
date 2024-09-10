import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { IoLogoInstagram } from "react-icons/io5";
import { useState } from "react";
import useProduct from "../hooks/product";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetailsFromParams() {
    const { id } = useParams();
  const [productId, setProductId] = useState([]);

  const [cardData, setCardData] = useState({
    productId: "",
    quantity: 0,
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData((user)=>({
        ...user,
        [name]: value,
    }))
}
  const Add = () => {
    setCardData((prev)=> ({...prev, quantity: prev.quantity + 1}))
  };
  const Remove = () => {
    if (cardData.quantity > 0) {
      setCardData((prev)=> ({...prev, quantity: prev.quantity - 1}))
    }
  };

  const { productData } = useProduct();
  const product = productData.data?.find((product) => product.id === id);
  if (!product) {
    return <div>Loading or Product not found</div>;
  }

  return (
    <div className="mt-4">
      {(
        <div key={product.id} className="container grid md:grid-cols-2 gap-6">
          <div>
            <div>
            <img src={product.imageUrl} alt="product" className="w-full" />
            </div>
            <div className="grid grid-cols-5 gap-4 mt-4">
              <img
                src={product.imageUrl}
                alt="product2"
                className="w-full cursor-pointer border border-primary"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium uppercase mb-2">
              {product.title}
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex gap-1 text-sm text-yellow-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <CiStar />
              </div>
              <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-800 font-semibold space-x-2">
                <span>Availability: </span>
                <span>
                  {product.stock ? (
                    <span className="text-green-600">in stock</span>
                  ) : (
                    <span className="text-red-700">Out of Stock</span>
                  )}
                </span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Brand: </span>
                <span className="text-gray-600">{product.brand}</span>
              </p>
              <p className="space-x-2">
                <span className="text-gray-800 font-semibold">Category: </span>
                <span className="text-gray-600">{product.category}</span>
              </p>
              <div 
                name="quantity"
                value={cardData.quantity}
                onChange={handleChange}
                className="space-x-2 flex">
                <span className="text-gray-800 font-semibold">SKU: </span>
                <div 
                  className="text-gray-600">{product.id}</div>
              </div>
            </div>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
              <p className="text-xl text-primary font-semibold">
                ${product.price}
              </p>
              <p className="text-base text-gray-400 line-through">
                ${product.demoPrice}
              </p>
            </div>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <div className="pt-4">
              <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
              <div className="flex items-center gap-2">
                {product.size.map((size, index) => (
                  <div key={index}>
                    <div className="size-selector">
                      <input type="radio" name="size" id={size} />
                      <label
                        htmlFor={size}
                        className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                      >
                        {size}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Color
              </h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input type="radio" name="color" id="red" />
                  <label
                    htmlFor="red"
                    className="border bg-primary border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  ></label>
                </div>
                <div className="color-selector">
                  <input type="radio" name="color" id="black" />
                  <label
                    htmlFor="black"
                    className="border bg-black border-gray-200 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
                  ></label>
                </div>
                <div className="color-selector">
                  <input type="radio" name="color" id="white" />
                  <label
                    htmlFor="white"
                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                  ></label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
              <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                <div
                  onClick={Remove}
                  className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                >
                  -
                </div>
                <div
                  className="h-8 w-8 text-base flex items-center justify-center">
                   {cardData.quantity}
                </div>
                <div
                  onClick={Add}
                  className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                >
                  +
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
              <button
                onClick={async () => {
                  try {
                    await setProductId(() => [product.id]);
                    const { quantity } = cardData;
                    if (!productId.includes(product.id)) {
                      productId.push(product.id);
                    }
                    await axios.post("/api/user/addProductOnCard", {
                      productId: productId,
                      quantity,
                    });
                  } catch (error) {
                    console.log(error.message);
                  }
                }}
                className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
              >
                <FaShoppingBag /> Add to cart
              </button>
              <button className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                <GiSelfLove /> Wishlist
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center">
        <div className="flex gap-3 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
          >
            <IoLogoInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
