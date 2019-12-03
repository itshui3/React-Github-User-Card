import React from 'react';
import Axios from 'axios';
import Nav from './components/Nav';
import User from './components/User';

// contexts
import UserDisplayContext from './contexts/UserDisplayContext';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      displayedUser: '',
      userData: {},
      componentMounted: false
    }
  }

  componentDidMount() {
    this.setState({ displayedUser: 'itshui3' });
    this.setState({ componentMounted: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.displayedUser !== this.state.displayedUser && this.state.componentMounted) {
      Axios.get(`https://api.github.com/users/${this.state.displayedUser}`)

      .then( res => {
        console.log(res)
        this.setState({ userData: res.data })
      })

      .catch( err => {
        console.log(err)
      })
    }
  }

  componentWillUnmount() {
    this.setState({ componentMounted: false })
  }

  setDisplayedUser = ev => {
    this.setState({ displayedUser: ev.target.value })
  }

  render() {
    return (
      <div className="App">
        <UserDisplayContext.Provider value={{
          displayedUser: this.state.displayedUser,
          userData: this.state.userData,
          setDisplayedUser: this.setDisplayedUser
        }}>
          <Nav />
          <User />

        </UserDisplayContext.Provider>
        
      </div>
    );

  }

}

export default App;
