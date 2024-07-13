import Link from "next/link";

const links = [
  { name: "Home", href: "/home" },
  {
    name: "Friends",
    href: "/friends",
  },
  { name: "Travels", href: "/travels" },
];

export function NavLinksDesktop() {
  return (
    <>
      <div className="flex justify-around">
        {links.map((link) => {
          return (
            <Link href={link.href} key={link.name}>
              <p className="p-1.5">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
