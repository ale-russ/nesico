import { Shield, Menu, X, ChevronRight } from "lucide-react";
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
          : "bg-transparent"
      )}
    >
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLinks to="/" className="flex items-center gap-3 group">
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105",
                isScrolled
                  ? "bg-primary shadow-md"
                  : "bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              )}
            >
              {/* <Shield
                className={cn(
                  "w-7 h-7 transition-colors",
                  isScrolled
                    ? "text-primary-foreground"
                    : "text-primary-foreground"
                )}
              /> */}
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
          <nav className="hidden md:flex items-center gap-1">
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

            {/* CTA Button */}
            <NavLinks
              to="/contact-us"
              className={cn(
                "ml-4 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 group",
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg"
                  : "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              )}
            >
              Get Quote
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </NavLinks>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-3 rounded-xl transition-all duration-300",
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
            "md:hidden overflow-hidden transition-all duration-500 ease-out",
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
