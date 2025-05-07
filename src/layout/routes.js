export const routes = [{ path: "/", element: <AdminDashboard /> }];

import AdminDashboard from "../components/Admin/DashBoard/DashBoard.jsx";
import AdminProfile from "../components/Admin/AdminProfile/Index.jsx";
import Product from "../components/Admin/Product/Index.jsx";
import PendingProducts from "../components/Admin/Products/PendingProducts.jsx";
import AcceptedProducts from "../components/Admin/Products/AcceptedProducts.jsx";
import BlockedProducts from "../components/Admin/Products/BlockedProducts.jsx";
import Categories from "../components/Admin/Categories/Categories.jsx";
import AddCategory from "../components/Admin/AddCategory/AddCategory.jsx";
import AddSubCategory from "../components/Admin/AddsubCategory/AddSubCategory.jsx";
import SubCategories from "../components/Admin/SubCategories/SubCategories.jsx";
import Seller from "../components/Admin/Seller/Index.jsx";
import NotFoundPage from "../components/Shared/NotFoundPage.jsx";

const adminRoutes = (isWarning, handleShowWarning) => [
  { path: "/", element: <AdminDashboard /> },
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
