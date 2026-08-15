import { HeroFrame } from "@/components/HeroFrame";
import { ImageFrame } from "@/components/ImageFrame";
import { ImageGrid } from "@/components/ImageGrid";
import { TextBlock } from "@/components/TextBlock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="wrapper">
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          width={1000}
          height={562}
          className="md:hidden w-full h-auto"
        >
          <source src="/video/hero-animation-mobile.mp4" type="video/mp4" />
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          width={2500}
          height={1406}
          className="hidden md:block w-full h-auto pt-[84px]"
        >
          <source src="/video/hero-animation.mp4" type="video/mp4" />
        </video>

        <h1 className="sr-only">Ajax and Courtney</h1>
      </div>

      <div className="flex justify-center mt-[104px] md:mt-[231px] px-4">
        <Image
          src="/vectors/please-join-us.webp"
          alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
          width={660}
          height={316}
        />
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[198px] md:w-[372px] h-auto mt-[42px] md:mt-[140px] mx-auto"
      >
        <source src="/video/wedding-birds.mp4" type="video/mp4" />
      </video>

      <div className="flex justify-center mt-[74px] md:mt-[232px]">
        <HeroFrame />
      </div>

      <div className="mt-[94px] md:mt-[236px]">
        <TextBlock
          heading="How it began"
          body={[
            "Our story began in New York City on a whim, with a little persistence from our good friend Jennie. One night, while visiting, she convinced Courtney and Kim to make a 40-minute trek across Brooklyn at midnight to meet Ajax, her best friend, Alice’s, little brother. Courtney reluctantly agreed, having no idea the journey would change her life.",
            "When they arrived, Kim immediately put on YouTube karaoke, and before long everyone was singing “Without Me” by Eminem. Courtney and Ajax, however, struck up a conversation of their own. They wandered over to Ajax’s room, where Courtney admired his collection of special tchotchkes, and the two started talking about the stories behind each one. As the night came to an end, Jennie insisted that Courtney and Ajax exchange phone numbers. Thank you, J!",
          ]}
        />
      </div>

      <div className="flex md:flex-row flex-col-reverse gap-[57px] mt-[74px] md:mt-[120px]">
        <div className="w-full md:w-[461px]">
          <Image
            src="/images/imessage.webp"
            alt="Screenshot of Courtney and Ajax's first iMessage conversation"
            width={461}
            height={622}
            className="object-contain mx-auto pr-16 md:pr-12"
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-0 md:pt-[100px] lg:pt-[140px]">
          <Image
            src="/vectors/conversation.webp"
            alt="The conversation never ended, the rest is history"
            width={672}
            height={127}
          />

          <div className="w-[41px] h-[43px] md:w-[81px] md:h-[84px] ml-[26%]">
            <Image src="/images/color-fly.png" alt="" width={81} height={84} />
          </div>
        </div>
      </div>

      <div className="mt-[74px] md:mt-[98px]">
        <TextBlock
          body={[
            "After a few months of missed connections and persistent invites to Ajax’s shows, they finally went on their first date, getting cocktails at a cool Williamsburg bar, Donna. Courtney remembers nervously getting ready with Annie in their shared apartment while Ajax arrived early to sample the menu in search of a cocktail to recommend. The two were smitten after this hangout, but had a torturous month apart when Ajax went on tour with his band. Somehow that single night held us over for that entire month and when Ajax returned, they reunited at his show.",
            "Over the next eight years, we traveled from Mexico to Scotland to Greece, weathered a pandemic, adopted a cat, made three moves, including one across state lines, welcomed seven nieces and nephews with one more on the way, celebrated eight Christmases, a few Passovers, and entered our thirties together. Then, on a beach in Point Reyes, California, Ajax asked Courtney to marry him and here we are!",
          ]}
        />
      </div>

      <div className="mt-[74px] md:mt-[203px]">
        <TextBlock
          heading="Why Gramvousa?"
          body={[
            "When we travel, we’re drawn to places with character, history, and warmth, which is exactly why Crete really stuck with us after we left. Gramvousa Restaurant embodied everything we loved about the island, so much so that we ate there twice.",
            "When we told one of our favorite staff members at our hotel that we had been, he offered us to go back with him and see the property through his eyes. After a Raki-filled lunch, he walked us around, picking herbs for us to smell and pointing out all these fun herbs and variations of things we had never heard of. Then we noticed a few event tables outside and thought, huh... people must have parties here.",
            "We didn’t think much more of it until we floated the idea of getting married there to our families, and their excitement made the decision feel easy. So... here we are. Wish us luck!",
          ]}
        />
      </div>

      <div className="mt-[74px] md:mt-[64px]">
        <ImageGrid
          topImage={{
            src: "/images/gram-3.webp",
            alt: "Terracotta pottery and cushions on a table at Gramvousa Restaurant, overlooking the mountains",
          }}
          bottomLeftImage={{
            src: "/images/gram-1.webp",
            alt: "A couple walking through the gardens at Gramvousa Restaurant",
          }}
          bottomRightImage={{
            src: "/images/gram-2.webp",
            alt: "A man seated at an outdoor table at Gramvousa Restaurant, surrounded by flowers",
          }}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-[64px] md:gap-12 mb-[90px] mt-[125px] md:mt-[164px]">
        <p className="text-body max-w-[432px]">
          We cannot wait to share this beautiful place, this incredible food,
          and plenty of wine with all of you. Cheers!{" "}
        </p>

        <div className="w-full max-w-[562px] md:ml-auto">
          <ImageFrame
            frameSrc="/images/image-frame-01.png"
            width={2000}
            height={1883}
            video
            videoSrc="/video/ac-shot.mp4"
            alt="Courtney and Ajax"
          />
        </div>
      </div>
    </main>
  );
}
