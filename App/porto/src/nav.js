import { FaLocationDot } from "react-icons/fa6";



function Nav () {
  return (
    <nav >
        <div>

        <img src={require("./p3.png")}  style={{paddingRight:" 40%",paddingTop:"0.7em",width:"35px",height:"45px",backgroundColor:"transparent",paddingBottom:"0px"}} alt="logo" />
        </div>
    
     {/* <div className="left__section">

     </div> */}
     <div className="right__section">
        <div >

        <h4 style={{color:"black",paddingRight:"1em"}}>+201023117754</h4>
        </div>

        <div>

<FaLocationDot style={{paddingTop:"1.5em"}} />
</div>

        <div >
         

<h4 style={{color:"black",paddingRight:"1em"}}>Egypt</h4>

</div>

        
    </div>
    </nav>
  )
}

export default Nav