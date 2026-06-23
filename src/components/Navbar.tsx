import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [werkwijzeOpen, setWerkwijzeOpen] = useState(false);
  const [mobileWerkwijzeOpen, setMobileWerkwijzeOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setWerkwijzeOpen(false);
    setMobileWerkwijzeOpen(false);
  }, [location.pathname, location.hash]);

  const links: NavLink[] = [
    { label: "Home", href: "/" },
    {
      label: "Werkwijze",
      href: "/werkwijze",
      children: [
        { label: "Overzicht", href: "/werkwijze" },
        { label: "Gratis ophalen", href: "/werkwijze/gratis-ophalen" },
        { label: "Datawissing op locatie", href: "/werkwijze/datawissing-op-locatie" },
      ],
    },
    { label: "Over ons", href: "/over-ons" },
    { label: "Wat wij aannemen", href: "/wat-wij-aannemen" },
    { label: "FAQ", href: "/#faq" },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

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
    href === "/"
      ? location.pathname === "/"
      : location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex-shrink-0" onClick={handleHomeClick}>
          <img
            src={logo}
            alt="Hardware Held"
            className="h-10 transition-all duration-300"
          />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
              >
                <Link
                  to={link.href}
                  onClick={handleNavClick}
                  aria-haspopup="true"
                  aria-expanded={werkwijzeOpen}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive(link.href)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${werkwijzeOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                {werkwijzeOpen && (
                  <div
                    className="absolute left-0 top-full pt-2 w-64"
                    onMouseEnter={openDropdown}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="rounded-xl border border-border bg-background shadow-lg overflow-hidden animate-fade-in">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={handleNavClick}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === child.href
                              ? "text-primary bg-primary/5 font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
              <Link
                key={link.label}
                to={link.href}
                onClick={link.href === "/" ? handleHomeClick : handleNavClick}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            to="/contact"
            onClick={handleNavClick}
            className="ml-3 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg"
          >
            Contact
          </Link>
          <Link
            to="/aanmelden"
            onClick={handleNavClick}
            className="ml-1 px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-primary/20"
          >
            Aanmelden
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 animate-fade-in">
          {links.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  type="button"
                  onClick={() => setMobileWerkwijzeOpen((o) => !o)}
                  className="w-full flex items-center justify-between py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  aria-expanded={mobileWerkwijzeOpen}
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileWerkwijzeOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileWerkwijzeOpen && (
                  <div className="pl-4 border-l border-border ml-1 mb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={handleNavClick}
                        className={`block py-2.5 text-sm transition-colors ${
                          location.pathname === child.href
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={link.href === "/" ? handleHomeClick : handleNavClick}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            to="/contact"
            onClick={handleNavClick}
            className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/aanmelden"
            onClick={handleNavClick}
            className="block mt-2 text-center px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg"
          >
            Aanmelden
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
