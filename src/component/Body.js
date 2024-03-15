import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);


  const getRestaurant = async () => {
    try {
      
      const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      document.write(<h1>This is live swiggy api so fetching data not properly give response. I will work in this problem and solve very soon. Thank You</h1>)
    }
  };

  if(!allRestaurants){
    return null;
  }
  
  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Enter the Food Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={ () => {
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}>
          Search
        </button>
      </div>
        <div className="restaurant-list">
          {filteredRestaurants?.length == 0  ? (
            <h1>Not Restaurant match your Filter!</h1>
          ) : 
          (filteredRestaurants?.map((restaurant) => (
            <>
              <RestaurantCard
                key={restaurant?.info?.id}
                {...restaurant?.info}
              />
            </>
          )))}
        </div>
    </>
  );
};

export default Body;
