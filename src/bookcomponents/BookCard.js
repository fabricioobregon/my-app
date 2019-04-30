import React from "react";
import RandomImage from "../extracomponents/RandomImage";
import '../bookcomponents/BookCard.css';


export default function BookCard(props){
    return (

        <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4 entireCard">

            <form>
                <td>
            <div className="bookCard">
                <img src={(props.imageUrl !== "") ? props.imageUrl : RandomImage()} alt="Book Cover" height="264" width="176"/>
            </div>
            <div className="bookData">
            <input id="lastPage" className="pure-u-23-24 lastPage" type="text" required onChange={""}/>
            </div>
                </td>

            </form>
        </div>

    );
}

