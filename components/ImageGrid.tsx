import Image from "next/image";

interface ImageGridProps {
  topImage: { src: string; alt: string };
  bottomLeftImage: { src: string; alt: string };
  bottomRightImage: { src: string; alt: string };
}

export const ImageGrid = ({
  topImage,
  bottomLeftImage,
  bottomRightImage,
}: ImageGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative w-full aspect-[5/3] md:col-span-2">
        <Image
          src={topImage.src}
          alt={topImage.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-full aspect-[7/8]">
        <Image
          src={bottomLeftImage.src}
          alt={bottomLeftImage.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-full aspect-[7/8]">
        <Image
          src={bottomRightImage.src}
          alt={bottomRightImage.alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
