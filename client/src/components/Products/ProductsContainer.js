import React, {Component} from 'react';
import Products from './Products';
import styles from './Products.sass'
import {StoreConsumer} from '../../Store';
import FiltersContainer from './elements/Filters/FiltersContainer';

class ProductsContainer extends Component {
    state = {
        query: "",
        qu: {}
    }

    componentDidMount() {
        this.props.context.actions.getProducts()
        this.props.context.actions.getCategories()
        this.props.context.actions.getAttributes()
        this.props.context.actions.getTags()
        this.props.history.push("?attribute=1")
    }
    
    render() {
        const { categories, attributes, tags, products } = this.props.context
        return(
            <main className={styles.container}>
                <FiltersContainer handleFilters={this.handleFilters} sections={{categories, attributes, tags}} />
                <Products data={products} />
            </main>
        )
    }

    handleFilters = (e) => {
        const {checked, id, dataset} = e.target
        const attribute = dataset.attribute
        const qu = {...this.state.qu}
        // let updateQuery = `${filter.name === "attribute_term" ? "" : ""}${filter.name}=${filter.id}&`
        if(checked) {
            // this.setState((prevState) => ({query: prevState.query + updateQuery}))

            qu[attribute] = qu[attribute] ? [...qu[attribute], id] : [id]
        } else {
            qu[attribute] = qu[attribute].filter(item => item !== id)
            // this.setState((prevState) => ({query: prevState.query.replace(updateQuery, "")}))
        }
        this.setState({qu})
    }
}

export default React.forwardRef((props, ref) => (
	<StoreConsumer>
		{context => <ProductsContainer {...props} context={context} ref={ref} />}
	</StoreConsumer>
));