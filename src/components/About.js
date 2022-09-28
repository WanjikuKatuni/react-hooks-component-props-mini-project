import React from "react";


function About({
    imageUrl ="https://via.placeholder.com/215",
    about ="Personal Blog by Annie"
}){
return (

 
    <aside>
        <img src={imageUrl} alt="blog logo"/>
        <p>{about}</p>
    </aside>
   
)
};


export default About;