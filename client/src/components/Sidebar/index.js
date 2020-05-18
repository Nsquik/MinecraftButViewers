import React from "react";
import useSidebarData from "../../hooks/useSidebarData";
import "./Sidebar.scss";

const Sidebar = () => {
  const data = useSidebarData();

  const renderList = () => {
    if (data.length > 0) {
      return data.map((item) => {
        return <SidebarItem data={item} key={item._id} />;
      });
    }
  };

  return (
    <>
      <div className="sidebar">
        <p className="sidebar__title"> OSTATNIE ZAKUPY </p>

        <ul className="sidebar__list">{renderList()}</ul>
      </div>
    </>
  );
};

const SidebarItem = ({ data }) => {
  return (
    <li className="sidebar__item" key={data._id}>
      <img src={data._user.img} alt="twitch profile" className="sidebar__item-img" />
      <div className="sidebar__item-price">{data.price}zł</div>
      <div className="sidebar__item-twitchname">{data._user.display_name}</div>
    </li>
  );
};

export default Sidebar;
