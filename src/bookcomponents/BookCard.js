import React,{useState, useEffect} from "react";
import RandomImage from "../extracomponents/RandomImage";
import '../bookcomponents/BookCard.css';
import updateImg from '../css/update.png';
import deleteImg from '../css/delete.png';



export default function BookCard(props){
    const [lastPage, setLastPage] = useState(props.book.lastPage ? props.book.lastPage  : "");
    const [fetchJson, setFetchJson] = useState("");

    useEffect(() => {

    }, []);

const title = ((props.book.title).length > 30) ? ((props.book.title).substring(0,30) + "...") : (props.book.title).substring(0,30);

    const onChange = event => {setLastPage(event.target.value);}

    function updatePage() {
        alert("hello");
    }


    return (

        <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4 entireCard">
            <form>
                <div className="bookCard">
                    <img src={(props.book.imageUrl !== "") ? props.book.imageUrl : RandomImage()} alt="Book Cover" height="264" width="176"/>
                </div>
                <div className="bookData">
                    <span>{title}</span><br/>
                    <span>{props.book.authors[0].name}</span><br/>
                    <label>Last Page: </label><input id="lastPage" value={lastPage} onChange={onChange} className="lastPage" type="text"/>

                    <div className="tooltip">
              &nbsp;<img className="formButtonImg" src={updateImg} onClick={updatePage}/>
                    <span className="tooltiptext">Update page count</span>
                    </div>

                    <div className="tooltip">
              &nbsp;<img className="formButtonImg" src={deleteImg}/>
                    <span className="tooltiptext">Delete book</span>
                    </div>
                </div>
            </form>
        </div>

    );
}

