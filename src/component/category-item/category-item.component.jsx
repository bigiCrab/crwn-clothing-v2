import "./category-item.styles.scss";

export const CategoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        alt={`img_${title}_${id}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        src={imageUrl}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
