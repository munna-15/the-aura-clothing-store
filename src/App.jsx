import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import FeatureBar from "./components/common/FeatureBar";
import MiniCart from "./components/Cart/Minicart";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import NewArrival from "./pages/NewArrival";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ProductDetails from "./components/ProductDetails/ProductDetails";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";

import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import OrderSuccess from "./pages/OrderSuccess";

import ProtectedRoute from "./routes/PotectedRoute";

const App = () => {
  const { pathname } = useLocation();

  const hideLayout = ["/login", "/register"].includes(pathname);

  return (
    <>
      <ScrollToTop />

      <Toaster position="top-right" reverseOrder={false} />

      <div className="flex min-h-screen flex-col bg-white">
        {!hideLayout && <Navbar />}

        {!hideLayout && <MiniCart />}

        <main className={`
    flex-1
    overflow-visible
    ${hideLayout ? "pt-0" : "pt-16"}
  `}>
          <Routes>
            {/* Public Routes */}

            <Route path="/" element={<Home />} />

            <Route path="/collection" element={<Collection />} />

            <Route path="/newarrival" element={<NewArrival />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />

            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />

            <Route
              path="/orders/:id"
              element={
                <ProtectedRoute>
                  <OrderDetails />
                </ProtectedRoute>
              }
            />

            <Route
              path="/order-success"
              element={
                <ProtectedRoute>
                  <OrderSuccess />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {!hideLayout && <FeatureBar />}

        {!hideLayout && <Footer />}
      </div>
    </>
  );
};

export default App;