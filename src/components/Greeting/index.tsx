
import { Avatar } from '../Avatar';
import './index.css';

export default function Greeting() {
  return (
    <>
      <div className="greeting">
        <span>Hi, I&apos;m Vlad, software engineer.</span>
        {' '}
        <div className="greeting__avatar">
          <Avatar />
        </div>
      </div>
    </>
  );
}
