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
    icon: "ni ni-tv-2 text-primary",
    component: Index
  },
  {
    path: "/icons",
    name: "Board of Directors",
    icon: "ni ni-planet text-blue",
    component: Icons
  },
  {
    path: "/maps",
    name: "Sponsors",
    icon: "ni ni-pin-3 text-orange",
    component: Maps
  },
  {
    path: "/user-profile",
    name: "Pride Guide Ads",
    icon: "ni ni-single-02 text-yellow",
    component: Profile
  },
  {
    path: "/tables",
    name: "Vendors",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables
  },
  {
    path: "/weather",
    name: "Settings",
    icon: "ni ni-bullet-list-67 text-red",
    component: Weather
  },
  {
    path: "/toast/sponsors/edit",
    component: EditToastSponsor
  },
  {
    path: "/toast/sponsors",
    name: "Sponsors",
    icon: "ni ni-bullet-list-67 text-red",
    category: "toast",
    component: ListToastSponsor
  },
  {
    path: "/toast/settings",
    name: "Settings",
    icon: "ni ni-bullet-list-67 text-red",
    category: "toast",
    component: ListToastSponsor
  }
];
export default routes;
