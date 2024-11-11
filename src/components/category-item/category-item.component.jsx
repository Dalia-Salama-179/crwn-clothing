import "./category-item.styles.scss";
import PropTypes from "prop-types";

const CategoryItem = ({ title, imageUrl }) => {
  return (
      <div className="category-container">
        <div className="background-image" style={{"background-image": `url(${imageUrl}`}}/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
  )
}

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default CategoryItem;