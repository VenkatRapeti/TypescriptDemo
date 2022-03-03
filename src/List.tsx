import React from 'react'

interface IProps {
    persons: {
        name: string
        url: string
        age: number
        note?: string
    }[]
}

const List: React.FC<IProps> = ({ persons }) => {

    const rendeItems = ():JSX.Element[] => {
        return persons.map(person => {
            return (
                <li>
                    <div>
                        <img src={person.url} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} old</p>
                    <p>{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
        {rendeItems()}
        </ul>
    )
}

export default List