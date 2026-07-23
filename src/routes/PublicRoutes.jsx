import { Route } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Properties from "../pages/public/Properties";
import PropertyDetails from "../pages/public/PropertyDetails";
import Agents from "../pages/public/Agents";
import Blog from "../pages/public/Blog";
import BuyingGuide from "../pages/public/BuyingGuide";
import RentingGuide from "../pages/public/RentingGuide";
import FAQ from "../pages/public/FAQ";
import VerifiedAgents from "../pages/public/VerifiedAgents";
import ListProperty from "../pages/public/ListProperty/ListProperty";
import Terms from "../pages/public/Terms";
import Privacy from "../pages/public/Privacy";
import CookiePolicy from "../pages/public/CookiePolicy";

export default function PublicRoutes() {
  return (
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />
      <Route path="/list-property" element={<ListProperty />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/verified-agents" element={<VerifiedAgents />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/buying-guide" element={<BuyingGuide />} />
      <Route path="/renting-guide" element={<RentingGuide />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookies" element={<CookiePolicy />} />
    </Route>
  );
}