import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import Weather from "views/examples/Weather.jsx";
import ListToastSponsor from "views/toast/sponsors/List";
import EditToastSponsor from "views/toast/sponsors/Edit";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "chart-bar",
    color: "green",
    component: Index
  },
  {
    path: "/icons",
    name: "Board of Directors",
    icon: "users",
    color: "blue",
    component: Icons
  },
  {
    path: "/maps",
    name: "Sponsors",
    icon: "hand-holding-usd",
    color: "orange",
    component: Maps
  },
  {
    path: "/user-profile",
    name: "Pride Guide Ads",
    icon: "image",
    color: "yellow",
    component: Profile
  },
  {
    path: "/tables",
    name: "Vendors",
    icon: "store",
    color: "pink",
    component: Tables
  },
  {
    path: "/weather",
    name: "Settings",
    icon: "cogs",
    color: "red",
    component: Weather
  },
  {
    path: "/toast/sponsors/edit",
    component: EditToastSponsor
  },
  {
    path: "/toast/sponsors",
    name: "Sponsors",
    icon: "hand-holding-usd",
    color: "green",
    category: "toast",
    component: ListToastSponsor
  },
  {
    path: "/toast/sponsors",
    name: "Competitors",
    icon: "trophy",
    color: "indigo",
    category: "toast",
    component: ListToastSponsor
  },
  {
    path: "/toast/settings",
    name: "Settings",
    icon: "cogs",
    color: "info",
    category: "toast",
    component: ListToastSponsor
  }
];
export default routes;
