import React from 'react';
import Axios from 'axios';

// Component-Packages
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

export default class Cards extends React.Component {
  constructor(props) {
    console.log("Constructor Function: Cards")
    super(props);
    this.state = {
      userAPI: "https://api.github.com/users/itshui3",
      userAPIquery: "",
      userData: {},
      followers: []
    }
  }

  //LifeCycle Methods

  componentDidMount() {
    console.log("Component Did Mount: Cards")
    Axios.get(this.state.userAPI)
      .then( res => {
        console.log(res);
        this.setState({userData: res.data})
      })
      .catch( err => {
        console.log(err);
      })

    Axios.get(`${this.state.userAPI}/followers`)
      .then( res => {
        console.log("followers api : " + res);
        this.setState({ followers: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");

    if(prevState.userAPI !== this.state.userAPI) {
      Axios.get(this.state.userAPI)
      .then( res => {
        console.log(res);
        this.setState({userData: res.data})
      })
      .catch( err => {
        console.log(err);
      })
  
    Axios.get(`${this.state.userAPI}/followers`)
      .then( res => {
        console.log("followers api : " + res);
        this.setState({ followers: res.data })
      })
      .catch( err => {
        console.log(err);
      })

    }
    
  }

  //Class Methods
  setAPIQuery = ev => {
    this.setState({userAPIquery: ev.target.value})
  }
  setAPIByLogin = ev => {
    this.setState({})
  }
  setAPISelection = loginHandle => {
    this.setState({userAPIquery: loginHandle})
  }

  setNewUserAPI = ev => {
    ev.preventDefault();
    this.setState({userAPI: "https://api.github.com/users/" + this.state.userAPIquery});

  }

  render() {
    console.log("Render: Cards")
    return (
      <>

        <Card>
          <CardTitle>
            <form onSubmit={this.setNewUserAPI}>
              <input 
                placeholder="User" 
                onChange={this.setAPIQuery}
                value={this.state.userAPIquery}
              />
              <button>Submit</button>
            </form>
          </CardTitle>
          <CardBody>
            <CardSubtitle>
              {this.state.userData.name}
            </CardSubtitle>
            <br></br>
            <CardText>{this.state.userData.bio}</CardText>
            <CardText>{this.state.userData.login}</CardText>
            <CardText>{this.state.userData.location}</CardText>
           

            <CardText>
              Followers:
            </CardText>
              {
                this.state.followers.map((d, i) => (
                  
                  <Button key={i} onClick={() => this.setAPISelection(d.login)}>{d.login}</Button>
                  
                ))
              }


            <Button></Button>
          </CardBody>
        </Card>

      </>
    )
  }
}