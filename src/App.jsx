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

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route element={<AuthLayout />}>

    <Route
        path="/login"
        element={<Login />}
    />

    <Route
        path="/register"
        element={<Register />}
    />

    <Route
        path="/forgot-password"
        element={<ForgotPassword />}
    />

    <Route
        path="/reset-password"
        element={<ResetPassword />}
    />
    <Route
path="/verify-email"
element={<VerifyEmail />}
/>

</Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;