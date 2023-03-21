import React, { useState } from 'react';
import Pagination from './pagination';

interface IUser {
  id: number;
  name: string;
  email: string;
}

const users: IUser[] = [
  { id: 1, name: 'John Smith', email: 'john.smith@example.com' },
  { id: 2, name: 'Emily Davis', email: 'emily.davis@example.com' },
  { id: 3, name: 'Tom Wilson', email: 'tom.wilson@example.com' },
  { id: 4, name: 'Samantha Lee', email: 'samantha.lee@example.com' },
  { id: 5, name: 'Daniel Kim', email: 'daniel.kim@example.com' },
  { id: 6, name: 'Rachel Chen', email: 'rachel.chen@example.com' },
  { id: 7, name: 'David Rodriguez', email: 'david.rodriguez@example.com' },
  { id: 8, name: 'Sophia Nguyen', email: 'sophia.nguyen@example.com' },
  { id: 9, name: 'James Campbell', email: 'james.campbell@example.com' },
  { id: 10, name: 'Olivia Wright', email: 'olivia.wright@example.com' },
  { id: 11, name: 'Liam Baker', email: 'liam.baker@example.com' },
  { id: 12, name: 'Isabella Patel', email: 'isabella.patel@example.com' },
  { id: 13, name: 'Mason Taylor', email: 'mason.taylor@example.com' },
  { id: 14, name: 'Ava Garcia', email: 'ava.garcia@example.com' },
  { id: 15, name: 'Ethan Hernandez', email: 'ethan.hernandez@example.com' },
  { id: 16, name: 'Mia Martinez', email: 'mia.martinez@example.com' },
  { id: 17, name: 'Noah Jackson', email: 'noah.jackson@example.com' },
  { id: 18, name: 'Emma Anderson', email: 'emma.anderson@example.com' },
  { id: 19, name: 'Logan Gonzalez', email: 'logan.gonzalez@example.com' },
  { id: 20, name: 'Madison Green', email: 'madison.green@example.com' },
  { id: 21, name: 'Lucas Carter', email: 'lucas.carter@example.com' },
  { id: 22, name: 'Chloe Perez', email: 'chloe.perez@example.com' },
  { id: 23, name: 'Jacob Collins', email: 'jacob.collins@example.com' },
  { id: 24, name: 'Avery Turner', email: 'avery.turner@example.com' },
  { id: 25, name: 'Lily Morris', email: 'lily.morris@example.com' },
  { id: 26, name: 'William Cooper', email: 'william.cooper@example.com' },
  { id: 27, name: 'Sofia Rivera', email: 'sofia.rivera@example.com' },
  { id: 28, name: 'Michael Reed', email: 'michael.reed@example.com' },
  { id: 29, name: 'Avery Peterson', email: 'avery.peterson@example.com' },
]

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
  const pageSize = 8;

  const handleChangePage = (page: number, pageSize: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <div>
      <h1>currentPage:{currentPage}</h1>
      <h1>pageSize:{pageSize}</h1>
      <h1>total:{users.length}</h1>
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
