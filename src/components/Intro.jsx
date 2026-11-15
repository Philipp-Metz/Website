import "../styles/Intro.css";
import { useState, useEffect } from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import AsciiPortrait from "./AsciiPortrait";

const fullText = "Hi, Philipp here.";
const highlightWord = "Philipp";
const highlightStart = fullText.indexOf(highlightWord);
const highlightEnd =
  highlightStart !== -1 ? highlightStart + highlightWord.length : 0;

function getInitialIndex() {
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return fullText.length;
  }
  return 0;
}

function Intro() {
  const [index, setIndex] = useState(getInitialIndex);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 25);
      return () => clearTimeout(timer);
    }
  }, [index]);

  const visibleText = fullText.slice(0, index);
  const beforeHighlight =
    highlightStart !== -1 ? visibleText.slice(0, highlightStart) : visibleText;
  const highlightedText =
    highlightStart !== -1
      ? visibleText.slice(highlightStart, highlightEnd)
      : "";
  const afterHighlight =
    highlightStart !== -1 ? visibleText.slice(highlightEnd) : "";

  return (
    <section id="home" className="intro">
      <div className="intro-ascii">
        <AsciiPortrait />
      </div>
      <div className="intro-content">
        <h1 className="intro-title" aria-label={fullText}>
          <span aria-hidden="true">
            {beforeHighlight}
            <span className="intro-name">{highlightedText}</span>
            {afterHighlight}
          </span>
          <span className="intro-cursor" aria-hidden="true">
            |
          </span>
        </h1>
        <div className="intro-text">
          <p>
            Dual Computer Science Student near Frankfurt. I help companies
            digitalize their Document Management during the day and waste my
            time on side projects or studies at night.
          </p>
        </div>
        <a href="mailto:hello@philipp-metz.com" className="intro-button">
          <BsEnvelopeFill size={18} /> Say Hello
        </a>
      </div>
    </section>
  );
}

export default Intro;
