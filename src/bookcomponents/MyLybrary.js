import React, {useState, useEffect} from "react";
import BookCard from '../bookcomponents/BookCard';
import {id} from '../logincomponents/Authentication';

export default function MyLibrary(props) {
    const [fetchJSON, setFetchJSON] = useState(undefined);
    useEffect(() => {
        fetchData();
    }, [])

    function fetchData() {
        fetch("http://localhost:9000/book/findbyuser", {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => setFetchJSON(json));
    }

    return (
        <div>
            <div className="pure-g">
                {BookCard()}
                {BookCard()}
                {BookCard()}
                {BookCard()}
                {BookCard()}
                {BookCard()}
                {BookCard()}
                {BookCard()}
                {BookCard()}
            </div>

        </div>
    );

}
