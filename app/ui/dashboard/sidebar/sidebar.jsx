import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItem = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/dashboard/revenue", icon: <MdWork /> },
      { title: "Reports", path: "/dashboard/reports", icon: <MdAnalytics /> },
      { title: "Teams", path: "/dashboard/teams", icon: <MdPeople /> },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      { title: "Help", path: "/dashboard/help", icon: <MdHelpCenter /> },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className="sticky top-10 w-full">
      <div className="flex gap-2">
        <Image
          className="rounded-full bg-cover"
          priority="false"
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className=" font-semibold">Salah Mohsen</span>
          <span className="text-sm text-textSoft">Adminisrator</span>
        </div>
      </div>
      <ul className="mt-6 ">
        {menuItem.map((category) => (
          <li key={category.title}>
            <div className="my-0.5 text-textSoft font-semibold tracking-wide text-sm  	">
              {category.title}
            </div>
            {category.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
        <button className="flex items-center gap-2 px-3 py-2 w-full hover:bg-bg hover:rounded-md ease-in-out duration-300">
          <MdLogout />
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
