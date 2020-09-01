import React from 'react'
import Container from 'react-bootstrap/Container'
import { NavLink } from "react-router-dom";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faGoogle,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
const links = [

    { "name": "Landscape ", "value": "Landscape" },
    { "name": "Portrait ", "value": "Portrait" },
    { "name": "Wildlife ", "value": "Wildlife" },
    { "name": "Macro ", "value": "Macro" },
    { "name": "Photojournalism ", "value": "Photojournalism" },
    { "name": "Architectural ", "value": "Architectural" },
    { "name": "Nature ", "value": "Nature" },
    { "name": "Night ", "value": "Night" },
    { "name": "Travel ", "value": "Travel" },
    { "name": "Sports ", "value": "Sports" },
    { "name": "Fashion ", "value": "Fashion" },
    { "name": "Baby ", "value": "Baby" },
    { "name": "Abstract ", "value": "Abstract" },
    { "name": "Bird ", "value": "Bird" },
    { "name": "Food ", "value": "Food" },
    { "name": "HDR ", "value": "HDR" },
    { "name": "Mobile ", "value": "Mobile" },
    { "name": "Aerial ", "value": "Aerial" },
]
class Footer extends React.Component {
    render(props) {

        return (
            <footer name="title">
                <div className="container">
                </div>
                <Container fluid="md">
                    <Row>
                        <Col xs={6} md={3}><h6>categories</h6>
                            <p align="left" className="footer_menu_link link_cat">
                                {links.map(index => {
                                    return <NavLink className="allPhotos_links" to={{
                                        pathname: "/AllPhotos",
                                        aboutProps: {
                                            name: index.value
                                        }
                                    }}>{index.name}</NavLink>


                                })}

                            </p></Col>
                        <Col xs={6} md={3}>2 of 4</Col>
                        <Col xs={6} md={3}>
                            <h6>Useful links</h6>
                            <p className="footer_menu_link"><NavLink to="/">Home</NavLink> <NavLink to="#photos">Photos</NavLink> <NavLink to="#team">Team</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                                <NavLink to="/uplad/upload-photos">Upload</NavLink>

                            </p>

                        </Col>
                        <Col xs={6} md={3}>
                            <h6>About us</h6>
                            <p>text goes here</p>
                            <div className="social">
                                <a href="#facebook" className="fb_style"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#insta" className="insta_style"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#google" className="google_style"><FontAwesomeIcon icon={faGoogle} /></a>
                                <a href="#twitter" className="twiter_style"><FontAwesomeIcon icon={faTwitter} /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer >

        )
    }
}


export default Footer