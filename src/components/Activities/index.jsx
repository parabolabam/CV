import React, {Suspense, lazy} from 'react';
import PropTypes from 'prop-types';
import { Link } from '../Link';
import { Loading }from '../Loader';
import { lineateWebSiteLink, epamWebSiteLink, githubLink, twitterLInk, telegramLink  } from '../../utils/constants';

import './index.css';

const Heading = lazy(() => import('../Heading'));
const Epam = lazy(() => import('../../Experience/EpamProjects'));
const Lineate = lazy(() => import('../../Experience/LineateProjects'))

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

export default function Activities() {
  return (
    <Suspense fallback={<Loading />}>
      <ActivitySection
        link={lineateWebSiteLink}
        linkText="Lineate Team Member"
        shortDescription="Occupied software engineer position"
      >
        <Lineate />
      </ActivitySection>

      <ActivitySection
        link={epamWebSiteLink}
        linkText="Epam Team Member"
        shortDescription="Occupied senior software engineer position"
      >
        <Epam />
      </ActivitySection>

       <ActivitySection
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
        link={telegramLink}
        linkText="Telegram"
        shortDescription="Here you can contact me quickly and easily"
      /> 
    </Suspense>
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
