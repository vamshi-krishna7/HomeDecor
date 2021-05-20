import React from 'react';
import {Container} from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h1 className="text-center">About</h1>
            <ul>
                <li>An interactive E-commerce application that allows users to shop Home Decor products.</li>
                <li>Used React-Bootstrap which allowed the same application to be optimized for both mobile and desktop resolutions</li>
                <li>Used NodeJs to write REST APIs, successfully integrated the APIs with frontend Code built using React.</li>
                <li>The project is still under development.</li>
            </ul>
        </Container>
    )
}

export default About;