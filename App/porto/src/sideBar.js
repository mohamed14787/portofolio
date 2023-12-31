import { MdOutlineVolunteerActivism } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

function SideBar() {
  return (
    <div className="sideBar">
      <PiCertificateBold
        style={{
          color: "white",
          paddingTop: "4em",
          width: "35px",
          height: "35px",
        }}
      />
      <SiGmail
        style={{
          color: "white",
          paddingTop: "1.5em",
          width: "25px",
          height: "35px",
          paddingLeft: "0.4em",
        }}
      />
      <CiLinkedin
        style={{
          color: "white",
          paddingTop: "1.5em",
          width: "35px",
          height: "35px",
        }}
      />
      <FaGithub
        style={{
          color: "white",
          paddingTop: "1.5em",
          width: "35px",
          height: "35px",
        }}
      />
      <SiLeetcode
        style={{
          color: "white",
          paddingTop: "1.5em",
          width: "35px",
          height: "35px",
        }}
      />

      <MdOutlineVolunteerActivism
        style={{
          color: "white",
          paddingTop: "2em",
          width: "35px",
          height: "35px",
        }}
      />
    </div>
  );
}

export default SideBar;
