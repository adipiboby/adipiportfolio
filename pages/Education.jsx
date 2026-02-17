import React from "react";
import "../src/components/Education.css";
import logoswce from "../assert/logo-swce.png";
import srichaitanys from "../assert/srichaitanys.jpg";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Education() {
  const [ref, show] = useScrollAnimation();

  return (
    <div className={`Educationmaindiv animate ${show ? "show" : ""}`} ref={ref}>
      <h1 id="educationheading">Education</h1>
      <h3 id="educationintro">
        My education has been a journey of self-discovery and growth.
      </h3>

      <div className="educationdetailsdiv">
        <div className={`educationdiv animate ${show ? "show" : ""}`}>
          <img src={logoswce} alt="college" />
          <div id="educationSummarydiv">
            <h1>Study World College of Engineering, Coimbatore</h1>
            <h3>Bachelor of Technology (B.Tech)</h3>
            <h4>Grade: 7.66</h4>
          </div>
        </div>

        <div className={`educationdiv animate ${show ? "show" : ""}`}>
          <img src={srichaitanys} alt="intermediate" />
          <div id="educationSummarydiv">
            <h1>Sri Chaitanya Intermediate College</h1>
            <h3>Intermediate</h3>
            <h4>Grade: 6.66</h4>
          </div>
        </div>

        <div className={`educationdiv animate ${show ? "show" : ""}`}>
          <img src={srichaitanys} alt="school" />
          <div id="educationSummarydiv">
            <h1>Sri Chaitanya School</h1>
            <h3>School</h3>
            <h4>Grade: 8.88</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
