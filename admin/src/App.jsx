import { useState } from "react";
import { storage } from "./firebas/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [ProductSize, setProductSize] = useState([]);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    demoPrice: 0,
    stock: 0,
    category: "",
    brand: "",
  });
  const handelChange = (e) => {
    const { name, value } = e.target;
    setProduct((product) => ({
      ...product,
      [name]: value,
    }));
  };

  const uploadeImage = async (e) => {
    e.preventDefault();
    try {
      if (!imageUpload) {
        return alert("select an image");
      }
      const storageRef = ref(
        storage,
        `products/images/${imageUpload.name + v4()}`
      );
      await uploadBytes(storageRef, imageUpload);
      alert("image uploaded successfully");
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  const submit = async (e) => {
    e.preventDefault()
    try {
      const {
        title,
        description,
        price,
        demoPrice,
        stock,
        category,
        brand,
      } = product;
      if (
        !title ||
        !description ||
        !price ||
        !demoPrice ||
        !stock ||
        !category ||
        !ProductSize.length ||
        !brand ||
        !imageUrl
      ) {
        alert("All fields are required");
        return;
      }
      await axios.post("/api/addProduct", {
        title,
        description,
        price,
        demoPrice,
        stock,
        category,
        size: ProductSize,
        brand,
        imageUrl: [imageUrl],
      });
    } catch (error) {
      console.error("Error while submitting", error.message);
    }
  };

  return (
    <>
      <h1 className="flex justify-center mt-2 text-xl text-red-600">
        Please uploade image before Submit Product from
      </h1>
      <div className="h-screen flex mx-auto items-center justify-center">
        <div>
          <input
            type="file"
            onChange={(e) => setImageUpload(e.target.files[0])}
          />
          <button
            onClick={uploadeImage}
            className="bg-blue-500 hover:bg-blue-400 text-white text-sm py-1 px-3 rounded-sm inline-flex items-center"
          >
            Upload Image
          </button>
          <div className="flex flex-col justify-center items-center">
            <h1 className="mb-3 mt-4 underline underline-offset-8">
              Product entry
            </h1>
          </div>
          <form className="">
            <div className="flex flex-col gap-3">
              <label>Images Link:</label>
              <input
                value={imageUrl}
                name="imageUrl"
                type="text"
                readOnly={true}
                className="border border-black h-7 w-96 rounded-sm"
              />
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col gap-0.5 mt-2 ">
                <label>Title :</label>
                <input
                  className="border border-black h-7 w-48 rounded-sm"
                  type="text"
                  name="title"
                  value={product.title}
                  onChange={handelChange}
                  placeholder="title"
                />
              </div>
              <div className="flex mt-2 flex-col gap-0.5">
                <label>Category :</label>
                <input
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handelChange}
                  className="border border-black h-7 w-44 rounded-sm"
                  placeholder="Category"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex mt-2 flex-col gap-0.5">
                <label>Brand :</label>
                <input
                  type="text"
                  name="brand"
                  value={product.brand}
                  onChange={handelChange}
                  className="border border-black h-7 w-40 rounded-sm"
                  placeholder="Brands"
                />
              </div>
              <div className="flex mt-2 flex-col gap-0.5">
                <label>Size :</label>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <div key={size} className="flex relative flex-col">
                      <input
                        type="checkbox"
                        name="ProductSize"
                        value={size}
                        onChange={(e) => {
                          const sizeOpt = e.target.value;
                          setProductSize((prev) => {
                            if (prev.includes(sizeOpt)) {
                              return prev;
                            } else {
                              return [...prev, sizeOpt];
                            }
                          });
                        }}
                        id={`size-${size}`}
                        className="border hidden border-black rounded-sm"
                      />
                      <label
                        htmlFor={`size-${size}`}
                        className="border active:bg-indigo-800 flex w-5 justify-center px-0.5 py-0.5 border-black text-center rounded-sm text-xs cursor-pointer"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex mt-2 flex-col gap-0.5">
                <label>Price :</label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handelChange}
                  className="border border-black h-7 w-24 rounded-sm"
                  placeholder="Price"
                />
              </div>
              <div className="flex mt-2 flex-col gap-0.5">
                <label>Demo price :</label>
                <input
                  type="number"
                  name="demoPrice"
                  value={product.demoPrice}
                  onChange={handelChange}
                  className="border border-black h-7 w-32 rounded-sm"
                  placeholder="Demo Price"
                />
              </div>
              <div className="flex mt-2 flex-col gap-0.5">
                <label>Stock :</label>
                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={handelChange}
                  className="border border-black h-7 w-32 rounded-sm"
                  placeholder="Stock"
                />
              </div>
            </div>
            <div className="flex w-96 mt-2 flex-col gap-0.5">
              <label>Description :</label>
              <textarea
                className="border border-black h-24"
                name="description"
                value={product.description}
                onChange={handelChange}
                placeholder="Description"
              />
              <button
                onClick={submit}
                className="bg-blue-500 hover:bg-blue-400 text-white text-sm py-1 px-3 rounded-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
