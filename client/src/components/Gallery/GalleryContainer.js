import React, {Component} from 'react';
import Gallery from './Gallery';
import {StoreConsumer} from '../../Store';

class GalleryContainer extends Component {
    componentDidMount() {
        this.props.context.actions.getGallery()
    }
    render = () => <Gallery data={this.props.context.gallery}/>
}


export default React.forwardRef((props, ref) => (
	<StoreConsumer>
		{context => <GalleryContainer {...props} context={context} ref={ref} />}
	</StoreConsumer>
));