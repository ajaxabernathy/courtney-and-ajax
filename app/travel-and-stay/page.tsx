import Image from "next/image";
import { TextBlock } from "@/components/TextBlock";

export default function TravelAndStay() {
  return (
    <main className="wrapper">
      <h1 className="hero-text">Travel & Stay</h1>

      <div className="flex justify-center mt-[116px]">
        <Image
          src="/vectors/wedding-map-crete.jpg"
          alt="Travel and Stay"
          width={1114}
          height={380}
        />
      </div>

      <div className="mt-[236px] mb-[137px]">
        <TextBlock
          heading="How to get there"
          body={[
            "Many guests will begin their journey in Athens, where we hope you can spend a day or two wandering the streets, enjoying the food, and soaking in the city before heading to Crete. From Athens, Chania is about a one-hour flight and is the easiest airport for reaching western Crete. For a slower and more scenic route, you can also take the overnight ferry from Piraeus to Souda Port, which takes approximately 7 to 9.5 hours.",
            "Chania Airport is about a one-hour drive from Gramvousa Restaurant and around 50 minutes from Kissamos, where we are hoping most guests will stay for the wedding weekend. Depending on where you are traveling from, you may also find seasonal direct flights to Chania from other European cities, so it is worth checking before booking. Heraklion is another option, though it is about a two-and-a-half-hour drive from the Kissamos area.",
            "Crete is such a special place, and we would love for you to experience more of it while you are here. Consider staying a few extra days to drive along the coast, explore the island’s villages and beaches, and enjoy plenty of incredible food. Start on the west end where the wedding is and make your way east or start east and meet us on the west.",
          ]}
        />
      </div>

      <div className="mt-[96px] mb-[137px]">
        <TextBlock
          heading="How to get around"
          body={[
            "The best way to explore Crete is by car, so we strongly recommend renting one for your stay. You can pick up a rental car in Chania, including at the airport, and we suggest booking in advance, especially during the busy summer season.",
            "Having a car will give you the freedom to explore the island’s beaches, villages, and coastal roads at your own pace. On the wedding day, we will provide shuttles between Kissamos and Gramvousa Restaurant, so you can leave the driving to us and enjoy the celebration.",
          ]}
        />
      </div>

      <div>
        <Image
          src="/vectors/wedding-map.jpg"
          alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
          width={1113}
          height={677}
        />
      </div>

      <div className="mt-[96px] mb-[137px]">
        <TextBlock
          heading="Where to Stay"
          body={[
            "We recommend staying in or around Kissamos, where we hope most guests will be based for the wedding weekend and where wedding-day shuttles will depart. We will be staying with our families in villas in Kounoupitsa, just south of Kissamos, overlooking the town.",
            "There are plenty of fun and affordable villas and Airbnbs in the area, as well as our room block at [Hotel Name]. If you prefer to arrange your own transportation on the wedding day, Falasarna and Kavousi are also lovely options. Falasarna is closer to the venue and known for its incredible sunsets, while Kavousi offers a quieter village stay nearby.",
          ]}
        />
      </div>
    </main>
  );
}
