import CategoryItem from "../category-item/category-item.component";
import "./categories.styles.scss";

export function Categories(props) {
  return (
    <div className="categories-container">
      {props.categories.map((category) => (
        <CategoryItem key={category.id} category={category}></CategoryItem>
      ))}
    </div>
  );
}
