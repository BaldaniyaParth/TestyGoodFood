import { restaurantList } from "../Contant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.includes(searchText)
    );
    return filterData;
}

const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Enter the Food Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" 
            onClick={() => {
                const data = filterData(searchText, restaurants);
                setRestaurants(data);
            }}
            >Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
