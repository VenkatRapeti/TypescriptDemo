import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";
import AddToList from "./AddToList"

export interface IState {
  persons: {
    name: string
    url: string
    age: number
    note?: string
  }[]
}

function App() {

  const [persons, setPersons] = useState<IState["persons"]>([
    {
      name: "Venkat Rapeti",
      url: "hreu",
      age: 8,
      note: "very good"
    }
  ]);

  persons.map(person => (
    person.name
  ))

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List persons={persons} />
      <AddToList persons={persons} setPersons={setPersons} />
    </div>
  );
}

export default App;
