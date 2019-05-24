import React, { Component } from 'react';
import firebase from '../../config/fbConfig.js';
import { connect } from 'react-redux'
import { createBooking } from '../../store/actions/bookAction.js'
import styled from "styled-components";
import { BrowserRouter, withRouter } from "react-router-dom";
import DataService from "../../services/dataService.js"
import Rodal from 'rodal';
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import "./Rodal.css";
import DatePicker from 'react-datepicker';
import './react-datepicker.css';
// import "react-datepicker/dist/react-datepicker.css";





class FormBook extends Component {

  constructor(props) {
      super(props)
      this.state= {
            inputName: props.profile.isLoaded && !props.profile.isEmpty ? `${props.profile.firstName} ${props.profile.lastName} ` : "",
            inputPhone: "",
            inputPeople: "",
            inputDate: "",
            visible1: false,
            visible2: false,
            showCloseButton: true,
            closeMaskOnClick:true,
            dateReserved: []


      };
      console.log(props.profile)

      this.hide1=this.hide1.bind(this);
      this.hide2=this.hide2.bind(this);

  }


  hide1() {
      this.setState({ visible1: false });
  }

  hide2() {
      this.setState({ visible2: false });
  }

  handleChange = (date) => {
      this.setState({
        inputDate: date
      });
    }



inputBookChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value

  });
}


handleSubmit = (e) => {
  e.preventDefault();
if (this.props.profile.isLoaded && !this.props.profile.isEmpty) {
  this.props.createBooking(this.state)

  this.setState ({
    visible1: true,
    inputName: "",
    inputPhone: "",
    inputPeople: "",
    inputDate: "",

  })
}

    else {
      this.setState({ visible2: true });

    }
  }

async componentDidMount (){
    const tables = await DataService.getAvailableTables()
    const dateReserved = tables.map((table)=>{
      return new Date(table.inputDate)
    })
    this.setState({
      dateReserved
    })
  console.log(dateReserved)
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
    <div>
    <div className="clearfix"></div>
    <div className="container-fluid no-left-padding no-right-padding book-table-section">

      <div className="container">

        <div className="section-header text-center">
          <h3>Book Your Table</h3>
          <h4>MAKE A RESERVATION</h4>
        </div>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="col-md-6 col-sm-6 col-xs-6 form-group">
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1"><i className="icon icon-Users"></i></span>
              <input onChange={this.inputBookChange} name="inputName" value={this.state.inputName} type="text"  className="form-control" placeholder="Name *" aria-describedby="basic-addon1"  ></input>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 form-group">
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon2"><i className="icon icon-Phone"></i></span>
              <input onChange={this.inputBookChange} name="inputPhone" value={this.state.inputPhone}  type="text" className="form-control" placeholder="Phone Number *" aria-describedby="basic-addon1"></input>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 form-group">
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon3"><i className="fa fa-table"></i></span>
              <input onChange={this.inputBookChange} type="text" name='inputPeople' value={this.state.inputPeople}  className="form-control" placeholder="Number of People *" aria-describedby="basic-addon1"></input>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 form-group">
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon4"><i className="fa fa-clock-o"></i></span>
              {
                //<input onChange={this.inputBookChange} type="Date" name='inputDate' value={this.state.inputDate} className="form-control" placeholder="Choose a Date *" aria-describedby="basic-addon1"></input>
              }
              <DatePicker className="form-control datepicker"

                  selected={this.state.inputDate}
                  onChange={this.handleChange}
                  excludeDates={this.state.dateReserved}
                  minDate={new Date()}
                  placeholderText="Choose a Date * "
                  popperModifiers={{
      offset: {
        enabled: true,
        offset: '5px, 10px'
      },
      preventOverflow: {
        enabled: true,
        escapeWithReference: false, // force popper to stay in viewport (even when input is scrolled out of view)
        boundariesElement: 'viewport'
      }
    }}
                   />
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 send-btn">
            <input type="submit" value="SUBMIT"></input>

            <Rodal visible={this.state.visible1} onClose={this.hide1} height="220" className="rodal-content">

                    <p> Hello {this.props.profile.firstName}!</p>
                    <h1>Thanks you for booking on R&G</h1>
                    <p>We'll see you soon.</p>


            </Rodal>
            <Rodal visible={this.state.visible2} onClose={this.hide2} height="200" className="rodal-content">

                    <div>WE ARE SORY</div>
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
        </form>

      </div>
    </div>
  </div>


  )

}
}

const mapDispatchToProps = dispatch => {
  return {
    createBooking: (book) => dispatch(createBooking(book))
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{

    profile: state.firebase.profile
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(FormBook)
