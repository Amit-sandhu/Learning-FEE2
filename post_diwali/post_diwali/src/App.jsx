import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const limit = 5;


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    setError(null);
    const params = new URLSearchParams({
      limit: limit.toString(),
      skip: skip.toString(),
    });
    if (debouncedSearch) params.append('q', debouncedSearch);

    fetch(`https://dummyjson.com/users/search?${params}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (data.users.length === 0) {
          throw new Error('No users found');
        }
        setUsers(data.users);
      })
      .catch(err => setError(err.message));
  }, [skip, debouncedSearch]);

  const handleNext = () => setSkip(prev => prev + limit);
  const handlePrev = () => setSkip(prev => Math.max(0, prev - limit));

  return (
    <div className="app">
      <h1>Usernames</h1>
      <div className="search">
        <label>Search : </label>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name..."
        />
      </div>
      {error && <p className="error">Error: {error}</p>}
      <div class="usernames">
        <ul>
          {users.map(u => (
            <li key={u.id}>
              {u.firstName} {u.lastName}
            </li>
          ))}
        </ul>
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={skip === 0}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <br></br>
      <span id="page">Page: {(skip / limit) + 1}</span>
    </div>
  );
}

export default App;