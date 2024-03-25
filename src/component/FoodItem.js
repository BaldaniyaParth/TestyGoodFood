import { RESTAURANT_IMG_CDN_URL } from "../utils/Contant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Component for rendering restaurant card.
const FoodItem = ({
  imageId,
  name,
  category,
  description,
  price,
}) => {
  return (
    <div className="card">
      <img className="food-image" src={RESTAURANT_IMG_CDN_URL + imageId} alt={name} />
      <h3 className="food-name">{name}</h3>
      <h4 className="food-cuisines">{category}</h4>
      <h4 className="food-area">{description}</h4>
      <span className="food-avg-min">
        <h4 className="food-min">{price/100}</h4>
      </span>
    </div>
  );
};

export default FoodItem;
