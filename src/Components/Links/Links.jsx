import { BiRestaurant } from "react-icons/bi";
import {
  FaUser,
  FaHeart,
  FaSignOutAlt,
  FaHome,
  FaAddressCard,
  FaComment,
} from "react-icons/fa";

//---------------------Header Links-----------------------

export const HeaderWebLinks = [
  {
    name: "Ana Sayfa",
    href: "/landing",
    icon: <FaHome fontSize="16px" />,
  },
  {
    name: "Restoranlar",
    href: "/discover",
    icon: <BiRestaurant fontSize="16px" />,
  },
];

//------------------- Navbar Links----------------------
export const NavbarMenuLinks = [
  {
    name: "Restoranlar",
    href: "/discover",
    icon: <BiRestaurant fontSize="18px" />,
  },
  /* {
    name: "Favori Restoranlar",
    href: "#",
    icon: <FaHeart fontSize="18px" />,
  },*/
  {
    name: "Profilim",
    href: "/profile",
    icon: <FaUser fontSize="18px" />,
  },
  {
    name: "Çikiş",
    href: "/signin",
    icon: <FaSignOutAlt fontSize="18px" />,
  },
];

//-------------------Profile Card Links----------------------
export const ProfileMenuLinks = [
  {
    name: "Rezervasyonlar",
    href: `/reservations/${JSON.parse(localStorage.getItem("currentUser"))}`,
    icon: <BiRestaurant fontSize="18px" />,
  },
  {
    name: "Favori Restoranlar",
    href: `/favrestoran/${JSON.parse(localStorage.getItem("currentUser"))}`,
    icon: <FaHeart fontSize="18px" />,
  },
  {
    name: "Profilim",
    href: "/profile",
    icon: <FaUser fontSize="18px" />,
  },

  {
    name: "Yorumlar",
    href: `/comments/${JSON.parse(localStorage.getItem("currentUser"))}`,
    icon: <FaComment fontSize="18px" />,
  },

  {
    name: "Çikiş",
    href: "/signin",
    icon: <FaSignOutAlt fontSize="18px" />,
  },
];
