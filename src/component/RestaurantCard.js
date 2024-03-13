import { IMG_CDN_URL } from "../Contant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  avgRating,
  slaString,
  
}) => {
  return (
    <div className="card">
      <img className="food-image" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="food-name">{name}</h3>
      <span className="food-avg-min">
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
          className="food-avg"
        >
        <FontAwesomeIcon icon={faStar} className="star" /> {avgRating}
        </h4>
        <h4 className="food-min">{slaString}</h4>
      </span>
      <h4 className="food-cuisines">{cuisines.join(", ")}</h4>
      <h4 className="food-area">{area}</h4>
      
    </div>
  );
};

export default RestaurantCard;