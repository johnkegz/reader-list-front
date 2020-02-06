import React from 'react'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import BookList from './components/BookList'

//Apollo set up
const client = new ApolloClient({
    uri: 'http://localhost:8081/graphql'
})
const App = () => {
    return (
    <ApolloProvider client={client} >
        <div>
            <div><h1>Hello world man</h1></div>
            <BookList />
        </div>
    </ApolloProvider>
    )
}
export default App;