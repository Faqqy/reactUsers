import React from 'react';
import { useUserContext } from '../context/UserContext';

const Details: React.FC = () => {
  const { userDetails, loading } = useUserContext();

  if (loading) return <h1>Загрузка...</h1>;
  if (!userDetails) return <p>Выберите пользователя из списка что бы увидеть подробности.</p>;

  return (
    <div className='details'>
      <img src={userDetails.avatar} alt={userDetails.name} />
      <h1>{userDetails.name}</h1>
      <p>City: {userDetails.details.city}</p>
      <p>Company: {userDetails.details.company}</p>
      <p>Position: {userDetails.details.position}</p>
    </div>
  );
};

export default Details;