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
            className="md:hidden"
          />
        </div>

        <div className="mt-[74px] md:mt-[96px] mb-[74px] md:mb-[96px]">
          <TextBlock
            heading="Where to Stay"
            body={[
              "We hope most guests will be based in or around Kissamos, where wedding-day shuttles will depart. We’ll be staying with our families nearby in Kounoupitsa, just south of town.",

              "We recommend <a href='https://sapphiresuites.gr/' target='__blank'>Sapphire Suites</a>, two neighboring hotels in Kissamos. The rooms are comfortable and include helpful amenities like a kitchenette.",

              "We’ll share more information about shuttle buses soon, but we’re hoping to keep everyone fairly central around this area, as it will likely be the main pickup point. Feel free to explore other hotels or rentals nearby if something else catches your eye!",

              "Another lovely option is <a href='https://www.kaliviani.com/' target='__blank'>Kaliviani Traditional Hotel</a>, a small hotel within walking distance of Gramvousa, for anyone looking for something a little quieter and more tucked away.",

              "Falasarna and Kavousi are also great options if you plan to arrange your own transportation. Falasarna is closer to the venue and known for its incredible sunsets, while Kavousi offers a quieter village stay nearby. ",
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
