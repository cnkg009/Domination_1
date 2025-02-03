import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Productcontext } from '../utils/Context';
import { useContext } from 'react';

export default function Edit() {
    const navigate =  useNavigate()
    const {id} = useParams()
    const [products, setproducts] = useContext(Productcontext);
  
    const [product,setproduct] = useState({
        title:"",
        description:"",
        image:"",
        category:"",
        price:""

 } )
//     const [title, setTitle] = useState();
//     const [image, setimage] = useState("");
//     const [category, setcategory] = useState("");
//     const [price, setprice] = useState("");
//     const [description, setdescription] = useState("");


const ChangeHandler =(e)=>{

    
        setproduct([...product,{[e.target.name]:e.target.value}])
}
    useEffect(()=>{

            setproduct(products.filter((p)=>{ return p.id == id[0]}))
    },[id])
  
    const AddProductHandler = (e) => {
      e.preventDefault();
  
      if (
        product.title.trim().length < 5 ||
        product.image.trim().length  < 5||
        product.category.trim().length < 5  ||
        product.price.trim().length  <1 ||
        product.description.trim().length < 5
      ) {
        alert("No field must  be empty , every field at  leat  4 characters");
        return
      }
  

      const pi = products.findIndex((p)=>{ return p.id == id[0]})
      let copyData = [...products];
      copyData[pi]= [...products[pi], ...product]

      setproducts(copyData)
    //   const product = {
    //     id: nanoid(),
    //     title,
    //     image,
    //     category,
    //     price,
    //     description,
    //   };


    //   setproducts([...products, product]);
      localStorage.setItem("products",JSON.stringify([...products, product]))
      navigate("/")


      // toast.success("New Product Added!")
      // console.log(Product)
    };
  return (
    <form
    onSubmit={AddProductHandler}
    className="p-[5%] w-screen h-screen flex flex-col items-center"
  >
    <h1 className="text-3xl w-1/2 mb-5">Edit  Product</h1>

    <input
      className="text-1xl  bg-zinc-100 rounded p-3 w-1/2 mb-3"
      type="text"
      placeholder="Title"
      name='title'
      onChange={ChangeHandler}
      value={product && product.title}
    />

    <input
      className="text-1xl  bg-zinc-100 rounded p-3 w-1/2 mb-3"
      type="url"
      placeholder="image-Link"
      name='image'
      onChange={ChangeHandler}
      value={product && product.image}
    />

    <div className="w-1/2 flex justify-between">
      <input
        className="text-1xl  bg-zinc-100 rounded p-3 w-[45%] mb-3"
        type="text"
        placeholder="category"
        name='category'
        onChange={ChangeHandler}
        value={product && product.category}
      />

      <input
        className="text-1xl  bg-zinc-100 rounded p-3 w-[48%] mb-3"
        type="number"
        placeholder="Enter Price"
        name='price'
        onChange={ChangeHandler}
        value={product && product.price}
      />
    </div>
    <textarea
      className="text-1xl  bg-zinc-100 rounded p-3 w-1/2 mb-3"
      rows="10"
      name='description'
      onChange={ChangeHandler}
      value={product && product.description}
      placeholder="Enter Product Description here"
    ></textarea>

    <div className="w-1/2">
      <button className="py-3 px-5 px-5 border rounded border-blue-200 text-blue-300">
        Edit Product
      </button>
    </div>
  </form>
  )
}
