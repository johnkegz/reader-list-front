import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks';
// import { graphql } from 'graphql';

const getBooksQuery = gql`
{
    books{
        name
        genre
        id
    }
}
`

function handleBooks(data){
    const result = data.books.map(book =>{
        console.log(book);
        return (
            <li key={book.id}>
                {book.name}
            </li>)
    })
    return result
}
function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading...</p>;
    if (error) {
        return <p>{error.message}</p>
    }
    return handleBooks(data)
}

export default BookList
