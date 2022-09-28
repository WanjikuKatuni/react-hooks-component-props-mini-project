import React from "react";

function Header(props){

    return (
        <React.Fragment>
            <h1>{props.name}</h1>
        </React.Fragment>
    )
}

export default Header;