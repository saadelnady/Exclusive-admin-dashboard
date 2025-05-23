import AdminProfile from "../components/AdminProfile/Index.jsx";
import Product from "../components/Product/Index.jsx";
import PendingProducts from "../components/Products/PendingProducts.jsx";
import AcceptedProducts from "../components/Products/AcceptedProducts.jsx";
import BlockedProducts from "../components/Products/BlockedProducts.jsx";
import Categories from "../components/Categories/Categories.jsx";
import AddCategory from "../components/AddCategory/AddCategory.jsx";
import AddSubCategory from "../components/AddsubCategory/AddSubCategory.jsx";
import SubCategories from "../components/SubCategories/SubCategories.jsx";
import Seller from "../components/Seller/Index.jsx";
import NotFoundPage from "../components/Shared/NotFoundPage.jsx";
import AllAdmins from "@/components/admins/index.js";
import AddNewAdmin from "@/components/admins/addNewAdmin.js";
import Home from "@/components/Home/Index.js";

const adminRoutes = (isWarning, handleShowWarning) => [
  { path: "/", element: <Home /> },
  {
    path: "/admins",
    element: (
      <AllAdmins isWarning={isWarning} handleShowWarning={handleShowWarning} />
    ),
  },
  {
    path: "/admins/add-admin",
    element: (
      <AddNewAdmin
        isWarning={isWarning}
        handleShowWarning={handleShowWarning}
      />
    ),
  },
  {
    path: "/admins/:adminId",
    element: (
      <AddNewAdmin
        isWarning={isWarning}
        handleShowWarning={handleShowWarning}
      />
    ),
  },
  { path: "/profile", element: <AdminProfile /> },
  {
    path: "/products/:productId",
    element: (
      <Product isWarning={isWarning} handleShowWarning={handleShowWarning} />
    ),
  },
  {
    path: "/pending-products",
    element: (
      <PendingProducts
        isWarning={isWarning}
        handleShowWarning={handleShowWarning}
      />
    ),
  },
  {
    path: "/accepted-products",
    element: (
      <AcceptedProducts
        isWarning={isWarning}
        handleShowWarning={handleShowWarning}
      />
    ),
  },
  {
    path: "/blocked-products",
    element: (
      <BlockedProducts
        isWarning={isWarning}
        handleShowWarning={handleShowWarning}
      />
    ),
  },
  {
    path: "/categories",
    element: (
      <Categories isWarning={isWarning} handleShowWarning={handleShowWarning} />
    ),
  },
  { path: "/add-category", element: <AddCategory /> },
  { path: "/categories/editCategory/:categoryId", element: <AddCategory /> },
  { path: "/sub-categories/:subCategoryId", element: <AddSubCategory /> },
  {
    path: "/sub-categories",
    element: (
      <SubCategories
        isWarning={isWarning}
        handleShowWarning={handleShowWarning}
      />
    ),
  },
  { path: "/add-sub-category", element: <AddSubCategory /> },
  {
    path: "/seller/:sellerId",
    element: (
      <Seller isWarning={isWarning} handleShowWarning={handleShowWarning} />
    ),
  },
  { path: "*", element: <NotFoundPage navigateTo="/" /> },
];

export default adminRoutes;
