"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const fadeVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" as const },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" as const },
  },
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Itinerary", href: "/itinerary" },
    { name: "Travel & Stay", href: "/travel-and-stay" },
    { name: "Explore Crete", href: "/explore-crete" },
    { name: "Attire", href: "/attire" },
    { name: "FAQs", href: "/faqs" },
    { name: "RSVP", href: "/rsvp" },
    { name: "Registry", href: "/registry" },
  ];

  useEffect(() => {
    if (!isMenuOpen) return;

    const openButton = openButtonRef.current;

    closeButtonRef.current?.focus();

    const otherBodyChildren = Array.from(document.body.children).filter(
      (el) => el !== navRef.current,
    );
    otherBodyChildren.forEach((el) => el.setAttribute("inert", ""));

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      otherBodyChildren.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      openButton?.focus();
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="relative md:max-w-[1065px] w-full mx-auto uppercase font-arial-narrow text-[16px] tracking-[9%] px-5"
    >
      <div className="h-[51px] flex items-center">
        <button
          ref={openButtonRef}
          className="ml-auto lg:hidden uppercase cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          + Menu
        </button>

        {/* Desktop Navigation  */}
        <ul className="text-ac-black hidden lg:flex items-center justify-between h-full w-full">
          {navLinks.map((link) => (
            <li key={link.name} className="">
              <a
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute inset-0 bg-black h-screen z-10 px-5"
          >
            <div className="w-full h-[51px] flex">
              <button
                ref={closeButtonRef}
                className="uppercase cursor-pointer text-white ml-auto"
                onClick={() => setIsMenuOpen(false)}
              >
                – Close
              </button>
            </div>

            <ul className="flex flex-col gap-15 mt-[32] text-white items-center h-full w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="">
                  <a
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
