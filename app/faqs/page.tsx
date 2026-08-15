import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { TextBlock } from "@/components/TextBlock";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about travel, accommodations, RSVPs, and attire for Courtney and Ajax's wedding in Crete.",
};

const faqItems = [
  {
    question: "When should we arrive?",
    answer: [
      "We recommend arriving by Wednesday, May 26, so you have time to settle in before the wedding festivities begin.",
    ],
  },
  {
    question: "Where should we stay?",
    answer: [
      "Please visit our Travel & Stay page for our recommended hotels, villas, and vacation rentals.",
    ],
  },
  {
    question: "Should we book now?",
    answer: [
      "Yes! Accommodations can fill up quickly, especially during the summer travel season, so we encourage you to reserve your hotel or rental as early as possible.",
    ],
  },
  {
    question: "When will we receive the formal invitation?",
    answer: [
      "This website serves as our formal invitation. Stay tuned as we continue to add details, including the full itinerary and attire guidance.",
    ],
  },
  {
    question: "Can we RSVP now?",
    answer: [
      "Soon! RSVPs will be open in the coming weeks. We’ll keep everyone in the loop.",
    ],
  },
  {
    question: "Registry & Gifts",
    answer: [
      "Your presence with us in Greece means more than we can say, and celebrating together is truly the best gift we could receive. We’re incredibly grateful to everyone making the journey to be there. If you would still like to give a gift, we’ll be creating a registry in the coming months.",
    ],
  },
  {
    question: "Do I need a passport?",
    answer: [
      "Yes! All U.S. guests will need a valid passport to travel to Greece. Your passport must remain valid for at least three months after your planned departure from Greece, although renewing earlier is always a good idea.",
    ],
  },
  {
    question: "Are there any other international travel requirements?",
    answer: [
      "U.S. passport holders do not currently need a visa for a short vacation in Greece. However, a new online travel authorization called ETIAS is expected to be required by the time of our wedding. ETIAS is not a visa—it is a simple authorization that travelers will apply for online before departing for Europe.",
      "The exact launch date has not yet been announced, so we will update this page with instructions and the official application link closer to the wedding. Please do not apply through unofficial websites.",
    ],
  },
  {
    question: "How do I get to Crete?",
    answer: [
      "Crete has two major airports: Chania International Airport (CHQ) and Heraklion International Airport (HER).",
      "Chania is located on the western side of the island and is the closest airport to the wedding venue, making it the most convenient option for most guests. Heraklion is more centrally located and is approximately a 2–2½-hour drive from the Chania area, depending on traffic and your final destination. It can be a great starting point if you’d like to explore more of Crete before making your way toward the wedding.",
      "Most guests traveling from the United States will likely connect through Athens before continuing to Crete. Seasonal nonstop flights may also be available from several European cities, including London and Prague. Flight schedules vary, so it may be worth considering a European stopover before heading to the wedding!",
    ],
  },
  {
    question: "What should I wear?",
    answer: [
      "We’re still finalizing the itinerary and ceremony details, but please keep in mind that the celebration will take place at a farm-to-table restaurant, with dinner served outdoors on the farm. We recommend comfortable shoes and light, summery attire. Think summer dresses, breathable fabrics, and shoes suitable for walking on grass or uneven ground.",
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#0655BB] text-white">
      <div className="wrapper">
        <TextBlock offset hero heading="FAQs" />

        <div className="mt-[116px] mb-[137px] text-white">
          <FAQ items={faqItems} />
        </div>
      </div>
    </main>
  );
}
