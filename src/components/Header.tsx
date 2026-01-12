import { Shield, Menu, X, ChevronRight, Phone, User } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { NavLinks } from "./NavLinks";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about-us", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-primary"
      )}
    >
      <div className="w-full lg:container-width px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:justify-evenly h-20">
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="tel:+1234567890"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ",
                isScrolled
                  ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                  : "text-primary-foreground/70 hover:bg-primary-foreground/10"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className=" xl:inline">+1 (234) 567-890</span>
            </a>
          </div>
          {/* Logo */}
          <NavLinks to="/" className="flex items-center gap-3 group">
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105 ",
                isScrolled
                  ? "text-muted-foreground hover:text-foreground "
                  : "text-primary-foreground/80 hover:text-primary-foreground "
              )}
            >
              <img
                src={logo}
                alt="NESICO Logo"
                className="  rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-xl font-bold tracking-tight transition-colors",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                NESICO
              </span>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-widest -mt-1 transition-colors",
                  isScrolled
                    ? "text-muted-foreground"
                    : "text-primary-foreground/70"
                )}
              >
                Insurance
              </span>
            </div>
          </NavLinks>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLinks
                key={item.to}
                to={item.to}
                end={item.end}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                )}
                activeClassName={cn(
                  "font-semibold",
                  isScrolled
                    ? "text-primary bg-primary/10"
                    : "text-primary-foreground bg-primary-foreground/15"
                )}
              >
                {item.label}
              </NavLinks>
            ))}

            <div className="flex items-center gap-2">
              <button
                className={cn(
                  "hidden lg:flex p-2.5 rounded-full transition-all duration-300  cursor-pointer",
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-primary-foreground/70 hover:bg-primary-foreground/10"
                )}
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <NavLinks
                to="/contact"
                className="hidden sm:flex px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 items-center gap-2 group bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105"
              >
                Get Quote
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </NavLinks>

              {/* Mobile Menu Button */}
            </div>
          </nav>

          <button
            className={cn(
              "lg:hidden p-3 rounded-xl transition-all duration-300",
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-out",
            isMenuOpen ? "max-h-96 opacity-100 pb-6 " : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-2 pt-4">
            {navItems.map((item, index) => (
              <NavLinks
                key={item.to}
                to={item.to}
                end={item.end}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                  isScrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                )}
                activeClassName={cn(
                  isScrolled
                    ? "bg-primary/10 text-primary"
                    : "bg-primary-foreground/15 text-primary-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </NavLinks>
            ))}

            <div
              className={cn(
                "flex flex-col gap-1 my-2 py-1 border-t",
                isScrolled ? "border-border/50" : "border-primary-foreground/20"
              )}
            >
              <a
                href="tel:+1234567890"
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-primary-foreground/70 hover:bg-primary-foreground/10"
                )}
              >
                <Phone className="w-5 h-5" />
                +1 (234) 567-890
              </a>
              <NavLinks
                to="/contact-us"
                className={cn(
                  "mt-2 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2",
                  isScrolled
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary-foreground text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
                <ChevronRight className="w-5 h-5" />
              </NavLinks>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
