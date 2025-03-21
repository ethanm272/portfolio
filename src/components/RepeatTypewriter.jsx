import { useState, useEffect } from "react";

export const RepeatTypewriter = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1500,
  initialDelay = 2000, // Add initial delay as a prop
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false); // Track if typing effect has started

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true); // Start after initial delay
    }, initialDelay);

    return () => clearTimeout(timeout);
  }, [initialDelay]);

  useEffect(() => {
    if (!hasStarted) return; // Wait until the initial delay is over

    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delay,
    hasStarted,
  ]);

  useEffect(() => {
    const cursorBlink = setInterval(
      () => setCursorVisible((prev) => !prev),
      500
    );
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span className="repeat-typewriter">
      {displayedText}
      <span
        className="orange-cursor"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      >
        |
      </span>
    </span>
  );
};
