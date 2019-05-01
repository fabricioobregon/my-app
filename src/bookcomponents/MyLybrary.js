import React, {useState, useEffect} from "react";
import BookCard from '../bookcomponents/BookCard';
import {userId} from '../logincomponents/Authentication';

export default function MyLibrary(props) {
    const [fetchJSON, setFetchJSON] = useState(undefined);
    useEffect(() => {
        requestBooks();
    }, [])

    function requestBooks() {

        fetch("http://localhost:9000/book/findbyuser", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: userId()
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error requesting your books!');
                }
            })
            .then(json => {setFetchJSON(json);})
            .catch(error => {alert(error.message)});
    }


    return (
        <div className="pure-g">
            {fetchJSON ? (fetchJSON.map(book => (
                    <BookCard key={book.id} book={book}/>
                ))
            ) : (
                <h1>Loading...</h1>
            )}

        </div>
    );

}
