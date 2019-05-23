import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div>
      <div className="clearfix"></div>
      <div className="container-fluid no-left-padding no-right-padding book-table-section-2">

        <div className="container">

          <div className="section-header text-center">
            <h3>Login</h3>
            <h4>WELCOME BACK</h4>
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
              <div className="col-md-12 col-sm-12 col-xs-12 send-btn">
                <input type="submit" value="LOGIN"></input>
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
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
