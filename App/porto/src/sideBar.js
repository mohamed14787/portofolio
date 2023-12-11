
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";




function SideBar() {
  return (
    <div className="sideBar">
       
        <PiCertificateBold   style={{color:"white",paddingTop:"1em",width:"35px",height:"35px"}} />
        <CiLinkedin style={{color:"white",paddingTop:"1em",width:"35px",height:"35px"}}  />
        <FaGithub style={{color:"white",paddingTop:"1em",width:"35px",height:"35px"}} />
        <MdOutlineVolunteerActivism  style={{color:"white",paddingTop:"1em",width:"35px",height:"35px"}}/>

        <SiGmail  style={{color:"white",paddingTop:"1em",width:"25px",height:"35px",paddingLeft:"0.4em"}} />




   
    </div>
  );
}

export default SideBar;