import React, { Component } from 'react';
import './Events.css';
import firebase from '../../config/fbConfig.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { createEvent } from '../../store/actions/eventAction.js';
import { BrowserRouter, withRouter } from "react-router-dom";
import Rodal from 'rodal';
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";




class EventList extends Component {

  constructor(props) {
      super(props)
      this.state= {
            inputName: props.profile.isLoaded && !props.profile.isEmpty ? `${props.profile.firstName} ${props.profile.lastName} ` : "",
            visible:false,
      };
      console.log(props.profile)
      this.hide=this.hide.bind(this);

  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.profile.isLoaded && !this.props.profile.isEmpty) {
    this.props.createEvent(this.state) }
    else{
      return(
      this.setState({ visible: true })

      )
    }
  }

  hide() {
      this.setState({ visible: false });
  }

  componentDidUpdate(prevProps){

    if (!prevProps.profile.isLoaded && this.props.profile.isLoaded && !this.props.profile.isEmpty ) {
      this.setState( {
        inputName: `${this.props.profile.firstName} ${this.props.profile.lastName}`

      })
    }

  }






render () {




  return (

    <div className="container-fluid no-left-padding no-right-padding latest-events-section">

      <div className="container">

        <div className="section-header text-center">
          <h3>Latest Events</h3>
          <h4>DO NOT MISS</h4>
        </div>

        <form onSubmit={this.handleSubmit} className="row">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="events-item">
                <img src="assets/images/EventsImage.jpg" alt="Event" />
                <div className="event-content">
                  <h4>Special Organic Argentinan Wines</h4>
                  <p>Join us on special wine-taste night of exotic organic selection.</p>
                  <span><i className="fa fa-clock-o"></i> June 12,2016 07:30 pm </span>
                 <input type="submit" value="book now" ></input>
                 <Rodal visible={this.state.visible} onClose={this.hide} className="rodal-content" height="200">

                         <h2>WE ARE SORY</h2>
                         <h1>You need to Login. </h1>
                         <p>Or create an account, it'svery simple!</p>
                         <Link to="/signin">
                           <ButtonContainer
                           >
                             Login
                           </ButtonContainer>
                         </Link>
                         <Link to="/signup">
                           <ButtonContainer
                           >
                             SignUp
                           </ButtonContainer>
                         </Link>

                 </Rodal>
                </div>
              </div>
            </div>


          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="events-item">
              <img src="assets/images/EventsImage.jpg" alt="Event" />
              <div className="event-content">
                <h4>Special Organic Argentinan Wines</h4>
                <p>Join us on special wine-taste night of exotic organic selection.</p>
                <span><i className="fa fa-clock-o"></i> June 12,2016 07:30 pmm</span>

                <input type="submit" value="book now" onSubmit={this.handleSubmit}></input>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="events-item">
              <img src="assets/images/EventsImage.jpg" alt="Event" />
              <div className="event-content">
                <h4>Special Organic Argentinan Wines</h4>
                <p>Join us on special wine-taste night of exotic organic selection.</p>
                <span><i className="fa fa-clock-o"></i> June 12,2016 07:30 pm</span>

                <input type="submit" value="book now" onSubmit={this.handleSubmit}></input>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>


  )

}
}



const mapDispatchToProps = dispatch => {
  return {
    createEvent: (event) => dispatch(createEvent(event))
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{

    profile: state.firebase.profile
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(EventList)

// export default EventList;
