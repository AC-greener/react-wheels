import React, { useState } from 'react';
import Pagination from './pagination';

interface IUser {
  id: number;
  name: string;
  email: string;
}

const users: IUser[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
  { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' },
  { id: 4, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  { id: 5, name: 'Charlie Brown', email: 'charlie.brown@example.com' },
  { id: 6, name: 'Lucy van Pelt', email: 'lucy.vanpelt@example.com' },
];

const UsersList = ({ users }: { users: IUser[] }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 2;

  const handleChangePage = (page: number, pageSize: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <div>
      <h1>Users</h1>
      <UsersList users={currentUsers} />
      <Pagination
        pageSize={pageSize}
        total={users.length}
        current={currentPage}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default App;
