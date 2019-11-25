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

  //Class Methods

  render() {
    console.log("Render: Cards")
    return (
      <>

        <Card>
          <CardTitle>
            <form>
              <input 
                placeholder="User" 
                
              />
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
                  
                  <CardText key={i}>{d.login}</CardText>
                  
                ))
              }


            <Button></Button>
          </CardBody>
        </Card>

        <ul>
          <li><h2>Followers</h2></li>
          {
            //map follower names
          }
        </ul>

        <ul>
          <li><h2>Following</h2></li>
          {
            //map following names
          }
        </ul>

      </>
    )
  }
}