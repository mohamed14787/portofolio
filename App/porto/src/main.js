import React from 'react';



function Main() {
    const customFont = {
       
        fontSize: '60px',

        color: "white",
        margin:"0px",
        
        padding:"0px"
    };

    return (
        <div className="photo">
            <div style={{margin:"0px"}}>
                <h1 style={{color:"white",margin:"0px",padding:"0px"}}>Hello, my name is</h1>
            </div>

            <div style={{margin:"0px"}}>
                <p style={customFont}>Mohamed Elshaarawy</p>
            </div>
            <div style={{margin:"0px",padding:"0px"}}>
            <p style={{color:"orange",fontSize:"50px",margin:"0px",padding:"0px"}}>Full-Stack Developer</p>

            </div>
            <div style={{margin:"0px",padding:"0px"}}>
            <p  style={{color:"white",fontSize:"18px",width:"40%"}}>As a full-stack engineer, I bring websites and applications to life, making sure they look good and work smoothly. Think of me as the digital architect who not only writes code but also narrates the story of how it all comes together. Join me on a journey through the tech world, where every line of code has a tale to tell. Explore my portfolio and see firsthand how I turn ideas into interactive experiences. Let's make technology simple and engaging together!</p>
        </div>
        <div>
                <button className="cv">Download CV</button>
        
            </div>
            

          
        </div>
    );
}

export default Main