import { ImageFrame } from "@/components/ImageFrame";
import Image from "next/image";

export default function Home() {
  return (
    <main className="wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto py-[132px]"
      >
        <source src="/video/hero-animation.mp4" type="video/mp4" />
      </video>

      <div className="flex justify-center mt-[128px]">
        <Image
          src="/vectors/home-please-join-us.webp"
          alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
          width={660}
          height={440}
        />
      </div>

      <div className="flex justify-center mt-[132px]">
        <Image
          src="/vectors/birds.webp"
          alt="Please join us for our wedding celebration at Gramvousa Restaurant, May 29th, with our family and friends, in Crete, Greece."
          width={322}
          height={224}
        />
      </div>

      <div className="flex justify-center mt-[238px]">
        <Image
          src="/images/wissahickon-comp.webp"
          alt="Courtney and Ajax at Wissahickon Park in Philadelphia"
          width={1090}
          height={727}
          className="-mr-[76px]"
        />
      </div>

      <div className="text-box mt-[236px] mb-[137px]">
        <p className="text-box-header pl-[250px]">How we met</p>
        <p>
          Our story began in New York City on a whim, and with a little
          persistence from our good friend Jennie. She convinced Courtney to
          make a 40-minute trek across Brooklyn at midnight with her and Kim to
          meet Ajax, the baby brother of Jennie’s best friend from medical
          school, Alice.
        </p>

        <p>
          Courtney reluctantly agreed, having no idea the journey would change
          her life.
        </p>
        <p>
          When they arrived, Kim immediately put on YouTube karaoke, and while
          everyone else launched into “Without Me” by Eminem, Courtney and Ajax
          struck up a conversation of their own. They wandered over to Ajax’s
          shelves, admiring his collection of special tchotchkes and talking
          about the stories behind each one.
        </p>
      </div>
    </main>
  );
}
