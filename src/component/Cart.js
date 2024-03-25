import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)

    return(
        <>  
            <div className="cart-item">
                <h1>CartItems :</h1>
                <FoodItem  {...cartItems[0]}/>
            </div>   
        </>
    )
}   

export default Cart;