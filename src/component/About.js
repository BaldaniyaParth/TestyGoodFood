import food from "../assets/img/food.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br />
          <span>Tasty Good Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a <span>TestyGoodFood</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
        <img src={food} alt="Food Image" />
      </div>
    </div>
  );
};

export default About;
