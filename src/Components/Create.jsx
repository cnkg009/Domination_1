import React, { useContext, useState } from "react";
import { Productcontext } from "../utils/Context";
import { nanoid } from "nanoid/non-secure";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
export default function Create() {
    const navigate =  useNavigate()
  const [products, setproducts] = useContext(Productcontext);

  const [title, setTitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length  < 5||
      category.trim().length < 5  ||
      price.trim().length  <1 ||
      description.trim().length < 5
    ) {
      alert("No field must  be empty , every field at  leat  4 characters");
      return
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproducts([...products, product]);
    localStorage.setItem("products",JSON.stringify([...products, product]))
    toast.success("Product Added ")
    navigate("/")
    // toast.success("New Product Added!")
    // console.log(Product)
  };
  return (
    <div>
      <form
        onSubmit={AddProductHandler}
        className="p-[5%] w-screen h-screen flex flex-col items-center"
      >
        <h1 className="text-3xl w-1/2 mb-5">Add New Product</h1>

        <input
          className="text-1xl  bg-zinc-100 rounded p-3 w-1/2 mb-3"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <input
          className="text-1xl  bg-zinc-100 rounded p-3 w-1/2 mb-3"
          type="url"
          placeholder="image-Link"
          onChange={(e) => setimage(e.target.value)}
          value={image}
        />

        <div className="w-1/2 flex justify-between">
          <input
            className="text-1xl  bg-zinc-100 rounded p-3 w-[45%] mb-3"
            type="text"
            placeholder="category"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />

          <input
            className="text-1xl  bg-zinc-100 rounded p-3 w-[48%] mb-3"
            type="number"
            placeholder="Enter Price"
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
        </div>
        <textarea
          className="text-1xl  bg-zinc-100 rounded p-3 w-1/2 mb-3"
          rows="10"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          placeholder="Enter Product Description here"
        ></textarea>

        <div className="w-1/2">
          <button className="py-3 px-5 px-5 border rounded border-blue-200 text-blue-300">
            Add new Product
          </button>
        </div>
      </form>
    </div>
  );
}
