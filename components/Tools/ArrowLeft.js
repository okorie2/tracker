import React from "react";

export default function ArrowLeft() {
  return (
    <div>
      <svg
        width="71"
        height="71"
        viewBox="0 0 81 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="carouselsvg"
      >
        <circle
          cx="36.5"
          cy="36.5"
          r="35.5"
          stroke="#8574EB"
          strokeWidth="2"
          className="arr-circle"
          fill="none"
        />
        <path
          d="M49.1389 35.1641H28.3509L37.4329 26.1598C38.1587 25.4402 38.1587 24.2593 37.4329 23.5397C36.707 22.8201 35.5346 22.8201 34.8088 23.5397L22.5444 35.6992C21.8185 36.4188 21.8185 37.5812 22.5444 38.3008L34.8088 50.4603C35.5346 51.1799 36.707 51.1799 37.4329 50.4603C38.1587 49.7407 38.1587 48.5782 37.4329 47.8586L28.3509 38.8544H49.1389C50.1625 38.8544 51 38.0241 51 37.0092C51 35.9944 50.1625 35.1641 49.1389 35.1641Z"
          fill="#8574EB"
          className="arr"
        />
      </svg>{" "}
    </div>
  );
}
