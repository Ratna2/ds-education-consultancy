"use client";

export default function AnimatedHeading({
  text,
  highlight,
}: {
  text: string;
  highlight?: string;
}) {
  const words = text.split(" ");

  return (
    <h2 className="text-4xl font-extrabold text-center mb-16">
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-2 opacity-0 animate-wordReveal"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          {word}
        </span>
      ))}

      {highlight && (
        <span className="block mt-2 text-indigo-400 opacity-0 animate-wordReveal">
          {highlight}
        </span>
      )}
    </h2>
  );
}
