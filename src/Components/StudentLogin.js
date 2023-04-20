import axios from 'axios'
import { Component, useState } from 'react'
import './Login.css'
import { Form, Navigate } from 'react-router-dom'
import { Studentlogin } from '../services/StudentServices';
import { Alert, Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';



class StudentLogin extends Component {
    constructor() {
        super();
        this.state = {
            loginData: {},
            isLoggedIn: false
        }
    }


    handleChange = (event) => {
        this.setState({ loginData: { ...this.state.loginData, [event.target.name]: event.target.value } })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state.loginData);
        const response = Studentlogin(this.state.loginData);
        toast.promise(response, {
            loading: "Loading",
            success: <b>Login Successfull</b>,
            error: <b>Invalid Username or Password</b>
        })
        response.then((res) => {
            setTimeout(() => {
                this.setState({ isLoggedIn: true });
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', "student")
                localStorage.setItem('enrollment', this.state.loginData.enrollment)
            }, 500);
        })


    }

    render() {
        return (
            <>
                <Container className='text-center mt-3'>
                    <Toaster position="top-center" reverseOrder={false} />
                    <Alert variant='success'><h4>Student Login</h4></Alert>
                </Container>
                <Container className='text-center'>
                    {/* <Form > */}
                    <Row>
                        <Col lg={6} className="text-center">
                            <FormGroup className="mb-3">
                                <FormLabel><h5>Enter your Enrollment no.</h5></FormLabel>
                                <FormControl type="text" name="enrollment" placeholder='Enter enrollment' required="true" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col lg={6} className="text-center">
                            <FormGroup className="mb-3">
                                <FormLabel><h5>Enter your Password</h5></FormLabel>
                                <FormControl type="password" name="password" placeholder='Enter password' required="true" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button type='button' onClick={this.handleSubmit} className='btn btn-primary btn-large centerButton' >Login</Button>
                    {/* </Form> */}

                    {
                        this.state.isLoggedIn ? <Container id="Alert1"><Navigate to="/api/academics" replace={true} /><Alert variant='success'>
                            Logged in Successfull</Alert></Container>

                            : null
                    }
                </Container>

            </>
        );
    }
}
export default StudentLogin;