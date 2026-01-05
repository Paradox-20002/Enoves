import { useState, useEffect } from "react";

export default function TypingEffect({ text, speed = 190 }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    let timeoutId;

    const type = () => {
      index++;
      setDisplayText(text.slice(0, index));

      if (index < text.length) {
        // Higher speed → smaller delay → faster typing
        const delay = Math.max(5, 200 - speed);
        timeoutId = setTimeout(type, delay);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, [text, speed]);

  return (
    <h2 className="text-[12px] italic text-gray-300">
      {displayText}
      <span className="animate-pulse">|</span>
    </h2>
  );
}
