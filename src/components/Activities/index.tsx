import { Link } from '../Link';
import Loading from '../Loader';
import { lineateWebSiteLink, epamWebSiteLink } from '../../utils/constants';
import { Suspense, lazy } from 'react';
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
    </Suspense>
  )
}

