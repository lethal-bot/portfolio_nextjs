import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "" },
  { icons: <FaLinkedinIn />, path: "" },
  { icons: <FaInstagram />, path: "" },
  { icons: <FaFacebook />, path: "" },
];
function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
