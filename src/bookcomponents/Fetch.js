import React, { useState, useEffect } from "react";

export default function Fetch(props) {
  const [fetchJSON, setFetchJSON] = useState(undefined);
  useEffect(() => {fetchData();}, [])

  function fetchData() {
    fetch("http://localhost:9000/book/findall", {
        method: 'GET'
    })
      .then(response => response.json())
      .then(json => setFetchJSON(json));
  }

  return (
      <div>
          <table>
              <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>ImageUrl</th>
                  <th>Isbn</th>
                  <th>Edition</th>
                  <th>Year</th>
                  {/*{book.authors.map((author) => <th>Author</th>)}*/}
              </tr>

              {fetchJSON ? fetchJSON.map((book) => (
                  <tr>
                      <td>{book.title}</td>
                      <td> {book.description}</td>
                      <td>{book.imageUrl}</td>
                      <td>{book.isbn}</td>
                      <td>{book.edition}</td>
                      <td>{book.year}</td>
                      {/*{book.authors.map((author) => <div>Author: {author.name}</div>)}*/}
                  </tr>
              )):null}

          </table>
      </div>
  );

}

