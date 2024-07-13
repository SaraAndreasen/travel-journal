import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const links = [
  { name: "Home", href: "/home" },
  {
    name: "Friends",
    href: "/friends",
  },
  { name: "Travels", href: "/travels" },
];

export function NavLinksMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showContent, setShowContent] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    setTimeout(() => {
      setShowContent(true);
    }, 250); // Delay for content to appear after sidebar animation
  };

  const exitNav = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 250); // Delay for sidebar to fully close before hiding it
  };

  useEffect(() => {
    if (!isOpen) {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <>
      {/* Open Navigation Button */}
      <div className="flex cursor-pointer mt-5" onClick={openNav}>
        <FontAwesomeIcon icon={faBars} className="text-[#f8f8f8]" />
      </div>

      {/* Sidebar Overlay */}
      <div
        id="sideBar"
        className={`fixed top-0 right-0 w-full h-full z-10 transition-all duration-500 ${
          isOpen ? "bg-black bg-opacity-50" : "bg-transparent w-0"
        }`}
        style={{ visibility: isOpen ? "visible" : "hidden" }}
      >
        {/* Side Navigation */}
        <div
          id="sideNav"
          className={`fixed top-0 right-0 h-full z-20 bg-[#ff894c] transition-all duration-500 ${
            isOpen ? "w-3/5" : "w-0"
          }`}
        >
          {/* Close Button */}
          <div
            onClick={exitNav}
            className={`text-xl absolute top-0 right-0 mr-8 mt-7 cursor-pointer transition-opacity duration-100 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <FontAwesomeIcon icon={faXmark} className="text-black" />
          </div>

          <div className="block text-center mt-20">
            {links.map((link) => {
              return (
                <Link href={link.href} key={link.name}>
                  <p className="p-1.5">{link.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
