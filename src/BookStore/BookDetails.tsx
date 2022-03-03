import React from 'react'
import { useLocation } from 'react-router-dom'

interface ILProps {
    item: {
        id: string
        title: string
        subtitle: string
        author: string
        published: string
        publisher: string
        pages: number
        description: string
        website: string
    }
}

const BookDetails = () => {

    const location = useLocation<ILProps["item"]>();

    return (
        <div style={{
            
            width: "100%", height: "100vh", display: "flex",
            justifyContent: "center", alignItems: "center", flexDirection: "column"
        }}>
            <div>{location.state.id}</div>
            <h2>{location.state.title}</h2>
            <h4>{location.state.subtitle}</h4>
            <h6>{location.state.author}</h6>
            <p>{location.state.published}</p>
            <div>{location.state.publisher}</div>
            <p>{location.state.pages}</p>
            <div style={{width:"50%",textAlign:"center"}}>{location.state.description}</div>
        </div>
    )
}

export default BookDetails