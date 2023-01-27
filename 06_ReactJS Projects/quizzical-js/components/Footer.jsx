import React from "react";

export default function Footer({ children }) {
  return (
    <>
      {children}
      <div className=" py-3 text-center">
        <p>
          Coded by:{" "}
          <a
            href="https://github.com/kushagrasarathe"
            className=" underline font-semibold"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            Kushagra Sarathe
          </a>
        </p>
      </div>
    </>
  );
}
