import React, {useState, useEffect} from "react";
import RandomImage from '../extracomponents/RandomImage'

export default function BookRegister(props) {
    const [isbn, setIsbn] = useState("");
    const [fetchJSON, setFetchJSON] = useState("");
    const [customIsbn, setCustomIsbn] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [year, setYear] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [pageCount, setPageCount] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {

            if (fetchJSON.totalItems > 0) {
                setImageUrl(JSON.stringify(fetchJSON.items[0].volumeInfo.imageLinks.thumbnail).replace(/['"]+/g, ''));
                setTitle(JSON.stringify(fetchJSON.items[0].volumeInfo.title).replace(/['"]+/g, ''));
                setCategory(JSON.stringify(fetchJSON.items[0].volumeInfo.categories[0]).replace(/['"]+/g, ''));
                setYear(JSON.stringify(fetchJSON.items[0].volumeInfo.publishedDate.substr(0, 4)).replace(/['"]+/g, ''));
                setAuthor(JSON.stringify(fetchJSON.items[0].volumeInfo.authors[0]).replace(/['"]+/g, ''));
                setPublisher(JSON.stringify(fetchJSON.items[0].volumeInfo.publisher).replace(/['"]+/g, ''));
                setPageCount(JSON.stringify(fetchJSON.items[0].volumeInfo.pageCount).replace(/['"]+/g, ''));
                setDescription(JSON.stringify(fetchJSON.items[0].volumeInfo.description).replace(/['"]+/g, ''));
                setCustomIsbn(JSON.stringify(fetchJSON.items[0].volumeInfo.industryIdentifiers[0].identifier).replace(/['"]+/g, ''));
            } else {
                clearForm();
            }

    }, [fetchJSON]);



    function clearForm(){
        setFetchJSON("");
        setImageUrl("");
        setTitle("");
        setCategory("");
        setYear("");
        setAuthor("");
        setPublisher("");
        setPageCount("");
        setDescription("");
        setCustomIsbn("");
        setIsbn("");
    }

    function requestGBooks(props) {
        props.preventDefault();

        if (isbn === "" || isbn.length < 13 || isbn.length > 13) {
            console.log("Invalid ISBN size");
        } else {
            fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn, {method: 'GET'})
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('ISBN not found');
                    }
                })
                .then(json => {
                    setFetchJSON(json);
                })
                .catch(error => {
                    alert(error.message)
                });
        }
    }

    function saveBook(props) {
        props.preventDefault();
        if (isbn.length === 13) {

            const token = JSON.parse(localStorage.getItem('Authentication'));
            const userId = token == null ? "" : token.id;

            console.log(
                JSON.stringify({
                    isbn: customIsbn,
                    title: title,
                    description: description,
                    imageUrl: imageUrl,
                    publisher: publisher,
                    year: year,
                    category: category,
                    pageCount: pageCount,
                    authors: ([{name: author}]),
                    customer_id: userId
                })
            );

            fetch("http://localhost:9000/book/add", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    isbn: customIsbn,
                    title: title,
                    description: description,
                    imageUrl: imageUrl,
                    publisher: publisher,
                    year: year,
                    category: category,
                    pageCount: pageCount,
                    authors: ([{name: author}]),
                    customer_id: userId
                })
            })
                .then(response => {
                    if (response.ok) {
                        alert("Book saved!");
                        return response.json();
                    } else {
                        throw new Error('Error saving');
                    }
                })
                .then(json => {})
                .catch(error => {alert(error.message)});
        }
    }

    const changeIsbn = event => {setIsbn(event.target.value);}
    const changeCustomIsbn = event => {setCustomIsbn(event.target.value);}
    const changeImageUrl = event => {setImageUrl(event.target.value);}
    const changeYear = event => {setYear(event.target.value);}
    const changeTitle = event => {setTitle(event.target.value);}
    const changeCategory = event => {setCategory(event.target.value);}
    const changeAuthor = event => {setAuthor(event.target.value);}
    const changePublisher = event => {setPublisher(event.target.value);}
    const changePagecount = event => {setPageCount(event.target.value);}
    const changeDescription = event => {setDescription(event.target.value);}

    return (

        <div className="autorForm">
            <div><h3>REGISTER YOUR BOOK</h3></div>
            <form className="pure-form pure-form-stacked">
                <fieldset>
                    <div>
                        <div className="pure-u-1 pure-u-md-1-2">
                            <br/>
                            <label htmlFor="isbn">GoogleAPI</label>
                            <input type="text" id="isbn" className="pure-input-rounded" onChange={changeIsbn} placeholder="13 digits "/>
                            <button type="submit" className="pure-button pure-button-primary" onClick={requestGBooks}>Search by ISBN</button>
                        </div>
                        <div className="pure-u-1 pure-u-md-1-2">
                            <img src={imageUrl ? imageUrl:RandomImage()} alt="Book Cover" height="240" width="160"/>
                        </div>
                    </div>

                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="customIsbn">Isbn</label>
                            <input id="customIsbn" className="pure-u-23-24" type="text" value={customIsbn}
                                   onChange={changeCustomIsbn}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="title">Title</label>
                            <input id="title" className="pure-u-23-24" type="text" value={title}
                                   onChange={changeTitle}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="category">Category</label>
                            <input id="category" className="pure-u-23-24" type="text" value={category}
                                   onChange={changeCategory}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="author">Author</label>
                            <input id="author" className="pure-u-23-24" type="text" required value={author}
                                   onChange={changeAuthor}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="publisher">Publisher</label>
                            <input id="publisher" className="pure-u-23-24" type="text" value={publisher}
                                   onChange={changePublisher}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="year">Year</label>
                            <input id="year" className="pure-u-23-24" type="text" value={year} onChange={changeYear}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="pageCount">Page Count</label>
                            <input id="pageCount" className="pure-u-23-24" type="text" value={pageCount}
                                   onChange={changePagecount}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="description">Description</label>
                            <input id="description" className="pure-u-23-24" type="text" value={description}
                                   onChange={changeDescription}/>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label htmlFor="imageUrl">Image Url</label>
                            <input id="imageUrl" className="pure-u-23-24" type="text" value={imageUrl}
                                   onChange={changeImageUrl}/>
                        </div>

                    </div>
                    <button type="submit" className="pure-button pure-button-primary" onClick={saveBook}>Save</button>
                    &nbsp;&nbsp;
                    <button type="text" className="pure-button pure-button-primary" onClick={clearForm}>Clear</button>
                </fieldset>
            </form>


        </div>

    );


}
