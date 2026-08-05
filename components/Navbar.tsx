export const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Itinerary", href: "/itinerary" },
    { name: "Travel & Stay", href: "/travel-stay" },
    { name: "Explore Crete", href: "/explore-crete" },
    { name: "Attire", href: "/attire" },
    { name: "FAQs", href: "/faqs" },
    { name: "RSVP", href: "/rsvp" },
    { name: "Registry", href: "/registry" },
  ];

  return (
    <nav className="max-w-[1065px] w-full mx-auto">
      <ul className="h-[51px] flex items-center justify-between text-ac-black">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="uppercase text-arial-narrow text-[16px] tracking-[9%]"
          >
            <a href={link.href} className="">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
