import React,{useState, useEffect} from "react";
import RandomImage from "../extracomponents/RandomImage";
import '../bookcomponents/BookCard.css';
import updateImg from '../css/update.png';
import deleteImg from '../css/delete.png';


export default function BookCard(props){
const [lastPage, setLastPage] = useState(props.book.lastPage ? props.book.lastPage  : "");

    // useEffect(() => {
    // }, []);


const title = ((props.book.title).length > 30) ? ((props.book.title).substring(0,30) + "...") : (props.book.title);
const author = ((props.book.authors[0].name).length > 20) ? ((props.book.authors[0].name).substring(0,20) + "...") : (props.book.authors[0].name);

    const onChange = event => {setLastPage(event.target.value);}

    function updateLastPage(){
        (parseInt(lastPage) > parseInt(props.book.pageCount)) ? (alert("Error:\nLast page bigger than book pages!")): (
        fetch("http://localhost:9000/book/updatelastpage", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: props.book.id,
                lastPage: lastPage})
        })
            .then(response => {
                if (response.ok) {
                    alert("Book updated!");
                    props.updateDelete();
                } else {
                    throw new Error('Error updating');
                }
            })
            .catch(error => {alert(error.message)})
    )}

    function deleteBook() {
        fetch("http://localhost:9000/book/delete", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: props.book.id
            })
        })
            .then(response => {
                if (response.ok) {
                    alert("Book deleted!");
                    props.updateDelete();
                } else {
                    throw new Error('Error deleting');
                }
            })
            .catch(error => {alert(error.message)});
    }


    return (

        <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4 entireCard">
            <form>
                <div className="bookCard">
                    <img src={(props.book.imageUrl !== "") ? props.book.imageUrl : RandomImage()} alt="Book Cover" height="264" width="176"/>
                </div>
                <div className="bookData">
                    <span>{title}</span><br/>
                    <span>{author}</span>
                &nbsp;&nbsp;<span>{props.book.pageCount}pgs.</span><br/>
                    <label>Last Page:</label>
              &nbsp;<input id="lastPage" value={lastPage} onChange={onChange} className="lastPage" type="text"/>

                    <div className="tooltip">
              &nbsp;<img className="formButtonImg" src={updateImg} alt="" onClick={updateLastPage}/>
                    <span className="tooltiptext">Update page count</span>
                    </div>

                    <div className="tooltip">
              &nbsp;<img className="formButtonImg" src={deleteImg} alt="" onClick={deleteBook}/>
                    <span className="tooltiptext">Delete book</span>
                    </div>
                </div>
            </form>
        </div>

    );
}

