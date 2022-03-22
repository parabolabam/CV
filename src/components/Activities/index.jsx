import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../Link';
import { LineateProjects } from '../../Experience/LineateProjects';
import { EpamProjects } from '../../Experience/EpamProjects';

import { Heading } from '../Heading';
import { lineateWebSiteLink } from '../../utils/constants';

import './index.css';

function ActivitySection({
  link,
  linkText,
  shortDescription,
  children = null,
}) {
  return (
    <section className="activity">
      <Heading level={2}>
        <Link href={link} showIcon>
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
        link={lineateWebSiteLink}
        linkText="Epam Team Member"
        shortDescription="Occupied senior software engineer position"
      >
        <EpamProjects />
      </ActivitySection>

      {/* <ActivitySection
        link={githubLink}
        linkText="Github"
        shortDescription="Yet there is no projects I've created but code examples might be found
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
      /> */}
    </>
  );
}

ActivitySection.propTypes = {
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
