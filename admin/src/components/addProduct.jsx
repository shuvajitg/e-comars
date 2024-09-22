import { useState } from "react";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function AddProduct({ className }) {
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
    e.preventDefault();
    try {
      const { title, description, price, demoPrice, stock, category, brand } =
        product;
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
    <Card className={`${className} w-full max-w-2xl mx-auto relative`}>
      <CardHeader>
        <CardTitle>Add New Product</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h1 className="text-red-600">Uploade image before add product</h1>
          <Label htmlFor="image">Product Image</Label>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="image"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setImageUpload(e.target.files[0])}
              />
            </label>
          </div>
          <Button className="w-full" onClick={uploadeImage}>
            Uploade Image
          </Button>
        </div>
        <form className="space-y-6 mt-5">
          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              id="imageUrl"
              readOnly={true}
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Title :</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={product.title}
              onChange={handelChange}
              placeholder="title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="catagory">Category :</Label>
            <Input
              type="text"
              id="catagory"
              name="category"
              value={product.category}
              onChange={handelChange}
              placeholder="Category"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand">Brand :</Label>
            <Input
              type="text"
              id="brand"
              name="brand"
              value={product.brand}
              onChange={handelChange}
              placeholder="Brands"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price :</Label>
              <Input
                type="number"
                id="price"
                name="price"
                placeholder="0.00"
                min="0"
                step="0.01"
                required
                value={product.price}
                onChange={handelChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demoPrice">Demo price</Label>
              <Input
                type="number"
                id="demoPrice"
                placeholder="0.00"
                min="0"
                step="0.01"
                required
                name="demoPrice"
                value={product.demoPrice}
                onChange={handelChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="stock">Stock :</Label>
            <Input
              type="number"
              id="stock"
              placeholder="0"
              min="0"
              required
              name="stock"
              value={product.stock}
              onChange={handelChange}
              requird
            />
          </div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            className="border border-black h-24"
            id="description"
            name="description"
            value={product.description}
            onChange={handelChange}
            placeholder="Description"
          />
          <div className="space-y-2">
            <Label>Size :</Label>
            <div className="flex flex-wrap gap-4">
              {sizes.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Input
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
                  />
                  <label
                    htmlFor={`size-${size}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={submit} className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default AddProduct;
