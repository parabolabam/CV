import { Avatar } from "../Avatar";
import { workplace } from "../../utils/constants";
import { Link } from "../Link";
import "./index.css";

export function Greeting() {
  return (
    <>
      <div className="greeting">
        <span>Hi, I'm Vlad, software engineer.</span>{" "}
        <div className="greeting__avatar">
          <Avatar />
        </div>
      </div>
    </>
  );
}
