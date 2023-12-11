

function SideBar() {
  return (
    <div className="sideBar">
        <img src={require("./home.png")}  style={{width:"35px",height:"35px",backgroundColor:"transparent",paddingLeft:"10px",paddingTop:"2em"}} alt="logo" />
      <div className="sideBar__header">
        <h4>Side</h4>
      </div>
      <div className="sideBar__body">
        <p>SideBar</p>
      </div>
    </div>
  );
}

export default SideBar;