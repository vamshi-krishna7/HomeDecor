import React from 'react';
import {Button} from 'react-bootstrap';

const Banner = () => {
return (
    <div style={{backgroundImage: "url('./AAA/Final/background.jpg')", height: '95vh', backgroundPosition:'top center', backgroundSize: 'cover', position: 'relative'}}>
        <div style={{
            position: "absolute",
            left: "20%",
            top: "70%",
            zIndex: "1",
            transform: "translate(-20%, -70%)",
            width: "95%"
          }}>
            <h1 className="banner-heading-1" style={{color: 'black'}}>Soulful handcrafted goods by <span>HomeDecor.</span></h1>

            <Button className="btn btn-secondary py-2 px-3 my-1 text-dark" style={{letterSpacing: '3px'}}>KNOW MORE</Button>
        </div>
    </div>
)
}

export default Banner;

 //             <h1 className="banner-heading-2"></h1>
            