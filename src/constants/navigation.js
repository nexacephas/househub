export const navLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Properties",
    children: [
      { name: "Buy", path: "/buy" },
      { name: "Rent", path: "/rent" },
      { name: "Short Lets", path: "/short-lets" },
      { name: "Commercial", path: "/commercial" },
      { name: "Luxury Homes", path: "/luxury" },
      { name: "New Developments", path: "/developments" },
    ],
  },

  {
    name: "Agents",
    children: [
      { name: "Find an Agent", path: "/agents" },
      { name: "Verified Agents", path: "/verified-agents" },
      { name: "Become an Agent", path: "/become-agent" },
    ],
  },

  {
    name: "List Property",
    children: [
      { name: "List a Property", path: "/list-property" },
      { name: "Landlord Dashboard", path: "/landlord" },
      { name: "Agent Dashboard", path: "/agent" },
    ],
  },

  {
    name: "Resources",
    children: [
      { name: "Blog", path: "/blog" },
      { name: "Buying Guide", path: "/buying-guide" },
      { name: "Renting Guide", path: "/renting-guide" },
      { name: "FAQs", path: "/faq" },
    ],
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];