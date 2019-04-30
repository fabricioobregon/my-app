import RandomImage from "../extracomponents/RandomImage";
import React from "react";

export default function BookCard(props){
    return(

        <div className="pure-u-1 pure-u-md-1-3">
            <img src={(props.imageUrl !== "")? props.imageUrl : RandomImage()} alt="Book Cover" height="240" width="160"/>
            <span>{props.lastPage}</span>
        </div>

    );
}
