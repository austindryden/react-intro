// #1 import react
import React from "react";
import Card from "./card";



function Greet({whom}){
    const greetingText = `Hello, ${whom}`;
    return (
        <div>
            <Card text={greetingText} />
        </div>
    );
}



export default Greet;