import React, { useState, useEffect } from "react";

export default function FetchGBooks(props){
    const [isbn, setIsbn] = useState("");
    const [fetchJSON, setFetchJSON] = useState(undefined);
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [categorie, setCategorie] = useState("");
    const [year, setYear] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [pageCount, setPageCount] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        // Update the document title using the browser API
        if(isbn === ""){setFetchJSON("");}
    });

    useEffect(() => {
        // Update the document title using the browser API
        if(fetchJSON){
            if(fetchJSON.totalItems > 0){
                setImageUrl(JSON.stringify(fetchJSON.items[0].volumeInfo.imageLinks.thumbnail));
                setTitle(JSON.stringify(fetchJSON.items[0].volumeInfo.title));
                setCategorie(JSON.stringify(fetchJSON.items[0].volumeInfo.categories[0]));
                setYear(JSON.stringify(fetchJSON.items[0].volumeInfo.publishedDate.substr(0, 4)));
                setAuthor(JSON.stringify(fetchJSON.items[0].volumeInfo.authors[0]));
                setPublisher(JSON.stringify(fetchJSON.items[0].volumeInfo.publisher));
                setPageCount(JSON.stringify(fetchJSON.items[0].volumeInfo.pageCount));
                setDescription(JSON.stringify(fetchJSON.items[0].volumeInfo.description));

                console.log(isbn);
                console.log(imageUrl);
                console.log(title);
                console.log(categorie);
                console.log(year);
                console.log(author);
                console.log(publisher);
                console.log(pageCount);
                console.log(description);
            }
        }
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
                <fieldset>
                <h4>Isbn:</h4>
                <input type="text" name="isbn" onChange={changeIsbn}></input>
                    {' '}<button type="submit" className="pure-button pure-button-primary" onClick={onSubmit}>GoogleBooks</button>
                </fieldset>

            </form>
        </div>
    );





}
