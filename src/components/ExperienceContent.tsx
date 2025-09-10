import React from "react";

const InstagramLogo = require("../assets/logos/InstagramLogo.png");

type Props = {
  text?: string;
  logo?: string;
  alt?: string;
};

export default function ExperienceContent({ text, logo, alt }: Props) {
  const defaultText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat fermentum diam, sit amet vulputate nisl sodales a. Proin tristique fringilla neque, at pretium lorem convallis nec. Praesent vitae eros ac augue feugiat viverra at nec lacus.";

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <img
        src={logo ?? InstagramLogo}
        alt={alt ?? "Company Logo"}
        className="w-48 md:w-64 h-auto mb-6 object-contain max-w-full"
      />
      <p className="max-w-2xl text-[#a2aabc] text-lg leading-relaxed">
        {text ?? defaultText}
      </p>
    </section>
  );
}
