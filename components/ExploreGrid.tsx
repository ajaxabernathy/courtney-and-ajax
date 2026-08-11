"use client";

import Image from "next/image";
import { useState } from "react";

export const CATEGORIES = [
  "Beaches",
  "Food & Drink",
  "History",
  "Sites",
] as const;
export type Category = (typeof CATEGORIES)[number];

export interface ExploreCardData {
  title: string;
  tag: Category;
  body: string[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface ExploreGridProps {
  items: ExploreCardData[];
}

export const ExploreGrid = ({ items }: ExploreGridProps) => {
  const [activeTags, setActiveTags] = useState<Category[]>([]);

  const toggleTag = (tag: Category) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const visibleItems =
    activeTags.length === 0
      ? items
      : items.filter((item) => activeTags.includes(item.tag));

  return (
    <div className="px-[10px] md:px-12">
      <div className="flex flex-wrap gap-x-2 font-cousine uppercase text-[14px] tracking-[8%] -mb-[30px]">
        <span>Filter by:</span>
        {CATEGORIES.map((category, index) => (
          <span key={category} className="flex gap-2">
            <button
              type="button"
              onClick={() => toggleTag(category)}
              aria-pressed={activeTags.includes(category)}
              className={`cursor-pointer uppercase ${
                activeTags.includes(category) ? "underline" : ""
              }`}
            >
              {category}
            </button>
            {index < CATEGORIES.length - 1 && <span>|</span>}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-[72px]">
        {visibleItems.map((item) => (
          <ExploreCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

const ExploreCard = ({ title, tag, body, image }: ExploreCardData) => {
  return (
    <div className="border-t border-ac-black pt-2">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-body">{title}</h3>
        <span className="font-cousine uppercase text-[12px] tracking-[8%] shrink-0">
          {tag}
        </span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {body.map((paragraph, index) => (
          <p key={index} className="text-body text-justify">
            {paragraph}
          </p>
        ))}
      </div>

      {image && (
        <div className="relative w-full aspect-[4/3] mt-6">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};
