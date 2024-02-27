// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('/api/persons');
        setPersons(response.data);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    };

    fetchPersons();
  }, []);

  return (
    <div>
      <h1>Persons</h1>
      <ul>
        {persons.map(person => (
          <li key={person._id}>
            {person.name}, {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
