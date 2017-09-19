import React, {Component} from 'react';
import {Grid, Row, Col, PageHeader, Form, FormGroup, FormControl, Checkbox, Button, ControlLabel} from 'react-bootstrap';
import '../css/LogIn.css';
export default class SignUp extends Component {
  render(){
    return(
      <Grid>
        <Row>
          <Col lg={8} md={8} sm={8} lgOffset={2} mdOffset={2} smOffset={2} className="white">
            <PageHeader>Sign Up</PageHeader>
            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="password" placeholder="Password" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    )
  }
}
