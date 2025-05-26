import Cover from "../components/shared/Cover";
import usePageTitle from "../hooks/usePageTitle";
import menuBg from "../assets/menu/banner3.jpg";
import PopularMenu from "../components/Home/PopularMenu";

const Menu = () => {
  usePageTitle("Menu | Bistro Boss");
  return (
    <div>
      <Cover img={menuBg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuBg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuBg} title="Our Menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
