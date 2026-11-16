import React, { useEffect, useState } from "react";

const DebounceName = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name.trim()) {
      setUsers([]);
      return;
    }

    const handler = setTimeout(() => {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        q: name,
        limit: "10"
      });

      fetch(`https://dummyjson.com/users/search?${params}`)
        .then(res => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then(data => {
          setUsers(data.users || []);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(handler);
  }, [name]);

  return (
    <>
      <h1>All Users</h1>
      <input
        type="text"
        placeholder="Search name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </>
  );
};

export default DebounceName;