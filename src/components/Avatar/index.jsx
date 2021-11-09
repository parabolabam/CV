import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '../Image';
import { Link } from '../Link';
import { githubLink, instagramLink, twitterLInk } from '../../utils/constants';
import './index.css';

export function Avatar() {
  return (
    <>
      <Link href={githubLink}>
        <div className="avatar">
          <Image
            regularSource="https://avatars.githubusercontent.com/u/30412774?v=4"
            alt="profile image of Vladislav Sorokin"
          />
        </div>
      </Link>

      <div className="avatar__social-media">
        <Link href={instagramLink}>
          <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} />
        </Link>

        <Link href={twitterLInk}>
          <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} />
        </Link>

        <Link href={githubLink}>
          <FontAwesomeIcon size="2x" icon={['fab', 'github']} />
        </Link>
      </div>
    </>
  );
}
