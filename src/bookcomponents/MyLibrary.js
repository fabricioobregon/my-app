import React, {useState, useEffect} from "react";
import BookCard from '../bookcomponents/BookCard';


export default function MyLibrary(props) {
    const [fetchJSON, setFetchJSON] = useState(undefined);
    const [update, setUpdate] = useState(false);
    const [login, setLogin] = useState(props.login);

    useEffect(() => {
        requestBooks();
    }, [update, props.login])

    function updateDelete() {
        setUpdate(!update);
    }


    function requestBooks() {
        setLogin(props.login);
        console.log(login);
        fetch("http://localhost:9000/book/findbyuser", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: login
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
        <div>
            <h3>KEEP TRACK OF YOUR BOOKS</h3><br/>
            <div className="pure-g">
                    {fetchJSON ? (fetchJSON.map(book => (
                            <BookCard key={book.id} book={book} updateDelete={updateDelete}/>
                        ))
                    ) : (
                        <h1>. . .</h1>
                    )}
            </div>
        </div>
    );

}
