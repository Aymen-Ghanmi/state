import React, { Component } from 'react';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: 'Johnny Depp',
            bio: 'John Christopher Depp II is an American actor and musician.',
            imgSrc: 'https://www.hollywoodreporter.com/wp-content/uploads/2015/06/johnny_depp_dior.jpg?w=2000&h=1126&crop=1',
            profession: 'Actor',
            timer : 0
          }} ;

componentDidMount() {
        console.log("Component Did Mount.")
        setInterval(() => {
          this.setState((prevState) => ({timer: prevState.timer + 1}))
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Component Did Update.")
    }

    componentWillUnmount() {
        console.log("Component Will Unmount.")
    }
        


        
        /*   toggleProfile = () => {
            this.setState(prevState => ({
              shows: !prevState.shows,
            }));
          }; */

  render() {
    return (
      <div >
       <h1>{this.state.fullName}</h1>
       <p>{this.state.bio}</p>
       <img style={{width:"190px"}} src={this.state.imgSrc}></img>
       <h1>{this.state.profession}</h1>
       <p>{this.state.timer}</p>
      </div>
    )
  }
}
