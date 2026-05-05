import { useEffect, useState } from 'react';

export function Users() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          {/* Intentional runtime error */}
          {user.nonExistent.deep.value}
        </div>
      ))}
    </div>
  );
}
