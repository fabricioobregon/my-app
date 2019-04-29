import React, { useState, useEffect } from "react";
import 'purecss/build/pure.css';
import '../css/side-menu.css';


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
        if(isbn === "" || isbn.length < 13){
            setFetchJSON("");
            setImageUrl("");
            setTitle("");
            setCategorie("");
            setYear("");
            setAuthor("");
            setPublisher("");
            setPageCount("");
            setDescription("");
        }else{
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
                }
            }
        }
    });

    useEffect(() => {
        // Update the document title using the browser API


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
                .then(json => {setFetchJSON(json);})
                .catch(error => {alert(error.message)});
        }
    }

    const changeIsbn = event => {setIsbn(event.target.value);}
    const changeImageUrl = event => {setImageUrl(event.target.value);}
    const changeTitle = event => {setTitle(event.target.value);}
    const changeCategorie = event => {setCategorie(event.target.value);}
    const changeAuthor = event => {setAuthor(event.target.value);}
    const changePublisher = event => {setPublisher(event.target.value);}
    const changePagecount = event => {setPageCount(event.target.value);}
    const changeDescription = event => {setDescription(event.target.value);}







    return (
<div>
        <form className="pure-form pure-form-stacked">
            <fieldset>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-3">
                        <label htmlFor="isbn">GoogleAPI</label>
                        <input type="text" id="isbn" className="pure-input-rounded" onChange={changeIsbn}/>
                        <button type="submit" className="pure-button pure-button-primary" onClick={onSubmit}>Search by ISBN</button>
                    </div>

                    {/*<div className="pure-u-1 pure-u-md-1-3">*/}
                    {/*    <label htmlFor="imageUrl">Image Url</label>*/}
                    {/*    <input id="imageUrl" className="pure-u-23-24" type="text" value={imageUrl} onChange={changeTitle}/>*/}
                    {/*</div>*/}

                    <div className="pure-u-1 pure-u-md-1-3">
                        <label htmlFor="title">Title</label>
                        <input id="title" className="pure-u-23-24" type="text" value={title} onChange={changeTitle}/>
                    </div>

                    <div className="pure-u-1 pure-u-md-1-3">
                        <label htmlFor="categorie">Categorie</label>
                        <input id="categorie" className="pure-u-23-24" type="text" value={categorie} onChange={changeCategorie}/>
                    </div>

                    <div className="pure-u-1 pure-u-md-1-3">
                        <label htmlFor="author">Author</label>
                        <input id="author" className="pure-u-23-24" type="email" required value={author} onChange={changeAuthor}/>
                    </div>

                    <div className="pure-u-1 pure-u-md-1-3">
                        <label htmlFor="publisher">Publisher</label>
                        <input id="publisher" className="pure-u-23-24" type="text" value={publisher} onChange={changePublisher}/>
                    </div>

                    <div className="pure-u-1 pure-u-md-1-3">
                        <label htmlFor="pageCount">Page Count</label>
                        <input id="pageCount" className="pure-u-23-24" type="text" value={pageCount} onChange={changePagecount}/>
                    </div>

                    <div className="pure-u-1 pure-u-md-1-3">
                        <label htmlFor="description">Description</label>
                        <input id="description" className="pure-u-23-24" type="text" value={description} onChange={changeIsbn}/>
                    </div>

                </div>

                <button type="submit" className="pure-button pure-button-primary">Submit</button>
            </fieldset>
        </form>


</div>



    );





}
