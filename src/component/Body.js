import { restaurantList } from "../Contant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return(
        <>
            <div className="search">
                <input type="text" className="search-input" placeholder="Enter the Food Name"/>
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-list">
                {restaurantList.map((restaurant) => {
                    return (
                        <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                    );
                })}
            </div>
        </>
    )
}

export default Body;