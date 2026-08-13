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
        alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
        width={119}
        height={166}
        className={`${isFaq ? "invert" : ""} mx-auto`}
      />
    </div>
  );
}
