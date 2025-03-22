import { useState, useEffect } from "react";

export const Typewriter = ({
  text,
  display,
  typingSpeed = 100,
  deletingSpeed = 70,
  delay = 1500,
  initialDelay = 1000, // Add initial delay as a prop
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false); // Track if typing effect has started

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasStarted(true); // Start after initial delay
    }, initialDelay);

    return () => clearTimeout(timeout);
  }, [display, initialDelay]);

  useEffect(() => {
    if (!hasStarted) return; // Wait until the initial delay is over
    if (!display) setIsDeleting(true);

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => text.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === text) {
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setHasStarted(false);
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
    text,
    typingSpeed,
    deletingSpeed,
    delay,
    hasStarted,
    display,
  ]);

  useEffect(() => {
    const cursorBlink = setInterval(
      () => setCursorVisible((prev) => !prev),
      500
    );
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span className="link-name">
      {displayedText}
      <span className="cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>
        |
      </span>
    </span>
  );
};
