import Image from "next/image";

export default function Footer() {
  return (
    <div className="wrapper pb-12">
      <Image
        src="/vectors/monogram.webp"
        alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
        width={119}
        height={166}
        className="mx-auto"
      />
    </div>
  );
}
