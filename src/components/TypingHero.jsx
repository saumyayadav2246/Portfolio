import { useState, useEffect } from 'react';
import './TypingHero.css';

const PHRASES = ['Saumya Yadav', 'Developer'];
const TYPE_SPEED = 120;
const PAUSE_AFTER_TYPE = 1800;
const DELETE_SPEED = 80;
const PAUSE_AFTER_DELETE = 600;

export default function TypingHero() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentPhrase = PHRASES[phraseIndex];

  useEffect(() => {
    if (isPaused) return;

    const timeout = isDeleting
      ? setTimeout(() => {
          if (displayText.length === 0) {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(false);
              setPhraseIndex((i) => (i + 1) % PHRASES.length);
            }, PAUSE_AFTER_DELETE);
          } else {
            setDisplayText(currentPhrase.slice(0, displayText.length - 1));
          }
        }, DELETE_SPEED)
      : setTimeout(() => {
          if (displayText.length === currentPhrase.length) {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, PAUSE_AFTER_TYPE);
          } else {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          }
        }, TYPE_SPEED);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, currentPhrase, phraseIndex]);

  return (
    <h1 className="hero-title" aria-label={currentPhrase}>
      <span className="hero-text">{displayText}</span>
      <span className="cursor" aria-hidden>|</span>
    </h1>
  );
}
