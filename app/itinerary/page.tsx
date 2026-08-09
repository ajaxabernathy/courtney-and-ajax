import type { Metadata } from "next";
import { TextBlock } from "@/components/TextBlock";

export const metadata: Metadata = {
  title: "Itinerary",
  description:
    "The wedding weekend schedule for Courtney and Ajax, including the welcome party and the May 29th celebration in Crete.",
};

export default function Itinerary() {
  return (
    <main className="wrapper flex flex-col flex-1">
      <h1 className="hero-text">Itinerary</h1>
      <div>
        <TextBlock
          body={[
            "We’re still putting the finishing touches on the wedding weekend, but we recommend arriving by Wednesday so you have some time to settle in, acclimate, and enjoy Crete before the festivities begin.",

            "We’re planning a welcome party on Friday, May 28th, ahead of the wedding, with the ceremony and celebration taking place on Saturday, May 29th. We’ll also share details for any optional hangs throughout the weekend. Think beach days and casual meetups. Stay tuned for the full itinerary! ✨",
          ]}
        />
      </div>
    </main>
  );
}
