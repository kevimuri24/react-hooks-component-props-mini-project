import React from "react";

function About({image, about}){
    return  <aside>
        {!{image} ? null : <img src="https://via.placeholder.com/215" alt="blog-logo"/>}
        <p>{about}</p>
    </aside>
}

export default About;