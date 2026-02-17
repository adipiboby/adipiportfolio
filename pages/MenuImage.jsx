import "./MenuImage.css";

export default function MenuImage({ goTo }) {
  return (
    <div className="mobile-menu">
      <p onClick={() => goTo("home")}>HOME</p>
      <p onClick={() => goTo("experience")}>PROJECTS</p>
      <p onClick={() => goTo("education")}>EDUCATION</p>
      <p onClick={() => goTo("contact")}>ABOUT</p>
    </div>
  );
}
