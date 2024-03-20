import { useEffect, useState } from "react";

// Custom hook to fetch restaurant menu data
const useRestaurantMenu = (
  resId,
  SWIGGY_MENU_API_URL,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY
) => {
  // State variables to store restaurant and menu item data
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  // Fetch restaurant info on component mount
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // Fetch restaurant info from API
  async function getRestaurantInfo() {
    try {
      const response = await fetch(SWIGGY_MENU_API_URL + resId);
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        const json = await response.json();

        // Set restaurant data
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY)
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];

        // Remove duplicate menu items
        const uniqueMenuItems = Array.from(new Set(menuItemsData.map(item => item.id))).map(id => {
          return menuItemsData.find(item => item.id === id);
        });

        setMenuItems(uniqueMenuItems);
      }
    } catch (err) {
      console.error(err);
      setMenuItems([]);
      setRestaurant(null);
    }
  }

  return [restaurant, menuItems];
};

export default useRestaurantMenu;
