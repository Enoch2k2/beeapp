import React, {Component} from 'react';
import {Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../css/Home.css';
class Home extends Component {
  render(){
    return (
      <Grid>
        <Row>
          <Col lg={8} md={8} sm={8} lgOffset={2} mdOffset={2} smOffset={2}>
            <Jumbotron>
              <h1>Bee Node</h1>
              <h3>Bee Research and survey website</h3>
              <p>Already have an account? Log in <NavLink to="login">here</NavLink></p>
              <p>Create an account <NavLink to="signup">here</NavLink></p>
            </Jumbotron>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.session.user
  }
}

export default connect(mapStateToProps)(Home);
