import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  RESTAURANT_IMG_CDN_URL,
  MENU_ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  SWIGGY_MENU_API_URL
} from "../utils/Contant";
import { ShimmerMenu } from "./Shimmer";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import useOnline from "../Hooks/useOnline";
import UserOffline from "./UserOffline";

// Component for displaying restaurant menu
const RestaurantMenu = () => {
  // Get restaurant ID from URL parameters
  const { resId } = useParams(); 
  // Fetch restaurant and menu items data
  const [restaurant, menuItems] = useRestaurantMenu(
    resId,
    SWIGGY_MENU_API_URL,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );
  
  const isOnline = useOnline();

  // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <UserOffline />
  }
  
  // Display loading shimmer if restaurant data is not available
  if (!restaurant) {
    return <ShimmerMenu />;
  } else {
    // Render restaurant menu
    return (
      <div className="restaurant-menu">
        {/* Display restaurant summary */}
        <div className="restaurant-summary">
          <img
            className="restaurant-img"
            src={RESTAURANT_IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
          <div className="restaurant-summary-details">
            <h2 className="restaurant-title">{restaurant?.name}</h2>
            <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
            <div className="restaurant-details">
              {/* Display restaurant rating with color coding */}
              <div className="restaurant-rating" style={
                (restaurant?.avgRating) < 4.3
                  ? { backgroundColor: "red" }
                  : (restaurant?.avgRating) === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }>
                <FontAwesomeIcon icon={faStar} className="star" />
                <span>{restaurant?.avgRating}</span>
              </div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.sla?.slaString}</div>
              <div className="restaurant-rating-slash">|</div>
              <div>{restaurant?.costForTwoMessage}</div>
            </div>
          </div>
        </div>
        {/* Display menu items */}
        <div className="restaurant-menu-content">
          <div className="menu-items-container">
            <div className="menu-title-wrap">
              <h3 className="menu-title">Recommended</h3>
              <p className="menu-count">
                {menuItems.length} ITEMS
              </p>
            </div>
            <div className="menu-items-list">
              {/* Map through menu items and display each */}
              {menuItems.map((item) => (
                <div className="menu-item" key={item?.id}>
                  <div className="menu-item-details">
                    <h3 className="item-title">{item?.name}</h3>
                    <p className="item-cost">
                      {/* Display item price */}
                      {item?.price > 0
                        ? new Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                          }).format(item?.price / 100)
                        : " "}
                    </p>
                    <p className="item-desc">{item?.description}</p>
                  </div>
                  <div className="menu-img-wrapper">
                    {/* Display item image if available */}
                    {item?.imageId && (
                      <img
                        className="menu-item-img"
                        src={MENU_ITEM_IMG_CDN_URL + item?.imageId}
                        alt={item?.name}
                      />
                    )}
                    <button className="add-btn"> ADD +</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
