import React from 'react';
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Team from '../components/team'
class MainContent extends React.Component {
    render() {
        return (
            <>
                <Navbar />
                {this.props.children}
                <Team />
                <Footer />
            </>
        )
    }
}
export default MainContent