import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader.tsx";

const Dashboard = lazy(() => import("./Pages/Dashboard.tsx"));
const Products = lazy(() => import("./Pages/Products.tsx"));
const Customers = lazy(() => import("./Pages/Customers.tsx"));
const Transaction = lazy(() => import("./Pages/Transaction.tsx"));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
