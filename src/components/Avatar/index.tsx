import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from '../Image';
import { Link } from '../Link';
import {
  githubLink, instagramLink, twitterLInk, mastodonLink,
} from '../../utils/constants';
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
          <span className="link__content">Instagram</span>
        </Link>

        <Link href={twitterLInk}>
          <span className="link__content">
            <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} />
          </span>
        </Link>

        <Link href={githubLink}>
          <span className="link__content">
            <FontAwesomeIcon size="2x" icon={['fab', 'github']} />
          </span>
        </Link>

        <Link href={mastodonLink}>
          <span className="link__content">
            <FontAwesomeIcon size="2x" icon={['fab', 'mastodon']} />
          </span>
        </Link>
      </div>
    </>
  );
}
