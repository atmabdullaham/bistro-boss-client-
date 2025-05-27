import { Link } from "react-router-dom";
import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 my-16">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title || "offered"}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now{" "}
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
