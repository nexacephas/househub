import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import PublicLayout from "./components/layout/PublicLayout";

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

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;