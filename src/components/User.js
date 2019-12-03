import React from 'react';
import Axios from 'axios';


// contexts
import UserDisplayContext from '../contexts/UserDisplayContext';

function User() {
  console.log('user mounted')

  const { userData } = React.useContext(UserDisplayContext);

  return (
    <div>
      <img src={userData.avatar_url} />
      <h1>{userData.name}</h1>
      <h2>{userData.login}</h2>
      <ul>
        <li>{userData.location}</li>
        <li>{userData.bio}</li>
      </ul>

    </div>


  )
}

export default User;