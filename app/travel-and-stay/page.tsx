import type { Metadata } from "next";
import Image from "next/image";
import { TextBlock } from "@/components/TextBlock";

export const metadata: Metadata = {
  title: "Travel & Stay",
  description:
    "How to get to Crete and where to stay for Courtney and Ajax's wedding weekend.",
};

export default function TravelAndStay() {
  return (
    <main>
      <div className="wrapper">
        <h1 className="hero-text">Travel & Stay</h1>

        <div className="flex justify-center mt-[116px]">
          <Image
            src="/vectors/wedding-map-crete.webp"
            alt="Travel and Stay"
            width={1114}
            height={380}
          />
        </div>

        <div className="mt-[236px] mb-[137px]">
          <TextBlock
            heading="How to get there"
            body={[
              "Many guests will likely start in Athens, and we hope you can spend a day or two exploring the city before heading to Crete. From Athens, both Chania and Heraklion are about a one-hour flight, but you may also find seasonal direct flights from other European cities if you’re looking to work in a fun stopover. If you prefer a slower, more scenic route, you can also take the overnight ferry from Piraeus, Athens’ port, to Chania.",
              "For the wedding weekend, Chania is the easiest option. It’s about a 50-minute drive from Kissamos, where we hope most guests will stay. Heraklion is another option, but it’s about a 2.5-hour drive from the Kissamos area.",
            ]}
          />
        </div>

        <div>
          <Image
            src="/vectors/wedding-map.webp"
            alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
            width={1113}
            height={677}
          />
        </div>

        <div className="mt-[96px] mb-[137px]">
          <TextBlock
            heading="Where to Stay"
            body={[
              "We recommend staying in or around Kissamos, where we hope most guests will be based and where wedding-day shuttles will depart. We’ll be staying nearby with our families in Kounoupitsa, just south of town. There are plenty of villas and Airbnbs in the area, as well as our room block at Kissamos Hotel. There’s also a hotel, Kaliviani Traditional Hotel, right near the restaurant if you prefer to be walking distance. ",
              "Falasarna and Kavousi are also great options if you plan to arrange your own transportation.  Falasarna is closer to the venue and known for its incredible sunsets, while Kavousi offers a quieter village stay nearby. ",
            ]}
          />
        </div>
      </div>

      <div className="relative aspect-[16/9] max-w-[1920px] mx-auto">
        <Image
          src="/images/sheep.webp"
          alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
          fill
        />
      </div>

      <div className="mt-[96px] mb-[137px] wrapper">
        <TextBlock
          heading="Transportation"
          body={[
            "The best way to explore Crete is by car, so we recommend renting one in Chania or Heraklion and booking in advance. On the wedding day, shuttles will be provided between Kissamos and Gramvousa Restaurant, so you can leave the driving to us.",
          ]}
        />
      </div>
    </main>
  );
}
