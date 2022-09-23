import "./LandingPage.css";
import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    const buttons = document.querySelectorAll("span.btn");
    const cursor = document.getElementById("cursor");
    const pointer = document.getElementById("pointer");

    const animateit = function (e) {
      pointer.style.backgroundColor = `#383838`;
      pointer.style.filter = `drop-shadow(0 0 3px #f0f0f0)`;

      if (e.type === "mouseout") {
        pointer.style.backgroundColor = `#f0f0f0`;
        pointer.style.filter = ``;
      }
    };

    buttons.forEach((b) => b.addEventListener("mousemove", animateit));
    buttons.forEach((b) => b.addEventListener("mouseout", animateit));

    const editCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      pointer.style.left = x + "px";
      pointer.style.top = y + "px";
      pointer.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const editCursorOut = (e) => {
      const { clientX: x, clientY: y } = e;
      if (
        x <= 0 ||
        y <= 0 ||
        x >= window.innerWidth ||
        y >= window.innerHeight
      ) {
        cursor.style.transform = "translate(-50%, -50%) scale(0)";
        pointer.style.transform = "translate(-50%, -50%) scale(0)";
      }
    };

    window.addEventListener("mousemove", editCursor);
    window.addEventListener("mouseout", editCursorOut);
  }, []);

  return (
    <>
      <div className="bg">
        <div className="bgImg">
          <div id="cursor" className="cursor" />
          <div id="pointer" className="pointer" />

          <div className="lighter" />
          <div className="lighter2" />
          <div className="lighter3" />

          <span className="btn">Call</span>
        </div>
        <h1 className="title">EMILIANO APARICIO</h1>
        <h2 className="subtitle">Full Stack Web Developer</h2>
      </div>
    </>
  );
}
