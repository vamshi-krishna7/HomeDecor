import React from 'react';


const Banner = () => {
return (
    <div style={{backgroundImage: "url('./AAA/Final/background.jpg')", height: '95vh', backgroundPosition:'top center', backgroundSize: 'cover', position: 'relative'}}>
        <div style={{
            position: "absolute",
            left: "20%",
            top: "80%",
            zIndex: "1",
            transform: "translate(-20%, -80%)",
            width: "95%"
          }}>
            <h1 className="banner-heading-1" style={{color: 'black'}}>Soulful handcrafted goods from around the <span>GLOBE.</span></h1>
           
        </div>
    </div>
)
}

export default Banner;

 // <h1 className="banner-heading-2" style={{color: 'black'}}></h1>