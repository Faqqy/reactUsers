import React, { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { User } from '../common/types';


const List: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const { setSelectedUser } = useUserContext();
  
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error('Error fetching users:', error));
    }, []);
  
    return (
      <ul className="list-group users">
        {users.map((user) => (
          <li className="list-group-item user" key={user.id} onClick={() => setSelectedUser(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    );
  };
  
  export default List;