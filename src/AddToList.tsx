import React, { useState } from 'react';
import { IState as Props } from "./App";


interface IProps {
    persons: Props["persons"]
    setPersons: React.Dispatch<React.SetStateAction<Props["persons"]>>
}


const AddToList: React.FC<IProps> = ({ persons, setPersons }) => {

    const [inputs, setInputs] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    })

    const handelChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handelClick = () => {
        if (!inputs.name || !inputs.age) return
        setPersons([...persons,
        {
            name: inputs.name,
            url: inputs.url,
            age: parseInt(inputs.age),
            note: inputs.note
        }])
        setInputs({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Name'
                name="name"
                onChange={handelChange}
                value={inputs.name}
            />
            <input
                type="text"
                placeholder='Age'
                name="age"
                onChange={handelChange}
                value={inputs.age}
            />
            <input
                type="text"
                placeholder='Image Url'
                name="url"
                onChange={handelChange}
                value={inputs.url}
            />
            <textarea
                placeholder='Note'
                name="note"
                onChange={handelChange}
                value={inputs.note}
            />
            <button
                onClick={handelClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList