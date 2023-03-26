import { Link } from '@remix-run/react';
import { useState } from 'react';

export default function Index() {
  const [adventures, setAdventures] = useState([
    { id: 1, title: 'Adventure 1' },
    { id: 2, title: 'Adventure 2' },
  ]);

  const [newAdventure, setNewAdventure] = useState('');

  const addAdventure = () => {
    const newAdventureObj = { id: adventures.length + 1, title: newAdventure };
    setAdventures([...adventures, newAdventureObj]);
    setNewAdventure('');
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-900">Adventures</h1>
        {/* <Link to="/adventures/new" className="bg-blue-500 text-white p-1 rounded">
          New Adventure
        </Link> */}
      </div>
      <ul className="mb-4">
        {adventures.map((adventure) => (
          <li key={adventure.id} className="mb-2">
            <Link 
              to={`/adventures/${adventure.id}`}
              className="text-blue-500 hover:text-blue-600"
            >
              {adventure.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mb-4">
        <input
          type="text"
          className="border-2 border-gray-300 p-2 rounded"
          value={newAdventure}
          onChange={(e) => setNewAdventure(e.target.value)}
          placeholder="Start a new adventure"
        />
        <button onClick={addAdventure} className="bg-blue-500 text-white p-2 rounded ml-2">
          Add
        </button>
      </div>
    </div>
  );
}
