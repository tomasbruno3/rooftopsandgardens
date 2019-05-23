import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
    this.setState({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    })
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (

      <div>
      <div className="clearfix"></div>
      <div className="container-fluid no-left-padding no-right-padding book-table-section-2">

        <div className="container">

          <div className="section-header text-center">
            <h3>SignUp</h3>
            <h4>AND JOIN US</h4>
            </div>


            <form onSubmit={this.handleSubmit} className="row">
              <div className="col-md-6 col-sm-6 col-xs-6 form-group">
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon1"><i className="icon icon-Users"></i></span>
                  <input onChange={this.handleChange} type="email" id='email' value={this.state.email}  className="form-control" placeholder="email *" aria-describedby="basic-addon1"  ></input>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 form-group">
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon2"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span>
                  <input onChange={this.handleChange} type="password" id='password' value={this.state.password}  className="form-control" placeholder="password *" aria-describedby="basic-addon1"></input>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 form-group">
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon3"><i className="icon icon-Users"></i></span>
                  <input onChange={this.handleChange} type="text" id='firstName' value={this.state.firstName}  className="form-control" placeholder="first name *" aria-describedby="basic-addon1"  ></input>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 form-group">
                <div className="input-group">
                  <span className="input-group-addon" id="basic-addon4"><i className="icon icon-Phone"></i></span>
                  <input onChange={this.handleChange} type="text" id='lastName' value={this.state.lastName}  className="form-control" placeholder="last name *" aria-describedby="basic-addon1"></input>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12 send-btn">
                <input type="submit" value="SIGN UP"></input>
                <div className="center red-text">
                  { authError ? <p>{authError}</p> : null }
                </div>
              </div>
            </form>


          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
