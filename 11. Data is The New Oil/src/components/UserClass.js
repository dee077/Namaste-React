import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log('Child Constructor called')
        this.state = {
            userInfo: {
                name: 'defaultName',
                location: 'defaultLocation',
            }
        }
    }
    async componentDidMount(){
        // console.log('Child Component did mount')
        const data = await fetch(GITHUB_USER_API)
        const json = await data.json()
        this.setState({
            userInfo: json,
        })
        console.log(json)
    }
    render(){
        // console.log('Child render called')
        const {name, location, avatar_url} = this.state.userInfo;
        return (
          <div className="user-card">
            <img src={avatar_url} alt="github profile" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: +91 9123456789</h4>
          </div>  
        );
    }
}

export default UserClass;