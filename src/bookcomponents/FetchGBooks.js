// import React, { useState, useEffect } from "react";
//
// export default class FetchGBooks extends React.Component{
//     const [isbn, setIsbn] = useState("");
//     const [fetchJSON, setFetchJSON] = useState(undefined);
//     {console.log(props)}
//
//     // useEffect(() => {fetchData();}, [])
//
//     function onSubmit() {
//         props.preventDefault();
//         fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:{props}", {
//             method: 'GET'
//         })
//             .then(response => response.json())
//             .then(json => setFetchJSON(json)
//             );
//     }
//
//     const changeIsbn = event => {
//         setIsbn(event.target.value);
//     }
//
//     // const populatedSpan = event => {
//     //     setIsbn(event.target.value);
//     // }
//
//
//     return (
//
//         <isbnForm/>
//
//     );
//
//     class isbnForm extends React.Component {
//         render() {
//             return (<div>
//                 <h1>Find Book by ISBN</h1>
//                 <form onSubmit={onSubmit}>
//                     {/*<h4>username:</h4>*/}
//                     {/*<input type="text" onChange={changeEmail}></input>*/}
//                     <h4>Isbn:</h4>
//                     <input type="text" onChange={changeIsbn}></input>
//                     <div>
//                         <button type="submit">Submit</button>
//                     </div>
//                 </form>
//                 <span>{JSON.stringify(fetchJSON)}</span>
//             </div>);
//         }
//     }
// }
