import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import backImg from '../../images/1.jpg'
import MainContent from '../../containers/main'
import {
    faGoogle,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
const { formatError, validationError } = require('../helpers/helper');
const Joi = require('joi');
var schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    password: Joi.string().min(3).max(8).required(),
});
class Login extends React.Component {
    state = {
        email: "",
        password: "",
        error_email: "",
        error_password: "",
        error: ""
    }
    onChangeListenerLogin = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
            [`error_${e.target.name}`]: (e.target.value === '') ? `${e.target.name} is required` : ''
        })
    };
    handleClickToLogin = () => {
        try {
            const { email, password } = this.state
            const err = Joi.validate({ email, password }, schema, { abortEarly: false }).error;
            if (err) {
                let errObj = validationError(formatError(err.details));
                this.setState({
                    ...this.state,
                    ...errObj.errors.data
                });
            }
            else {
                if (email === "mudasir@gmail.com" && password === "123456") {
                    window.location.href = `/`;
                    //this.props.history.push(`/admin/Dashboard`);
                    //  this.props.history.pushState(null, null);
                    //   window.onpopstate = function(event) {
                    //     this.props.history.go(1);
                    //   };

                }
            }

        }
        catch (err) {

        }

    }
    render() {
        const { email, password, error_email, error_password } = this.state

        return (
            <MainContent {...this.props}>
                <Container fluid>
                    <Row>
                        <Col md={6} sm={12} lg={6} xs={12} className="login_form">

                            <h3 align="center" className="form_heading">Sign in</h3>
                            <div align="center" className="form_icons"><FontAwesomeIcon className="fb_login_icon" icon={faFacebook} />
                                <FontAwesomeIcon className="google_login_icon" icon={faGoogle} />
                                <FontAwesomeIcon className="twitter_login_icon" icon={faTwitter} />
                            </div>
                            <h6 align="center" >or use your account</h6>
                            <Form>
                                <Form.Group >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control className="inp_style" name="email" value={email} type="email" onChange={e => this.onChangeListenerLogin(e)} required placeholder="example@gmail.com" />
                                    {(error_email !== '') ? <span className="errorLabel">{error_email}</span> : ''}
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className="inp_style" name="password" value={password} type="password" onChange={e => this.onChangeListenerLogin(e)} required placeholder="Password" />
                                    {(error_password !== '') ? <span className="errorLabel">{error_password}</span> : ''}
                                </Form.Group>
                                <h6 align="center" >Forget your password?</h6>
                                <div align="center" className="form-group">
                                    <Button className="btn_load btn_login" onClick={this.handleClickToLogin}>Login
    </Button>
                                    <h6 align="center" >Don't have account Sign up</h6>
                                </div>
                            </Form>
                        </Col>
                        <Col sm={12} md={6} className="col-md-6 col-sm-12 left_login_pannel" >
                            <div className="login_back" style={{
                                backgroundImage: `url(${backImg})`,
                                backgroundRepeat: "no repeat",
                                backgroundPosition: "center",
                                backgroundAttachment: "initial",

                                backgroundSize: "cover"
                            }}></div>
                        </Col>
                    </Row>
                </Container>
            </MainContent>
        )
    }
}
export default Login
