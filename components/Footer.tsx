"use client";
import { usePathname } from "next/navigation";

import Image from "next/image";

export default function Footer() {
  const router = usePathname();
  const isFaq = router.includes("faqs");

  return (
    <div className={`${isFaq ? "bg-[#0655BB]" : ""} py-12`}>
      <Image
        src="/vectors/monogram.webp"
        alt="Courtney & Ajax monogram"
        width={119}
        height={166}
        className={`${isFaq ? "invert" : ""} mx-auto max-w-[72px] md:max-w-none`}
      />
    </div>
  );
}
