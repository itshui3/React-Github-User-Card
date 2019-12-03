import React from 'react';
import Axios from 'axios';
import UserDisplayContext from '../contexts/UserDisplayContext';

function Nav() {
  const { userData, displayedUser, setDisplayedUser } = React.useContext(UserDisplayContext);
  const [followerData, setFollowerData] = React.useState([])

  React.useEffect(() => {
    Axios.get(`https://api.github.com/users/${displayedUser}/followers`)
      .then( res => {
        console.log(res)
        setFollowerData(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  }, [userData])

  return (
    <div>
      <h1>Select a user: </h1>
      <form>
        <select onChange={setDisplayedUser}>
          {
            followerData ?
            followerData.map(data => (
              <option key={data.id}>{data.login}</option>
            ))  : null
          }
          
        </select>
      </form>
    </div>
  )
  
}

export default Nav;