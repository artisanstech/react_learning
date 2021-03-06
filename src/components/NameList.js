import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Alex",
      age: 30,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Clark",
      age: 30,
      skill: "Vue",
    },
    {
      id: 4,
      name: "Diana",
      age: 30,
      skill: "Java",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.name} person={person} />
  ));

  return <div>{personList} </div>;
}

export default NameList;
