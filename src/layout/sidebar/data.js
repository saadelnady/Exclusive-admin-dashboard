import { v4 } from "uuid";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaProductHunt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";

export const adminLinks = [
  {
    id: v4(),
    title: "dashboard",
    to: "/",
    icon: <IoHomeOutline className="me-2 fs-4" />,
  },
  {
    id: v4(),
    title: "profile",
    to: "/profile",
    icon: <CgProfile className="me-2 fs-4" />,
  },
  {
    id: v4(),
    title: "products",
    to: "/accepted-products",
    icon: <FaProductHunt className="me-2 fs-4" />,
    toggleKey: "isProductsActive",
    children: [
      {
        id: v4(),
        title: "pending-products",
        to: "/pending-products",
      },
      {
        id: v4(),
        title: "blocked-products",
        to: "/blocked-products",
      },
    ],
  },
  {
    id: v4(),
    title: "categories",
    to: "/categories",
    icon: <BiCategory className="me-2 fs-4" />,
    toggleKey: "isCategoriesActive",
    children: [
      {
        id: v4(),
        title: "add-category",
        to: "/add-category",
      },
    ],
  },
  {
    id: v4(),
    title: "sub-categories",
    to: "/sub-categories",
    icon: <MdOutlineCategory className="me-2 fs-4" />,
    toggleKey: "isSubCategoriesActive",
    children: [
      {
        id: v4(),
        title: "add-sub-category",
        to: "/add-sub-category",
      },
    ],
  },
];
