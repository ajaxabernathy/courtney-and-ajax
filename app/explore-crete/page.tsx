import { ExploreGrid, type ExploreCardData } from "@/components/ExploreGrid";
import { TextBlock } from "@/components/TextBlock";
import Image from "next/image";

const exploreItems: ExploreCardData[] = [
  {
    title: "Balos Lagoon",
    tag: "Beaches",
    body: [
      "This place was our absolute favorite and we can’t wait to go back. Stay tuned on whether we’ll coordinate a hang here, but either way, it’s worth the trip. The drive is rocky and not for the faint of heart, so we recommend an SUV. Keep in mind, from there, it’s a bit of a hike—with goats!",
      "You can also take a boat from Kissamos, which we recommend for most guests. Prepare to swim in the shallow, beautiful lagoon.",
    ],
    image: {
      src: "/images/balos.webp",
      alt: "Balos Lagoon",
      width: 1280,
      height: 789,
    },
  },
  {
    title: "Falasarna Beach",
    tag: "Beaches",
    body: [
      "We learned from the locals that this beach is known as Crete’s best sunset. It’s huge and there are plenty of vendors and beach chairs to rent. We recommend parking near the north end to find some more intimate portions of the beach between rocky alcoves.",
    ],
  },
  {
    title: "Elafonissi",
    tag: "Beaches",
    body: [
      "We didn’t make it here but got a taste of some of the scenic drive south to Elafonissi. It’s known for pale-pink sand, clear shallow water and a lagoon that you can wade across. Leave early and treat it as a full-day trip from the Kissamos area.",
    ],
  },
  {
    title: "Topolia Gorge",
    tag: "Sites",
    body: [
      "Stop at dramatic Topolia Gorge while driving toward Elafonissi. This is a beautiful drive on it’s own but if you’re feeling adventurous you can park, do a short hike and reach the bottom for a freezing cold (but amazing) swim into the gorge cavern. We did it!",
    ],
  },
  {
    title: "Agia Sofia Cave",
    tag: "Sites",
    body: [
      "Then climb the steps to Agia Sofia Cave. Inside, you will find a small chapel surrounded by impressive rock formations.",
    ],
  },
  {
    title: "Potolo Winery",
    tag: "Food & Drink",
    body: [
      "A lovely local winery worth a stop for a tasting — details to come once we lock in our own visit.",
    ],
  },
];

export default function ExploreCrete() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col wrapper">
        <h1 className="hero-text">Explore Crete</h1>
        <div>
          <TextBlock
            body={[
              "WE CAME TO CRETE looking for rest and found much more than we expected. From the moment we landed, our nervous systems softened, our pace slowed, and Crete began to feel like exactly where we were meant to be. We fell in love with the balance of it all — good food and untamed landscapes, restful days and unexpected adventures, awe-inspiring gorges, secret caves and the scent of herbs warmed by the sun.",
              "Most of all, we fell in love with the SPIRIT OF CRETE and the warmth of its people. It means so much to return to a place that feels so right and to experience it with the people we love most. We hope this journey offers each of you a sense of DISCOVERY, BEAUTY, AND CONNECTION — and memories that stay with us long after we leave.",
            ]}
          />
        </div>

        <div className="ml-auto md:-mr-[8%] md:pr-8 mt-[34px] md:mt-[74px]">
          <Image
            src="/images/crete-sheep.webp"
            alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
            width={916}
            height={600}
          />
        </div>

        <div className="mt-[32px] md:-mt-[32px]">
          <Image
            src="/vectors/we-hope.webp"
            alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
            width={917}
            height={377}
            className="hidden md:block"
          />

          <Image
            src="/vectors/we-hope-mobile.png"
            alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
            width={946}
            height={600}
            className="md:hidden ml-auto"
          />
        </div>

        <div className="mt-[0px] md:mt-[0px]">
          <Image
            src="/images/balos.webp"
            alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
            width={1280}
            height={789}
          />
        </div>

        <div className="mt-[4px] md:mt-[140px]">
          <Image
            src="/vectors/fish-lockup-desktop.webp"
            alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
            width={1092}
            height={234}
            className="hidden md:block ml-auto"
          />

          <Image
            src="/vectors/fish-lockup-mobile.webp"
            alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
            width={361}
            height={169}
            className="md:hidden mx-auto"
          />
        </div>

        <h2 className="hero-text pt-[40px]">Things we loved</h2>
      </div>

      <div className="mt-[32px] md:mt-[74px] mb-[187px] md:mb-[390px]">
        <ExploreGrid items={exploreItems} />
      </div>

      <p className="hero-text-center mb-[116] md:mb-[260px] wrapper">
        Click{" "}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        for our google map with all of the above and more.
      </p>
    </main>
  );
}
