interface TextBlockProps {
  heading: string;
  body: string[];
  offset?: boolean;
}

export const TextBlock = ({
  heading,
  body,
  offset = false,
}: TextBlockProps) => {
  return (
    <div className="flex flex-col gap-6 lg:gap-12">
      <p
        className={
          offset
            ? "text-box-header pl-[12%] md:pl-[19.5%]"
            : "text-box-header-sm"
        }
      >
        {heading}
      </p>
      {body.map((paragraph, index) => (
        <p key={index} className="text-body text-pretty">
          {paragraph}
        </p>
      ))}
    </div>
  );
};
