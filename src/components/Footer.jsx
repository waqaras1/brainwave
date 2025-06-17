import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { personalConfig } from "../config/personal";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div className="text-center sm:text-left">
          <p className="caption text-n-4 lg:block">
            {personalConfig.footer.copyright}
          </p>
          <p className="caption text-n-4 text-xs mt-1">
            {personalConfig.footer.tagline}
          </p>
        </div>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
