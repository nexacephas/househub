import { BrowserRouter, Routes, Route } from "react-router-dom";

// ==============================
// Layouts
// ==============================
import PublicLayout from "./components/layout/PublicLayout";
import AuthLayout from "./components/auth/AuthLayout";

// ==============================
// Public Pages
// ==============================
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Properties from "./pages/public/Properties";
import PropertyDetails from "./pages/public/PropertyDetails";
import Agents from "./pages/public/Agents";
import Blog from "./pages/public/Blog";
import BuyingGuide from "./pages/public/BuyingGuide";
import RentingGuide from "./pages/public/RentingGuide";
import FAQ from "./pages/public/FAQ";
import VerifiedAgents from "./pages/public/VerifiedAgents";
import ListProperty from "./pages/public/ListProperty/ListProperty";
import Terms from "./pages/public/Terms";
import Privacy from "./pages/public/Privacy";
import CookiePolicy from "./pages/public/CookiePolicy";

// ==============================
// Authentication
// ==============================
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";

// ==============================
// Landlord Pages
// ==============================
import Dashboard from "./pages/landlord/Dashboard/Dashboard";
import MyProperties from "./pages/landlord/MyProperties/MyProperties";
import AddProperty from "./pages/landlord/AddProperty/AddProperty";
import EditProperty from "./pages/landlord/EditProperty/EditProperty";

import Tenants from "./pages/landlord/Tenants/Tenants";
import TenantDetails from "./pages/landlord/TenantDetails/TenantDetails";
import AddTenant from "./pages/landlord/AddTenant/AddTenant";
import EditTenant from "./pages/landlord/EditTenant/EditTenant";

import Payments from "./pages/landlord/Payments/Payments";
import Maintenance from "./pages/landlord/MaintenanceDetails/MaintenanceDetails";
import Messages from "./pages/landlord/Messages/Messages";
import Settings from "./pages/landlord/Settings/Settings";

// ==============================
// Tenant
// ==============================

import TenantDashboard from "./pages/tenant/Dashboard/Dashboard";
import MyProperty from "./pages/tenant/MyProperty/MyProperty";
import TenantPayments from "./pages/tenant/Payments/Payments";
import TenantMaintenance from "./pages/tenant/Maintenance/Maintenance";
import TenantMessages from "./pages/tenant/Messages/Messages";
import Documents from "./pages/tenant/Documents/Documents";
import TenantSettings from "./pages/tenant/Settings/Settings";
// ==============================
// Agent
// ==============================
import AgentDashboard from "./pages/agent/Dashboard/Dashboard";

// ==============================
// Admin
// ==============================
import AdminDashboard from "./pages/admin/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* =====================================
            Public Routes
        ====================================== */}

        <Route element={<PublicLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/properties"
            element={<Properties />}
          />

          <Route
            path="/properties/:id"
            element={<PropertyDetails />}
          />

          <Route
            path="/list-property"
            element={<ListProperty />}
          />

          <Route
            path="/agents"
            element={<Agents />}
          />

          <Route
            path="/verified-agents"
            element={<VerifiedAgents />}
          />

          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/buying-guide"
            element={<BuyingGuide />}
          />

          <Route
            path="/renting-guide"
            element={<RentingGuide />}
          />

          <Route
            path="/faq"
            element={<FAQ />}
          />

          <Route
            path="/terms"
            element={<Terms />}
          />

          <Route
            path="/privacy"
            element={<Privacy />}
          />

          <Route
            path="/cookies"
            element={<CookiePolicy />}
          />

        </Route>

        {/* =====================================
            Authentication
        ====================================== */}

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

        {/* =====================================
            Landlord
        ====================================== */}

        <Route path="/landlord">

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          {/* Properties */}

          <Route
            path="properties"
            element={<MyProperties />}
          />

          <Route
            path="properties/new"
            element={<AddProperty />}
          />

          <Route
            path="properties/edit/:id"
            element={<EditProperty />}
          />

          {/* Tenants */}

          <Route
            path="tenants"
            element={<Tenants />}
          />

          <Route
            path="tenants/new"
            element={<AddTenant />}
          />

          <Route
            path="tenants/:id"
            element={<TenantDetails />}
          />

          <Route
            path="tenants/edit/:id"
            element={<EditTenant />}
          />

          {/* Payments */}

          <Route
            path="payments"
            element={<Payments />}
          />

          {/* Maintenance */}

          <Route
            path="maintenance"
            element={<Maintenance />}
          />

          {/* Messages */}

          <Route
            path="messages"
            element={<Messages />}
          />

          {/* Settings */}

          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

 
{/* =====================================
    Tenant
===================================== */}

<Route path="/tenant">

  <Route
    path="dashboard"
    element={<TenantDashboard />}
  />

  <Route
    path="my-property"
    element={<MyProperty />}
  />

  <Route
    path="payments"
    element={<TenantPayments />}
  />

  <Route
    path="maintenance"
    element={<TenantMaintenance />}
  />

  <Route
    path="messages"
    element={<TenantMessages />}
  />

  <Route
    path="documents"
    element={<Documents />}
  />

  <Route
    path="settings"
    element={<TenantSettings />}
  />

</Route>
        {/* =====================================
            Agent
        ====================================== */}

        <Route path="/agent">

          <Route
            path="dashboard"
            element={<AgentDashboard />}
          />

  <Route
    path="listings"
    element={<MyProperties />}
  />

  <Route
    path="listings/new"
    element={<AddProperty />}
  />

  <Route
    path="listings/edit/:id"
    element={<EditProperty />}
  />

  <Route
    path="clients"
    element={<Tenants />}
  />

  <Route
    path="clients/new"
    element={<AddTenant />}
  />

  <Route
    path="clients/:id"
    element={<TenantDetails />}
  />

  <Route
    path="clients/edit/:id"
    element={<EditTenant />}
  />

  <Route
    path="messages"
    element={<Messages />}
  />

  <Route
    path="settings"
    element={<Settings />}
  />

</Route>


        {/* =====================================
            Admin
        ====================================== */}

        <Route path="/admin">

          <Route
            path="dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="properties"
            element={<MyProperties />}
          />

          <Route
            path="properties/new"
            element={<AddProperty />}
          />

          <Route
            path="properties/edit/:id"
            element={<EditProperty />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;