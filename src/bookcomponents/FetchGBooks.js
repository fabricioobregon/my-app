import React, { useState, useEffect } from "react";

export default function FetchGBooks(props){
    const [isbn, setIsbn] = useState("");
    const [fetchJSON, setFetchJSON] = useState(undefined);

    useEffect(() => {
        // Update the document title using the browser API
        if(isbn === ""){setFetchJSON("");}
    });

    function onSubmit(props) {
        props.preventDefault();

        if(isbn === "" || isbn.length < 13){

        }else{
            fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn, {
                method: 'GET'
            })
                .then(response =>  {
                    if(response.ok) {
                        return response.json();
                    } else {
                        throw new Error('ISBN not found');
                    }
                })
                .then(json => {setFetchJSON(json)})
                .catch(error => {alert(error.message)});
        }


    }

    const changeIsbn = event => {
        setIsbn(event.target.value);
    }

    return (

        <div className="autorForm">
            <h1>Find Book by ISBN</h1>
            <form className="pure-form pure-form-aligned" >
                {/*<h4>username:</h4>*/}
                {/*<input type="text" onChange={changeEmail}></input>*/}
                <h4>Isbn:</h4>
                <input type="text" name="isbn" onChange={changeIsbn}></input>
                <div>
                    <button type="submit" className="pure-button pure-button-primary" onClick={onSubmit}>Submit</button>
                </div>
            </form>
            {fetchJSON ?
                (JSON.stringify(fetchJSON.totalItems) > 0) ? JSON.stringify(fetchJSON.items[0].volumeInfo.title):null
            :null}
        </div>

    );





}
