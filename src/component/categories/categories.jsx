import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";

const Categories = (props) => {
  return (
    <div className="categories-container">
      {props.categories.map((category) => (
        <CategoryItem key={category.id} category={category}></CategoryItem>
      ))}
    </div>
  );
};
export default Categories;
