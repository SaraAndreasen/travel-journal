"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/home" },
  {
    name: "Friends",
    href: "/friends",
  },
  { name: "Travels", href: "/travels" },
];

export function NavLinksDesktop() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex justify-around">
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.name}
              className={clsx({
                "text-[#ff894c]": pathname === link.href,
              })}
            >
              <p className="p-1.5 hover:text-[#dc2f2f]">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
