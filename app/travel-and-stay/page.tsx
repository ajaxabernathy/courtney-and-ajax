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
        <TextBlock hero offset heading="Travel & Stay" />

        <div className="flex justify-center mt-[54px] md:mt-[137px]">
          <div className="hidden md:block">
            <Image
              src="/vectors/wedding-map-crete.webp"
              alt="Map of Crete showing Kissamos, Chania, and Heraklion"
              width={1114}
              height={380}
            />
          </div>

          <div className="md:hidden">
            <Image
              src="/vectors/wedding-map-crete-mobile.webp"
              alt="Map of Crete showing Kissamos, Chania, and Heraklion"
              width={800}
              height={456}
            />
          </div>
        </div>

        <div className="mt-4 md:mt-[100px]">
          <TextBlock
            heading="How to get there"
            body={[
              "Our wedding weekend will be based in Kissamos, on the west end of Crete. Many guests will likely start in Athens, and we hope you can spend a day or two exploring the city before heading to Crete. From Athens, both Chania and Heraklion are about a one-hour flight, but you may also find seasonal direct flights from other European cities if you’re looking to work in a fun stopover. If you prefer a slower, more scenic route, you can also take the overnight ferry from Piraeus, Athens’ port, to Chania.",

              "For the wedding weekend, Chania is the easiest option. It’s about a 50-minute drive from Kissamos. Heraklion is another option, but it’s about a 2.5-hour drive from the Kissamos area. ",
            ]}
          />
        </div>

        <div className="mt-[48px] md:mt-[74px]">
          <Image
            src="/vectors/wedding-map-westerncrete.jpg"
            alt="Illustrated map showing driving times from Gramvousa Restaurant to Falasarna, Kavousi, Kissamos, and Chania"
            width={1113}
            height={677}
            className="hidden md:block"
          />

          <Image
            src="/vectors/wedding-map-westerncrete-m.jpg"
            alt="Illustrated map showing driving times from Gramvousa Restaurant to Falasarna, Kavousi, Kissamos, and Chania"
            width={364}
            height={304}
            className="md:hidden w-full"
          />
        </div>

        <div className="mt-[74px] md:mt-[96px] mb-[74px] md:mb-[96px]">
          <TextBlock
            heading="Where to Stay"
            body={[
              "We recommend staying in or around Kissamos, close to Gramvousa Restaurant and within easy reach of the wedding festivities.",

              "We’ll be staying with our families just south of Kissamos, and we hope many of our guests will stay nearby so we can keep shuttle service as centralized as possible. We’ve identified three beachfront hotels close to one another that would make this especially easy: <a href='https://www.molosbayhotel.gr/' target='_blank' rel='noopener noreferrer'>Molos Bay Hotel</a>, <a href='https://elenabeach.gr/en/home/' target='_blank' rel='noopener noreferrer'>Elena Beach Hotel</a>, and <a href='https://salhotel.gr/' target='_blank' rel='noopener noreferrer'>Sal Hotel</a>, which is just a six-minute drive west.",

              "There are plenty of other hotels and villas in the area, but staying at one of these three, or within walking distance of them, will make wedding transportation much easier.",

              "For those who prefer to be within walking distance of the restaurant, <a href='https://www.kaliviani.com/' target='_blank' rel='noopener noreferrer'>Kaliviani Traditional Hotel</a> is a great option. Or if you prefer a different area and to arrange your own transport, Falasarna is known for its beautiful beaches and sunsets, while Kavousi offers a quieter village stay. Both have plenty of Airbnb and villas available.",

              "Since it’s currently the busy season in Crete, hotel responses may be a little slower. Next year’s availability may not be posted yet, so we recommend reaching out directly if you don’t see availability online.",

              "While we hope most guests will stay near Kissamos to help create a central location for shuttle service, we completely understand that this is your vacation too! Please stay wherever makes the most sense for your trip, and keep us posted on where you’ll be. We’ll do our best to accommodate shuttle transportation accordingly.",
            ]}
          />
        </div>
      </div>

      <div className="mt-[57px] md:mt-[78px] mb-[52px] md:mb-[137px] wrapper">
        <TextBlock
          heading="Transportation"
          body={[
            "The best way to explore Crete is by car, so we recommend renting one in Chania or Heraklion and booking in advance. On the wedding day, shuttles will be provided between Kissamos and Gramvousa Restaurant, so you can leave the driving to us.",
          ]}
        />
      </div>

      <div className="relative aspect-[16/9] max-w-[1920px] mx-auto mb-[74px] md:mb-[148px]">
        <Image
          src="/images/sheep.webp"
          alt="A sheep grazing in a field overlooking the sea in Crete"
          fill
        />
      </div>
    </main>
  );
}
