import { ExploreGrid, type ExploreCardData } from "@/components/ExploreGrid";
import { TextBlock } from "@/components/TextBlock";
import Image from "next/image";

const exploreItems: ExploreCardData[] = [
  {
    title: "Balos Lagoon",
    tag: "Beaches",
    body: [
      "This place was our absolute favorite and we can’t wait to go back. Stay tuned on whether we’ll coordinate a hang here, but either way, it’s worth the trip. The drive is rocky and not for the faint of heart, so we recommend taking it slow. Keep in mind it’s a bit of a hike from the parking lot—with goats!",
      "You can also take a boat from Kissamos, which we recommend for most guests. Prepare to swim in the shallow, beautiful lagoon.",
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-7.webp",
      alt: "Balos Lagoon",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Falasarna Beach",
    tag: "Beaches",
    body: [
      "We learned from the locals that this beach is known for Crete’s best sunsets. It’s huge and there are plenty of vendors and beach chairs to rent. Park near the north end to find some more intimate spots on the beach between rocky alcoves.",
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-6.webp",
      alt: "Falasarna Beach",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Chania",
    tag: "History",
    body: [
      "Once a Minoan settlement, Chania is now western Crete's largest city. The old town's Venetian quarter is a maze of narrow lanes and alleys that connect at a beautiful historic harbor. Venetian and Turkish architecture abound. It is lively and well worth exploring.",
      [
        "Make time for ",
        {
          text: "Etz Hayyim,",
          href: "https://www.wmf.org/projects/etz-hayim-synagogue",
        },
        " a beautifully restored 15th century synagogue tucked into the old Jewish quarter. Ajax's mom worked on the preservation effort that helped restore and protect the site–a peaceful stop in the middle of the old town.",
      ],
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-12.webp",
      alt: "Chania",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Topolia Gorge",
    tag: "Sites",
    body: [
      "Stop at dramatic Topolia Gorge while driving toward Elafonissi. This is a beautiful drive on its own but if you’re feeling adventurous you can park, do a short hike and reach the bottom for a freezing cold (but amazing) swim into a gorge cavern surrounded by waterfalls. We did it!",
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-8.webp",
      alt: "Topolia Gorge",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Agia Sofia Cave",
    tag: "Sites",
    body: [
      "This is an ancient chapel cave south of Kissamos, near Topolia Gorge. It was a fun, quick stop for very beautiful cave formations and a little bit of history.",
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-9.webp",
      alt: "Agia Sofia Cave",
      width: 433,
      height: 304,
    },
  },
  {
    title: "PoTolo Winery",
    tag: "Food & Drink",
    body: [
      [
        "We really loved our wine tasting at ",
        { text: "PoTolo", href: "https://potolo.gr/" },
        ". It’s a newer winery that crafts low-intervention wines, started by Athens locals who moved here during the pandemic. Our favorite was the Romeiko, a varietal indigenous to Western Crete. There’s also ",
        {
          text: "Manousakis Winery",
          href: "https://www.manousakiswinery.com/",
        },
        ", which we didn’t try—a bigger property to check out about 40 minutes east of Kissamos.",
      ],
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-10.webp",
      alt: "PoTolo Winery",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Falasarna Honey",
    tag: "Food & Drink",
    body: [
      [
        "There are a ton of little farm stands around Western Crete. ",
        {
          text: "This one",
          href: "https://www.google.com/maps/place/Falasarna+Honey+and+natural+products/@35.4843268,23.5821446,2975m/data=!3m1!1e3!4m7!3m6!1s0x149cf100275cc649:0xb3653972801d09fd!8m2!3d35.4866901!4d23.588892!15sCgVob25leVoHIgVob25leZIBBGZhcm2aAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjE0TTFGc1RrVlhWMlI1V2xSYWNWUkZTVEJsVnpsUVVqSlNTMWRHUlJBQuABAPoBBAgAEEg!16s%2Fg%2F11w7bw46n5",
        },
        " was suggested by our hotel and it didn’t disappoint. The local honey and olive tapenade were SO good, grab it while you can.",
      ],
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7.webp",
      alt: "Falasarna Honey",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Elafonissi",
    tag: "Beaches",
    body: [
      "We didn’t make it here but got a taste of some of the scenic drive south to Elafonissi. It’s known for pale-pink sand, clear shallow water and a lagoon that you can wade across. Leave early and treat it as a full-day trip from the Kissamos area.",
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-13.webp",
      alt: "Elafonissi",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Margarites Village",
    tag: "Sites",
    body: [
      [
        "More in central Crete close to Rethymno, this is a traditional mountain settlement famous for its pottery. We ventured over there towards the end of our trip, specifically to check out ",
        {
          text: "Kerameion Pottery Workshop",
          href: "https://keramion.gr/",
        },
        ", since we’d seen their pieces at our hotel. We brought home a few special pieces, but the town had lots of vendors to check out.",
      ],
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-1.webp",
      alt: "Margarites Village",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Preveli Beach",
    tag: "Beaches",
    body: [
      "A river that flows through a gorge and empties out into the sea, with a dense palm forest on either side. It’s not an easy hike down by any means, but you can wade through the river once you make it. Bring water and sturdy shoes.",
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-2.webp",
      alt: "Preveli Beach",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Paralia Ammoudi",
    tag: "Beaches",
    body: [
      [
        "This was ",
        {
          text: "our favorite place",
          href: "https://maps.app.goo.gl/JnDeWzy2cd1W37n1A?g_st=i&utm_campaign=ac-im",
        },
        ". The south side of Crete features beaches that are much more private. This one we discovered had the most amazing taverna steps from the sand. More on this next (see ",
        {
          text: "Chyma Sto Kyma",
          href: "https://www.google.com/maps/place/Chyma+Sto+Kyma/@35.1709849,24.4162288,17z/data=!3m1!4b1!4m6!3m5!1s0x149b6f6d91b12e7f:0x7e955819a8801e6d!8m2!3d35.170985!4d24.4210997!16s%2Fg%2F11gmvw6xzk",
        },
        ")",
      ],
      "The sea depth dropped just offshore and made for great snorkeling around the rocks.",
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-3.webp",
      alt: "Ammoudi Beach",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Chyma Sto Kyma",
    tag: "Food & Drink",
    body: [
      [
        "The taverna at Ammoudi Beach! Find it ",
        {
          text: "here",
          href: "https://www.google.com/maps/place/Chyma+Sto+Kyma/@35.1709849,24.4162288,17z/data=!3m1!4b1!4m6!3m5!1s0x149b6f6d91b12e7f:0x7e955819a8801e6d!8m2!3d35.170985!4d24.4210997!16s%2Fg%2F11gmvw6xzk",
        },
        ". Have the souvlaki and Cretan salad under a canopy of low trees with views of the sea. This place was great, great, great.",
      ],
      "Enjoy complimentary dessert and, as always, plenty of Raki.",
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-5.webp",
      alt: "Chyma Sto Kyma",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Colombo Restaurant",
    tag: "Food & Drink",
    body: [
      [
        "We were lucky to happen upon ",
        { text: "Colombo", href: "https://colombo-chania.gr/" },
        " for lunch while exploring Chania. Seating is spread outside the restaurant, into the narrow alley where it’s positioned. It had a quintessential old town vibe and the food was incredible–their Cretan salad still makes our stomachs grumble.",
      ],
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-11.webp",
      alt: "Colombo Restaurant",
      width: 433,
      height: 304,
    },
  },
  {
    title: "Tella Thera",
    tag: "Sites",
    body: [
      "This design hotel completely blew us away. Every detail was just perfect. The property has a quiet, peaceful feel as the architecture blends into the mountainside, olive trees, and flowering flora. We ate at the restaurant more than once, and the Black Olive Negroni was our favorite cocktail of the trip, maybe ever. Get the Black Olive Negroni!",
      "If you're staying nearby or just passing through, it's worth stopping in for a drink or dinner.",
    ],
    image: {
      src: "/images/locations/IMG_5750 2 7-4.webp",
      alt: "Tella Thera",
      width: 433,
      height: 304,
    },
  },
];

export default function ExploreCrete() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col wrapper">
        <div>
          <TextBlock
            offset
            hero
            heading="Explore Crete"
            body={[
              "We came to Crete looking for a little rest and ended up falling for the whole place. The pace slowed, the food was incredible, and every day seemed to come with some combination of beautiful beaches, winding roads, hidden caves, mountain views, and herbs warming in the sun.",

              "What stayed with us most, though, was the warmth of the people and the feeling of the island itself. Crete felt easy, generous, and full of character. We’re so excited to come back and share it with the people we love most, and we hope you leave with a few favorite places, a few good stories, and memories that stay with us long after we leave.",
            ]}
          />
        </div>

        <div className="ml-auto md:-mr-[8%] md:pr-8 mt-[34px] md:mt-[96px]">
          <Image
            src="/images/courtney-sheep.webp"
            alt="Courtney crouching beside a goat on a rocky hillside in Crete"
            width={916}
            height={600}
          />
        </div>

        <div className="mt-[32px] md:-mt-[32px]">
          <Image
            src="/vectors/we-hope.png"
            alt="We hope you taste the thyme honey, smell the wild sage, watch the bees, and breeze through the herbs"
            width={917}
            height={377}
            className="hidden md:block"
          />

          <Image
            src="/vectors/we-hope-mobile.png"
            alt="We hope you taste the thyme honey, smell the wild sage, watch the bees, and breeze through the herbs"
            width={946}
            height={600}
            className="md:hidden ml-auto"
          />
        </div>

        <div className="mt-[0px] md:-mt-[32px]">
          <Image
            src="/images/champers-m.webp"
            alt="A man popping a bottle of champagne at sunset, and a rocky beach along Crete's coastline"
            width={1280}
            height={789}
            className="md:hidden"
          />
          <Image
            src="/images/champers.webp"
            alt="A man popping a bottle of champagne at sunset, and a rocky beach along Crete's coastline"
            width={1280}
            height={789}
            className="hidden md:block"
          />
        </div>

        <div className="mt-[48px] md:mt-[140px]">
          <Image
            src="/vectors/fish-lockup-desktop.webp"
            alt="Illustration of a fish and drumsticks with text reading “Follow the wind, wander a little, find a beach & make it yours”"
            width={1137}
            height={234}
            className="hidden md:block"
          />

          <Image
            src="/vectors/fish-lockup-mobile.webp"
            alt="Illustration of a fish and drumsticks with text reading “Follow the wind, wander a little, find a beach & make it yours”"
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
          href="https://maps.app.goo.gl/FwAkpKzuPNZuwbvx7"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        for our Google map with all of the above and more.
      </p>
    </main>
  );
}
