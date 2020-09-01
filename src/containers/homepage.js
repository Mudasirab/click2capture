import React from 'react';
import Banner from '../components/banner'
import PhotoGallery from '../components/photoGallery'
import MainContent from './main'
class HomePage extends React.Component {
    render() {
        return (
            <MainContent {...this.props}>
                <Banner />

                <PhotoGallery />
            </MainContent>
        )
    }
}
export default HomePage