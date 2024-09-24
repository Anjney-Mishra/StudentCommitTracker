import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      isMenuOpen={isMenuOpen} 
      className="bg-white shadow-md dark:bg-gray-900"
    >
      {/* Brand and Menu Toggle (for mobile) */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
          <p className="font-bold text-2xl text-primary dark:text-white">
            ABES FSD Department
          </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Links */}
      <NavbarContent className="hidden sm:flex gap-6 justify-center">
        <NavbarItem>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary underline font-semibold transition-all"
                : "hover:text-blue-500 dark:hover:text-blue-300 transition-all"
            }
          >
            Tracker
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary underline font-semibold transition-all"
                : "hover:text-blue-500 dark:hover:text-blue-300 transition-all"
            }
          >
            About Us
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-primary underline font-semibold transition-all"
                : "hover:text-blue-500 dark:hover:text-blue-300 transition-all"
            }
          >
            Contact Us
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu isOpen={isMenuOpen} className="bg-white dark:bg-gray-900">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "block w-full text-primary font-semibold transition-all"
                  : "block w-full hover:text-blue-500 dark:hover:text-blue-300 transition-all"
              }
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
