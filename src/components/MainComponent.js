import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        //setState is for current data or object
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        return (
            <div>
                <Header dark color="primary">
                    <div className="container">
                        {/* <NavbarBrand href="/">NuCamp</NavbarBrand> */}
                    </div>
                </Header>
                {/* Pass onClick handler arrow function as a prop from directory component */}
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
                <Footer />
            </div>
        );
    };
}

export default Main;