import React from 'react';



function Main() {
    const customFont = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '60px',
        fontStyle: 'italic',
        color: "white"
    };

    return (
        <div className="photo">
            <div>
                <h4 style={{color:"white"}}>Hello, my name is</h4>
            </div>

            <div>
                <p style={customFont}>Mohamed Elshaarawy</p>
            </div>
            <div>
            <p style={{color:"orange",fontSize:"30px"}}>I'm a full stack developer</p>

            </div>
            <div>
                <button className="cv">Download CV</button>
        
            </div>
            

          
        </div>
    );
}

export default Main