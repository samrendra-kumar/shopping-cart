
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-row w-11/12 mx-auto max-w-Maxcontent h-56 border-b-4 border-gray-600">

      <div className="flex flex-row items-center justify-center gap-x-10">

        <div className="w-[200px] object-cover">
          <img   src={item.image} />
        </div>
        <div  className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">{item.title}</h1>
          <h1>{item.description.substring(0,125)}...</h1>
          <div className="flex flex-row justify-between">
            <p className="text-green-500 font-bold">${item.price}</p>
            <div className="bg-red-500"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
