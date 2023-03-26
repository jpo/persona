// app/routes/adventures/new.tsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAdventure } from '~/utils/api'; // You'll create this helper function in the next step

export default function NewAdventure() {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await createAdventure(title, '');
    setTitle('');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">New Adventure</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" className="block mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="border-2 border-gray-300 p-2 rounded w-full mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Adventure
        </button>
      </form>
    </div>
  );
}
