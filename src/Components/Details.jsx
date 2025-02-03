import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Productcontext } from "../utils/Context";
// import axios from "../utils/axios";
import Loading from "./Loading";

export default function Details() {
  const  navigate = useNavigate()
  const [products, setproducts] = useContext(Productcontext);
  const [product, setproduct] = useState(null);
  const { id } = useParams();

  // const getsingleproduct = async ()=>{
  //   try{
  //     const {data}=  await axios.get(`/products/${id}`)
  //     setproduct(data)
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
    //  getsingleproduct();
  }, []);

  let ProductDeleteHandler = (id) => {
    const Filteredproduct = products.filter((p) => p.id !== id);
    setproducts(Filteredproduct);
    localStorage.setItem("products", JSON.stringify(Filteredproduct));
    navigate("/")
  };

  return product ? (
    <div className="w-[70%] flex justify-between items-center h-full  m-auto p-[10%] ">
      <img
        className="mr-5 object-contain w-[40%] h-[80%] "
        src={`${product.image}`}
        alt=""
      />
      <div className="content  w-[50%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-400 mb-3">{product.price}</h2>
        <p className="mb-[5%] mr-5">{product.description}</p>
        <Link to={`/edit/${product.id}`} className="py-3 px-5 px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <button
          onClick={() => ProductDeleteHandler(product.id)}
          className="py-3 px-5 px-5 border rounded border-red-200 text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading/>
  );
}
