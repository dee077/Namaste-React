import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props){
    super(props);
    // console.log('Constructor did called')
  }
  componentDidMount(){
    // console.log('Parent Componet Did mount')
  }
  render(){
      // console.log('Render called')
      return (
        <div>
          <h1>Hear About us!</h1>
          <UserClass
            name={'Deepanshu Sahu (class)'}
            location={'Amla'}
            contact={'dee777'}
          />
        </div>
      )
    }
}

export default About;