import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const links: NavLink[] = [
  {
    label: "Werkwijze",
    href: "/werkwijze",
    children: [
      { label: "Overzicht", href: "/werkwijze" },
      { label: "Gratis ophalen", href: "/werkwijze/gratis-ophalen" },
      { label: "Datawissing op locatie", href: "/werkwijze/datawissing-op-locatie" },
    ],
  },
  { label: "Wat wij aannemen", href: "/wat-wij-aannemen" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Veelgestelde vragen", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [werkwijzeOpen, setWerkwijzeOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setWerkwijzeOpen(false);
  }, [location.pathname, location.hash]);

  const handleHomeClick = (e: React.MouseEvent) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openDropdown = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setWerkwijzeOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setWerkwijzeOpen(false), 120);
  };

  const isActive = (href: string) =>
    location.pathname === href || location.pathname.startsWith(href + "/");

  const linkKlasse = (href: string) =>
    `rounded px-3 py-2 text-[0.9375rem] font-medium transition-colors ${
      isActive(href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav aria-label="Hoofdmenu" className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-[4.25rem] items-center justify-between gap-4">
        <Link to="/" className="flex-shrink-0" onClick={handleHomeClick}>
          <img src={logo} alt="Hardware Held" width={153} height={40} className="h-9 w-auto md:h-10" />
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
                onFocus={openDropdown}
                onBlur={scheduleClose}
              >
                <Link
                  to={link.href}
                  aria-haspopup="true"
                  aria-expanded={werkwijzeOpen}
                  className={`flex items-center gap-1 ${linkKlasse(link.href)}`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    aria-hidden
                    className={`transition-transform ${werkwijzeOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {werkwijzeOpen && (
                  <div className="absolute left-0 top-full w-64 pt-3">
                    <div className="animate-fade-in overflow-hidden rounded-xl border border-border bg-background shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className={`block px-4 py-3 text-[0.9375rem] transition-colors ${
                            location.pathname === child.href
                              ? "bg-muted font-semibold"
                              : "hover:bg-muted"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} to={link.href} className={linkKlasse(link.href)}>
                {link.label}
              </Link>
            )
          )}

          <Link to="/aanmelden" className="knop knop-oranje ml-3 min-h-[42px]">
            Ophalen aanvragen
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link to="/aanmelden" className="knop knop-oranje min-h-[42px] px-4 text-sm">
            Aanvragen
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded text-foreground"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} aria-hidden /> : <Menu size={26} aria-hidden />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4.25rem)] animate-fade-in overflow-y-auto border-t border-border bg-background lg:hidden">
          <ul className="container py-2">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className="block border-b border-border py-3.5 font-medium last:border-b-0">
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="border-b border-border py-1 pl-4">
                    {link.children
                      .filter((child) => child.href !== link.href)
                      .map((child) => (
                        <li key={child.href}>
                          <Link to={child.href} className="block py-2.5 text-muted-foreground">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
