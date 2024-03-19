export const Shimmer = () => {
  return (
    <div className="card shimmer">
      <div className="food-image shimmer"></div>
      <div className="content">
        <div className="food-name-shimmer shimmer"></div>
        <div className="food-avg-shimmer shimmer"></div>
        <div className="food-min-shimmer shimmer"></div>
        <div className="food-cuisines-shimmer shimmer"></div>
        <div className="food-area-shimmer shimmer"></div>
      </div>
    </div>
  );
};

export const ShimmerMenu = () => {

  const shimmerItems = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="restaurant-menu">
      <div className="shimmer-restaurant-summary">
        <div className="shimmer-restaurant-img"></div>
        <div className="shimmer-restaurant-summary-details">
          <div className="shimmer-restaurant-title"></div>
          <div className="shimmer-restaurant-tags"></div>
          <div className="shimmer-restaurant-details">
            <div className="shimmer-restaurant-rating"></div>
            <div className="shimmer-restaurant-sla"></div>
            <div className="shimmer-restaurant-cost-for-two"></div>
          </div>
        </div>
      </div>

      <div className="shimmer-restaurant-menu-content">
      <div className="shimmer-menu-items-container">
        <div className="shimmer-menu-title-wrap">
          <div className="shimmer-menu-title"></div>
          <div className="shimmer-menu-count"></div>
        </div>
        <div className="shimmer-menu-items-list">
          {shimmerItems.map((index) => (
            <div className="shimmer-menu-item" key={index}>
              <div className="shimmer-menu-item-details">
                <div className="shimmer-item-title"></div>
                <div className="shimmer-item-cost"></div>
                <div className="shimmer-item-desc"></div>
              </div>
              <div className="shimmer-menu-img-wrapper">
                <div className="shimmer-menu-item-img"></div>
                <div className="shimmer-add-btn"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
