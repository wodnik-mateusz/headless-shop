import React, {Component} from 'react';
import Products from './Products';
import {StoreConsumer} from '../../Store';
import Filters from './elements/Filters/Filters';
import {MdFilterList} from 'react-icons/md';

class ProductsContainer extends Component {
    state = {
        showFilters: true,
    }
    componentDidMount() {
        this.props.context.actions.getProducts()
        this.props.context.actions.getCategories()
    }
    
    render = () => (
        <Products data={this.props.context.products}>
            <button id="toggleFilters" onClick={this.handleToggle}><MdFilterList /></button>
            {this.state.showFilters && <Filters data={this.props.context.categories} handleFilters={this.handleFilters} />}
        </Products>
    )

    handleFilters = (filter) => {
        console.log(filter)
    }
    handleToggle = () => {
        this.setState({showFilters: !this.state.showFilters})
    }
}

export default React.forwardRef((props, ref) => (
	<StoreConsumer>
		{context => <ProductsContainer {...props} context={context} ref={ref} />}
	</StoreConsumer>
));