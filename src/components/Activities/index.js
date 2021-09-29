import React from "react";
import { Link } from "../Link";
import { LineateProjects } from "../LineateProjects";
import { Heading } from "../Heading";
import {
  lineateWebSiteLink,
  githubLink,
  twitterLInk,
  instagramLink,
  telegramLink,
} from "../../utils/constants";

import "./index.css";

function ActivitySection({ link, linkText, shortDescription, children }) {
  return (
    <section className="activity">
      <Heading level={2}>
        <Link href={link}>
          <span className="activity__link-text">{linkText}</span>
        </Link>
      </Heading>
      <p className="activity__short-description">{shortDescription}</p>
      {children}
    </section>
  );
}

export function Activities() {
  return (
    <>
      <ActivitySection
        link={lineateWebSiteLink}
        linkText="Lineate Team Member"
        shortDescription="Occupied software engineer position"
      >
        <LineateProjects />
      </ActivitySection>

      <ActivitySection
        link={githubLink}
        linkText="Github"
        shortDescription=" Yet there is no projects I've created but code examples might be found
        here"
      />
      <ActivitySection
        link={twitterLInk}
        linkText="Twitter"
        shortDescription="Share my thoughts and experience mostly here"
      />
      <ActivitySection
        link={instagramLink}
        linkText="Instagram"
        shortDescription="Simple life of open person"
      />
      <ActivitySection
        link={telegramLink}
        linkText="Telegram"
        shortDescription="Here you can contact me quickly and easily"
      />
    </>
  );
}
