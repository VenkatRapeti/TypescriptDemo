import React from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
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

const BookBlock: React.FC<IProps> = ({ item }) => {

    const history = useHistory();

    const handelClick = () => {
        history.push("/details", {
            id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        author: item.author,
        published: item.published,
        publisher: item.publisher,
        pages: item.pages,
        description: item.description,
        website: item.website
        })
    }
    return (
        <div onClick={handelClick} style={{ minWidth: "500px", margin: "5px", padding: "10px", display: "flex", justifyContent: "flex-start", border: "1px solid lightgray" }}>
            <div>
                <div>{item.id}</div>
                <h2>{item.title}</h2>
                <p>{item.author}</p>
            </div>
        </div>
    )
}

export default BookBlock