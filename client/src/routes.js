import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import Weather from "views/examples/Weather.jsx";
import ListToastSponsor from "views/toast/sponsors/List";
import EditToastSponsor from "views/toast/sponsors/Edit";
import ListBoard from "views/board/List";
import EditBoardMember from "views/board/Edit";
import EditSponsor from "views/sponsors/Edit";

var routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "chart-bar",
    color: "green",
    component: Index
  },
  {
    path: "/board/new",
    component: EditBoardMember
  },
  {
    path: "/board/edit/:id",
    component: EditBoardMember
  },
  {
    path: "/board",
    name: "Board of Directors",
    icon: "users",
    color: "blue",
    component: ListBoard
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
    path: "/sponsors/edit",
    component: EditSponsor
  },
  {
    path: "/toast/sponsors/edit/:id",
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
