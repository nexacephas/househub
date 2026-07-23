import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import PublicLayout from "./components/layout/PublicLayout";
import AuthLayout from "./components/auth/AuthLayout";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
// Public Pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";

import Properties from "./pages/public/Properties";
import PropertyDetails from "./pages/public/PropertyDetails";
import Blog from "./pages/public/Blog";
import BuyingGuide from "./pages/public/BuyingGuide";
import RentingGuide from "./pages/public/RentingGuide";
import FAQ from "./pages/public/FAQ";
function App() {
  return (
<BrowserRouter>
  <Routes>

    {/* Public Pages */}
    <Route element={<PublicLayout />}>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />
      <Route element={<PublicLayout />}>

  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

  <Route path="/properties" element={<Properties />} />
  <Route path="/properties/:id" element={<PropertyDetails />} />

  <Route path="/blog" element={<Blog />} />
  <Route path="/buying-guide" element={<BuyingGuide />} />
  <Route path="/renting-guide" element={<RentingGuide />} />
  <Route path="/faq" element={<FAQ />} />

</Route>

<Route element={<AuthLayout />}>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/reset-password" element={<ResetPassword />} />
  <Route path="/verify-email" element={<VerifyEmail />} />
</Route>

    </Route>

    {/* Authentication */}
    <Route element={<AuthLayout />}>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

    </Route>

  </Routes>
</BrowserRouter>
  );
}

export default App;