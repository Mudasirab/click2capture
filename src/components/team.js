import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Team extends React.Component {
    render(props) {

        return (
            <>

                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={3}>
                            <div class="member" align="center">

                                <img class="img-responsive" src="#" alt="" />

                                <h4><a href="#w">John Doe</a></h4>

                                <p>Short description about how cool John Doe is!</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div class="member" align="center">

                                <img class="img-responsive" src="#" alt="" />

                                <h4><a href="#W">John Doe</a></h4>

                                <p>Short description about how cool John Doe is!</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3}>

                            <div class="member" align="center">

                                <img class="img-responsive" src="#" alt="" />

                                <h4><a href="#w">John Doe</a></h4>

                                <p>Short description about how cool John Doe is!</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div class="member" align="center">

                                <img class="img-responsive" src="#" alt="" />

                                <h4><a href="#w">John Doe</a></h4>

                                <p>Short description about how cool John Doe is!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ >

        )
    }
}


export default Team