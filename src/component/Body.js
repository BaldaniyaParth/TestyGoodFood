import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.includes(searchText)
    );
    return filterData;
}

const Body = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect( () => {
      getRestaurant();
    }, [])

    const getRestaurant = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

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
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
