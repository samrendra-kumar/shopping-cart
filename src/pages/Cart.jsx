import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";



const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

 

  return (
    <div className="flex flex-col">
  {
    cart.length > 0  ? 
    (<div  className="mx-auto flex flex-row w-11/12  justify-center">


      <div className="max-w-maxContent max-w-[50%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="grid grid-rows-2 content-between ">

        <div className="sticky top-3  mt-8 ">
          <div className="text-green-500 font-light text-xl">Your Cart</div>
          <div className="text-green-500 font-bold text-3xl">SUMMARY</div>
          <p className="font-bold text-green-900">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className=" self-end sticky bottom-[10px] mb-[10px]">
          <p className="text-green-900 font-bold">Total Amount: ${totalAmount}</p>
          <NavLink to="/">
          <button className="bg-lime-700 text-white w-[100%]">
            CheckOut Now
          </button>
          </NavLink>
          
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
