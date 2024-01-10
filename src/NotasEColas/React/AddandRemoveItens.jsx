import { useState } from "react";
import { List } from "./data";

const [people, setPeople] = useState(List);
const [newName, setNewName] = useState("");

const handleChange = (e) => {
  setNewName(e.target.value);
};

const addName = (e) => {
  e.preventDefault();
  const lastId = people[people.length - 1];
  const nameId = lastId.id + 1;

  setPeople([...people, { id: nameId, name: newName }]);
  setNewName("");
};

const removeName = (id) => {
  setPeople(people.filter((person) => person.id !== id));
};

return (
  <>
    <form onSubmit={addName}>
      <label>
        Name
        <input
          value={newName}
          onChange={handleChange}
          type="text"
          id="User"
          name="Name"
        />
      </label>
      <h4>Users</h4>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
            <button type="button" onClick={() => removeName(person.id)}>
              remove
            </button>
          </div>
        );
      })}
    </form>
  </>
);
