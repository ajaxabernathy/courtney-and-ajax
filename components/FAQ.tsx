"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FAQItemData {
  question: string;
  answer: string[];
}

const FAQItem = ({ question, answer }: FAQItemData) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-4 text-left cursor-pointer border-t border-white py-2"
      >
        <span className="text-box-header-sm">{question}</span>
        <span aria-hidden="true" className="text-box-header-sm">
          {isOpen ? "–" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 mt-2">
              {answer.map((paragraph, index) => (
                <p key={index} className="text-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQProps {
  items: FAQItemData[];
}

export const FAQ = ({ items }: FAQProps) => {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item) => (
        <FAQItem key={item.question} {...item} />
      ))}
    </div>
  );
};
