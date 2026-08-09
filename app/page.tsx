import { HeroFrame } from "@/components/HeroFrame";
import { ImageFrame } from "@/components/ImageFrame";
import { TextBlock } from "@/components/TextBlock";
import Image from "next/image";

export default function Home() {
  return (
    <main className="wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden w-full h-auto py-[58px] md:py-[132px]"
      >
        <source src="/video/hero-animation-mobile.mp4" type="video/mp4" />
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block w-full h-auto py-[58px] md:py-[132px]"
      >
        <source src="/video/hero-animation.mp4" type="video/mp4" />
      </video>

      <h1 className="sr-only">Ajax and Courtney</h1>

      <div className="flex justify-center mt-[32px] md:mt-[128px] px-4">
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
        className="w-[198px] md:w-[372px] h-auto mt-[74px] md:mt-[132px] mx-auto"
      >
        <source src="/video/wedding-birds.mp4" type="video/mp4" />
      </video>

      <div className="flex justify-center mt-[96px] md:mt-[238px]">
        <HeroFrame />
      </div>

      <div className="mt-[96px] mb-[48px] md:mt-[236px] md:mb-[137px]">
        <TextBlock
          offset
          heading="How we met"
          body={[
            "Our story began in New York City on a whim, and with a little persistence from our good friend Jennie. She convinced Courtney to make a 40-minute trek across Brooklyn at midnight with her and Kim to meet Ajax, the baby brother of Jennie’s best friend from medical school, Alice.",
            "Courtney reluctantly agreed, having no idea the journey would change her life.",
            "When they arrived, Kim immediately put on YouTube karaoke, and while everyone else launched into “Without Me” by Eminem, Courtney and Ajax struck up a conversation of their own. They wandered over to Ajax’s shelves, admiring his collection of special tchotchkes and talking about the stories behind each one.",
          ]}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:pl-6 md:pr-12 mb-[74px] md:mb-[150px]">
        <Image
          src="/vectors/conversation.webp"
          alt="Courtney and Ajax at Wissahickon Park in Philadelphia"
          width={672}
          height={127}
        />

        <div className="w-[41px] h-[43px] md:w-[81px] md:h-[84px] ml-[26%]">
          <Image
            src="/images/color-fly.png"
            alt="Courtney and Ajax at Wissahickon Park in Philadelphia"
            width={81}
            height={84}
          />
        </div>
      </div>

      <div className="story-order grid grid-cols-1 md:grid-cols-2 gap-y-[74px] md:gap-y-[128px] mb-[148px]">
        <div className="[grid-area:imessage] relative w-[340px] md:w-[461px] md:ml-0">
          <Image
            src="/images/imessage.webp"
            alt="Courtney and Ajax at Wissahickon Park in Philadelphia"
            width={461}
            height={622}
            className="object-contain"
          />
        </div>

        <div className="[grid-area:overnext] text-box">
          <p>
            Over the next eight years, we traveled from Mexico to Scotland to
            Greece, weathered a pandemic, adopted a cat, made three moves,
            including one across state lines, welcomed seven nieces and nephews
            with one more on the way, celebrated eight Christmases, a few
            Passovers, and entered our thirties together. Then, on a beach in
            Point Reyes, California, Ajax asked Courtney to marry him and here
            we are!
          </p>
          <p>
            Then, on a beach in Point Reyes, California, Ajax asked Courtney to
            marry him and here we are!
          </p>
        </div>

        <div className="[grid-area:frame] w-full max-w-[400px] md:ml-auto">
          <ImageFrame
            frameSrc="/images/image-frame-01.png"
            width={2000}
            height={1883}
            video
            videoSrc="/video/ac-shot.mp4"
            alt="Courtney and Ajax"
          />
        </div>

        <p className="[grid-area:nothing] text-box">
          There is nothing we love more than a slow day at home, preparing a big
          meal, opening a bottle of wine, and sharing it all with the people we
          love. We are drawn to places that feel genuine, full of character,
          history, and warmth, which is exactly why Crete feels so special to
          us. We cannot wait to share this beautiful place, this incredible
          food, and plenty of wine with all of you. Cheers, y’all!
        </p>
      </div>

      <p className="hero-text-center mt-[142px] md:mt-[460px] mb-[116] md:mb-[260px]">
        Stay tuned for more information in the next few months!
      </p>
    </main>
  );
}
