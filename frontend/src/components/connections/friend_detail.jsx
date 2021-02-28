import React from 'react';
import {Link} from 'react-router-dom';
//maybe a loading icon

class FriendDetail extends React.Component{

  constructor(props){
    super(props); 
    this.state = {
      friend: this.props.friend
    }
  }
  componentDidMount(){
    this.setState({friends: this.props.friends});
  }
  
  componentDidUpdate(prevProps){
    if (prevProps.match.params.friendId !== this.props.match.params.friendId){
      this.setState({friends: this.props.friends});
      console.log("updated");

    }
  }

  render(){
    // if(this.props.loading){
      // return <section className="profile-detail"><LoadingIcon /></section>;
    // }

    if(!this.props.friend) return null; 

    return (
      <div className='friend-detail'>
        <div className='friend-container'>
          <div className='friend-card'>
            <div className='friend-image-container'>
              <img src={this.props.friend.imageUrl} />

            </div>
            <div className='friend-user-details'>
              <h1>{this.props.friend.name}</h1>
            </div>
            <div className='friend-user-details'>
              <p className='friend-user-info loc' ><img className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/worldwide-location--v2.png" />{this.props.friend.city}</p>
            </div>
            <div className='friend-user-details'>
              <p className='friend-user-info' >Education<img className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/graduation-cap--v2.png" /></p>
              <h2>{this.props.friend.education}</h2>
            </div>
            <div className='friend-user-details'>
              <p className='friend-user-info' >Occupation<img className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/briefcase--v1.png" /></p>
              <h2>{this.props.friend.occupation}</h2>
            </div>
            <div className='friend-user-details'>
              <p className='friend-user-info'  >Industry<img className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/company.png" /></p>
              <h2>{this.props.friend.industry}</h2>
            </div>
            <div className='friend-user-details'>
              <p className='friend-user-info' >About Me<img  className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/name--v2.png" /></p>
              <h2>{this.props.friend.aboutMe}</h2>
            </div>
            <div className='friend-user-details'>
              <p className='friend-user-info' >Links<img  className='friend-user-icon' src="https://img.icons8.com/cotton/64/000000/external-link.png" /></p>
              <div className='friend-links'> 
                <img className='friend-links img' src="https://img.icons8.com/color/48/000000/linkedin.png" />
                <h2>{this.props.friend.linkedIn}</h2> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FriendDetail;
        // <ul>
        //   <li><h2>{this.props.friend.name}</h2></li>
        //   <li>City: {this.props.friend.city}</li>
        //   <li>Email: {this.props.friend.email}</li>
        //   <li>Occupation: {this.props.friend.occupation}</li>
        //   <li>Industry: {this.props.friend.industry}</li>
        //   <li>Education: {this.props.friend.education}</li>
        //   <li>About Me: {this.props.friend.aboutMe}</li>
        //   <li>LinkedIn: {this.props.friend.linkedIn}</li>
        //   <li>Recruiter: {this.props.friend.recruiterStatus}</li>
        // </ul>