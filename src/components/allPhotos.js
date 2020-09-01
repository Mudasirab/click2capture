import React from "react";
import img1 from '../images/6.jpg'
import img2 from '../images/112.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/12.jpg'
import MainContent from '../containers/main'
const obj = [
    { "url": img1, "title": "Nature", "name": "1" },
    { "url": img2, "title": "Night", "name": "2" },
    { "url": img3, "title": "Architectural", "name": "3" },
    { "url": img4, "title": "Travel", "name": "4" },
    { "url": img1, "title": "Nature", "name": "5" },
    { "url": img2, "title": "Night", "name": "6" },
    { "url": img3, "title": "Nature", "name": "7" },
    { "url": img3, "title": "Architectural", "name": "8" },
    { "url": img4, "title": "title", "name": "9" },
]
// const buttons = [
//     { "name": "All", "value": "All" },
//     { "name": "Landscape ", "value": "Landscape" },
//     { "name": "Portrait ", "value": "Portrait" },
//     { "name": "Wildlife ", "value": "Wildlife" },
//     { "name": "Macro ", "value": "Macro" },
//     { "name": "Photojournalism", "value": "Photojournalism" },
//     { "name": "Architectural ", "value": "Architectural" },
//     { "name": "Nature ", "value": "Nature" },
//     { "name": "Night ", "value": "Night" },
//     { "name": "Travel ", "value": "Travel" },

//     // { "name": "Sports ", "value": "Sports" },
//     // { "name": "Fashion ", "value": "Fashion" },
//     // { "name": "Baby ", "value": "Baby" },
//     // { "name": "Abstract ", "value": "Abstract" },
//     // { "name": "Bird ", "value": "Bird" },
//     // { "name": "Food ", "value": "Food" },
//     // { "name": "HDR ", "value": "HDR" },
//     // { "name": "Mobile ", "value": "Mobile" },
//     // { "name": "Aerial ", "value": "Aerial" },
// ]
class AllPhotos extends React.Component {
    state = {
        break: true,
        display: "none",
        limitItems: 9,
        fullImage: '',
        items: obj,
        filterName: this.props.location.aboutProps,
        loadingState: false,
        filterItems: [],
    }
    handleClick = (e) => {

        this.setState({
            fullImage: e.target.src,
            display: "block"
        })
    }
    handleClose = () => {
        this.setState({
            display: "none"
        })
    }
    loadMorePhotos = () => {
        this.setState({

            loadingState: true
        })
        setTimeout(() => {
            this.setState({ limitItems: this.state.limitItems + 6, loadingState: false });
        }, 1000);
    }

    renderGallery = () => {

        return this.state.filterItems.slice(0, this.state.limitItems).map(index => {
            return <div className="row_grid-1" key={index.index}>
                <div className="box_row">
                    <div className="link_image" >
                        <div style={{ display: this.state.display }} className="cm-overlay_img link_image">
                            <div className="inner_overlay">
                                <span className="close_icon" onClick={this.handleClose} >&times;</span>
                                <img id="img_overlay" alt="" src={this.state.fullImage} />
                            </div>
                        </div>

                        {/* <span className="author_name">Author</span> */}
                        <img src={index.url} alt=" " className="image-responsive-gal" onClick={this.handleClick} />
                        <div className="overlay_text_label">
                            <h5>{index.title}</h5><br />
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    static getDerivedStateFromProps(props, state) {

        return {
            filterName: props.location.aboutProps && props.location.aboutProps.name,
            filterItems: state.items.filter(
                items => items.title === state.filterName)

        }

    }

    componentDidMount() {
        this.renderGallery()
        this.setState({
            filterItems: this.state.items
        });
    }
    render() {
        // console.log("state name", this.state.filterName)
        // console.log("filtered ", this.state.filterItems)
        return (
            <MainContent {...this.props}>
                <div className="container_main" id="photos">
                    <h2 className="title" align="center">Latest photos</h2>

                    <div className="gallery_grid_row load_box">
                        {this.renderGallery()}
                    </div>
                    <div align="center" className="load_box">{!this.state.loadingState ? <button className="btn_load" onClick={this.loadMorePhotos}>Load more</button> : <button className="btn_load" onClick={this.loadMorePhotos}>Loading...</button>}</div>

                </div>




            </MainContent>

        )
    }
}



export default AllPhotos

