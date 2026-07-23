export const navLinks = [
  {
    name: "Home",
    path: "/",
  },

{
  name: "Properties",
  children: [
    { name: "Browse All", path: "/properties" },
    { name: "For Sale", path: "/properties/sale" },
    { name: "For Rent", path: "/properties/rent" },
    { name: "Short Lets", path: "/properties/short-lets" },
    { name: "Commercial", path: "/properties/commercial" },
    { name: "Luxury Homes", path: "/properties/luxury" },
    { name: "New Developments", path: "/properties/developments" },
    { name: "Verified Listings", path: "/properties/verified" },
    { name: "Featured Properties", path: "/properties/featured" },
  ],
},

{
  name: "Agents",
  children: [
    {
      name: "Browse Agents",
      path: "/agents",
    },
    {
      name: "Verified Agents",
      path: "/verified-agents",
    },
    {
      name: "Become an Agent",
      path: "/become-agent",
    },
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
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Buying Guide",
      path: "/buying-guide",
    },
    {
      name: "Renting Guide",
      path: "/renting-guide",
    },
    {
      name: "FAQs",
      path: "/faq",
    },
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