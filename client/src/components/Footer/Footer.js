import React, {Component} from 'react';
import styles from './Footer.sass';
import Top from './elements/Top/Top';
import Middle from './elements/Middle/Middle';
import Map from './elements/Map/Map';
import Copyrights from './elements/Copyrights/Copyrights';

class Footer extends Component {
    state = {showMap: false}

    toggleMap = () => this.setState({showMap: !this.state.showMap})

    render = () =>(
        <footer className={styles.footer}>
            <Top />
            <Middle toggleMap={this.toggleMap}/>
            {this.state.showMap && <Map />}
            <Copyrights />
        </footer>
    );
}

export default Footer;