import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { apiService } from '../services'
import MainContent from '../containers/main'
import { toast } from 'react-toastify';
const { formatError, validationError } = require('../components/helpers/helper');
const Joi = require('joi');
var schema = Joi.object().keys({
    email: Joi.string().email({ minDomainAtoms: 2 }),
    name: Joi.string().required(),
    message: Joi.string().required(),
});
class Contact extends React.Component {
    state = {
        email: "",
        name: "",
        message: "",
        error_email: "",
        error_name: "",
        error_message: "",
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
    handleClickToLogin = async () => {
        try {
            const { email, name, message } = this.state
            const err = Joi.validate({ email, name, message }, schema, { abortEarly: false }).error;
            if (err) {
                let errObj = validationError(formatError(err.details));
                this.setState({
                    ...this.state,
                    ...errObj.errors.data
                });
            }

            else {
                const data = { email, name, message };
                const addComment = await apiService.post('comments/addComment', data)
                if (addComment.data.message === 'success') {
                    toast.success("Your message has been sent")
                    this.setState({
                        name: '',
                        email: '',
                        message: ''
                    })
                }
                else {
                    toast.error("Something went wrong!")
                }
            }

        }
        catch (err) {

        }

    }
    render() {
        const { email, name, message, error_email, error_name, error_message } = this.state

        return (
            <MainContent {...this.props}>
                <div className="contact" id="contact">
                    <div className="container">

                        <div className="default-heading">

                            <h2>Contact Us</h2>


                        </div>

                        <div className="contact-container">
                            <div className="row">
                                <div className="col-md-5 col-sm-6">

                                    <h3>Contact Form</h3>
                                    <Form >
                                        <Form.Group >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control className="inp_style" name="name" value={name} type="text" onChange={e => this.onChangeListenerLogin(e)} required placeholder="Enter Name" />
                                            {(error_name !== '') ? <span className="errorLabel">{error_name}</span> : ''}

                                        </Form.Group>
                                        <Form.Group >
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control className="inp_style" name="email" type="email" value={email} onChange={e => this.onChangeListenerLogin(e)} required placeholder="Enter email" />
                                            {(error_email !== '') ? <span className="errorLabel">{error_email}</span> : ''}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control className="inp_style" as="textarea" name="message" value={message} onChange={e => this.onChangeListenerLogin(e)} rows="3" placeholder="Enter Message" />
                                            {(error_message !== '') ? <span className="errorLabel">{error_message}</span> : ''}

                                        </Form.Group>

                                        <div className="form-group">
                                            <Button className="btn_load sendMsg" onClick={this.handleClickToLogin}>Send
									Message</Button>
                                        </div>
                                    </Form>
                                </div>
                                <div className="col-md-3 col-sm-6">

                                    <h3>Address</h3>

                                    <p className="address">Dadoora<br />
                                        Pulwama<br />
                                        Kashmir, 192301</p>
                                    <br />

                                    <h3>Phone</h3>

                                    <p className="address">+919999999</p>
                                    <br />

                                    <h3>Email</h3>

                                    <p className="address"><a href="#jj">click2capture@gmail.com</a></p>
                                </div>
                                <div className="col-md-4">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6626.029262676646!2d74.8713027!3d33.8635138!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1f389a78ae0eb%3A0xf076a42d9a7d8807!2sDadoora%2C%20192301!5e0!3m2!1sen!2sin!4v1593254774280!5m2!1sen!2sin"
                                        title="Dadora"
                                        className="map_iframe"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainContent>
        )
    }
}
export default Contact