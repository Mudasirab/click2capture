import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import backImg from '../../images/1.jpg'
import MainContent from '../../containers/main'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//     faGoogle,
//     faFacebook,
//     faTwitter
// } from '@fortawesome/free-brands-svg-icons';
const categories = [
    { "name": "Landscape Photography", "value": "Landscape" },
    { "name": "Wildlife Photography", "value": "Wildlife" },
    { "name": "Nature Photography", "value": "Nature" },
    { "name": "Night Photography", "value": "Night" },
    { "name": "Travel Photography", "value": "Travel" },
    { "name": "Sports / Action Photography", "value": "Sports / Action" },
    { "name": "Portrait Photography", "value": "Portrait" },
    { "name": "Architectural Photography", "value": "Architectural" },
    { "name": "Wedding Photography/Event Photography", "value": "Wedding/Event" },
    { "name": "Fashion Photography", "value": "Fashion" },
    { "name": "Macro Photography", "value": "Macro" },
    { "name": "Baby Photography", "value": "Baby" },
    { "name": "Abstract Photography", "value": "Abstract" },
    { "name": "Bird Photography", "value": "Bird" },
    { "name": "Food Photography", "value": "Food" },
    { "name": "HDR Photography", "value": "HDR" },
    { "name": "Mobile Photography", "value": "Mobile" },
    { "name": "Aerial photography", "value": "Aerial" },

]
class Upload extends React.Component {
    handleChange = (e) => {
        console.log("name and value ", e.target.value, e.target.name)
    }
    render() {
        return (
            <MainContent {...this.props}>
                <Container fluid>
                    <Row>
                        <Col md={6} sm={12} lg={6} xs={12} className="login_form">

                            <h3 align="center" className="form_heading">Upload photos</h3>

                            <Form>

                                <Form.Group >
                                    <Form.Label>Your name</Form.Label>
                                    <Form.Control className="inp_style" type="text" required placeholder="Name" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control className="inp_style" type="email" required placeholder="example@gmail.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>Select category</Form.Label>
                                    <Form.Control className="inp_style " name="category" as="select" custom onChange={this.handleChange} >
                                        {categories.map(index => {
                                            return <option key={index.value} value={index.value} >{index.name}</option>
                                        })}

                                    </Form.Control>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control className="inp_style" type="text" required placeholder="Title" />
                                </Form.Group>
                                <Form.File>
                                    <Form.File.Label>Select photo</Form.File.Label>
                                    <Form.File.Input multiple className="inp_style" />
                                </Form.File>
                                <div align="center" className="form-group btn_top">
                                    <Button className="btn_load btn_login">Submit
    </Button>

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
export default Upload
