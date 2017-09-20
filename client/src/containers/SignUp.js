import React, {Component} from 'react';
import {Grid, Row, Col, PageHeader, FormGroup, Button, ControlLabel} from 'react-bootstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {signUp} from '../actions';
import 'node-fetch';
import '../css/LogIn.css';
class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render(){
    return(
      <Grid>
        <Row>
          <Col lg={8} md={8} sm={8} lgOffset={2} mdOffset={2} smOffset={2} className="white">
            <PageHeader>Sign Up</PageHeader>
            <form className='form-horizontal' onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <input className='form-control' value={this.state.email} onChange={this.handleChange} name="email" type="email" placeholder="Email" id="formHorizontalEmail" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <input className='form-control' value={this.state.password} onChange={this.handleChange} name="password" type="password" placeholder="Password" id="formHorizontalPassword" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    session: state.sessions
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({signUp}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
