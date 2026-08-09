import Image from "next/image";

interface ImageFrameProps {
  frameSrc: string;
  width: number;
  height: number;
  alt: string;
  imageSrc?: string;
  videoSrc?: string;
  video?: boolean;
}

export const ImageFrame = ({
  frameSrc,
  width,
  height,
  alt,
  imageSrc,
  videoSrc,
  video = false,
}: ImageFrameProps) => {
  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 size-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image src={imageSrc!} alt={alt} fill className="object-cover" />
      )}
      <Image
        src={frameSrc}
        alt=""
        fill
        className="object-cover pointer-events-none"
      />
    </div>
  );
};
