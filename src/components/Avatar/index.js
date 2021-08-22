import { Image } from "../Image";
import { Link } from "../Link";
import { githubLink } from "../../utils/constants";

import "./index.css";

export function Avatar() {
  return (
    <Link href={githubLink}>
      <div className="avatar">
        <Image
          regularSource="https://avatars.githubusercontent.com/u/30412774?v=4"
          alt="profile image of Vladislav Sorokin"
        />
      </div>
    </Link>
  );
}
