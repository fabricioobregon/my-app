import RandomImage from "../extracomponents/RandomImage";
import React from "react";

export default function BookCard(){
    return(

        <div className="pure-u-1 pure-u-md-1-3">
        <img src={RandomImage()} alt="Book Cover" height="240" width="160"/>
        </div>

    );
}
