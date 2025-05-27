import Cover from "../components/shared/Cover";
import usePageTitle from "../hooks/usePageTitle";
import menuBg from "../assets/menu/banner3.jpg";
import PopularMenu from "../components/Home/PopularMenu";
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/shared/SectionTitle";
import MenuCategory from "../components/menu/MenuCategory";
import dessertBg from "../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../assets/menu/pizza-bg.jpg";
import saladBg from "../assets/menu/salad-bg.jpg";
import soupBg from "../assets/menu/soup-bg.jpg";

const Menu = () => {
  usePageTitle("Menu | Bistro Boss");
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Cover img={menuBg} title="Our Menu"></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory
        items={dessert}
        title="Desserts"
        coverImg={dessertBg}
      ></MenuCategory>
      {/* Pizza */}
      <MenuCategory
        items={pizza}
        title="Pizzas"
        coverImg={pizzaBg}
      ></MenuCategory>

      {/* Salads */}
      <MenuCategory
        items={salad}
        title="Salads"
        coverImg={saladBg}
      ></MenuCategory>
      {/* soup */}
      <MenuCategory items={soup} title="Soups" coverImg={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
