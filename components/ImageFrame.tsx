import Image from "next/image";

type FlowerType = "flowers-1";

const flowerConfig: Record<
  FlowerType,
  { src: string; width: number; height: number; className: string }
> = {
  "flowers-1": {
    src: "/vectors/flowers-1.webp",
    width: 353,
    height: 408,
    className: "absolute bottom-0 -right-[76px] h-auto",
  },
};

interface ImageFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  flowerType: FlowerType;
}

export const ImageFrame = ({
  src,
  alt,
  width,
  height,
  flowerType,
}: ImageFrameProps) => {
  const flower = flowerConfig[flowerType];
  const flowerWidthPercent = (flower.width / width) * 100;

  return (
    <div className="max-w-[1280px] flex justify-center relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
      <Image
        src={flower.src}
        alt=""
        width={flower.width}
        height={flower.height}
        className={flower.className}
        style={{ width: `${flowerWidthPercent}%` }}
      />
    </div>
  );
};
