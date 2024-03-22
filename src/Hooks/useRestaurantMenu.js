import { useEffect, useState } from "react";

// Custom hook to fetch restaurant menu data
const useRestaurantMenu = (
  resId,
  SWIGGY_MENU_API_URL,
  MENU_ITEM_TYPE_KEY
) => {
  // State variables to store restaurant and menu item data
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [menu, setMenu] = useState([]);

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
          json?.data?.cards[0]?.card?.card?.info;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData =
          json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
            (x) => x.card?.card
          )
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info);

        setMenuItems(menuItemsData);

        // set Menu data
        const menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
          (x) => x.card?.card
        )
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY);

        setMenu(menuData);

      }
    } catch (err) {
      console.error(err);
      setMenuItems([]);
      setRestaurant(null);
      setMenu([]);
    }
  }

  return [restaurant, menuItems, menu];
};

export default useRestaurantMenu;
