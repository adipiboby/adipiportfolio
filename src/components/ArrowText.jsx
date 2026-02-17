import React, { useEffect, useState } from "react";

export default function ArrowText() {
const words = ["Software Engineer", "Programmer", "Web Developer"];
const [course, setCourse] = useState("");
const [wordIndex, setWordIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentWord = words[wordIndex];
  let timer;

  if (!isDeleting && charIndex < currentWord.length) {
    // typing
    timer = setTimeout(() => {
      setCourse(currentWord.slice(0, charIndex + 1));
      setCharIndex(prev => prev + 1);
    }, 150);
  } 
  else if (isDeleting && charIndex > 0) {
    // deleting
    timer = setTimeout(() => {
      setCourse(currentWord.slice(0, charIndex - 1));
      setCharIndex(prev => prev - 1);
    }, 100);
  } 
  else if (!isDeleting && charIndex === currentWord.length) {
    // pause before deleting
    timer = setTimeout(() => {
      setIsDeleting(true);
    }, 200);
  } 
  else if (isDeleting && charIndex === 0) {
    // move to next word
    setIsDeleting(false);
    setWordIndex(prev => (prev + 1) % words.length);
  }

  return () => clearTimeout(timer);
}, [charIndex, isDeleting, wordIndex, words]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (charIndex < words[wordIndex].length) {
  //       setCourse(prev => prev + words[wordIndex][charIndex]);
  //       setCharIndex(prev => prev + 1);
  //     } else {
  //       // wait then move to next word
  //       setTimeout(() => {
  //         setCourse("");
  //         setCharIndex(0);
  //         setWordIndex(prev => (prev + 1) % words.length);
  //       }, 1000);
  //     }
  //   }, 150);

  //   return () => clearInterval(interval);
  // }, [charIndex, wordIndex]);

  return (
    <>
     
      <div id="course">
        
      <h1 id="title">
  I'm a{" "}
  <span className="typing">{course}</span>
</h1>
      </div>

      <div id="aboutmygoaldiv">
        <div id="aboutmygoal">
          <h3>
            I am a motivated and versatile individual, always eager to take on
            new challenges. With a passion for learning I am dedicated to
            delivering high-quality results. With a positive attitude and a
            growth mindset, I am ready to make a meaningful contribution and
            achieve great things.
          </h3>

          <div id="checkresumediv">
            <h2>Check Resume</h2>
          </div>
        </div>
      </div>
    </>
  );
}
