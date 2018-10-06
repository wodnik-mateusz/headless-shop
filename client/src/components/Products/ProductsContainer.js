import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Products from './Products';
import styles from './Products.sass'
import {StoreConsumer} from '../../Store';
import FiltersContainer from './elements/Filters/FiltersContainer';

class ProductsContainer extends Component {
    state = {
        query: {},
    };

    componentDidMount() {
        const {
            context: {
                actions: {
                    getProducts,
                    getCategories,
                    getAttributes,
                    getTags,
                }
            },
            location: {search}
        } = this.props;

        getProducts(search);
        getCategories();
        getAttributes();
        getTags();
        window.addEventListener("scroll", this.handleScroll);
    }

    componentDidUpdate(prevProps) {
        // Fetch filtered products on route query change
        if (this.props.location.search !== prevProps.location.search) {
            this.props.context.actions.getProducts(this.props.location.search)
        }
    }
    
    render() {
        const { categories, attributes, tags, products } = this.props.context
        const {url} = this.props.match
        return(
            <main className={styles.container}>
                <FiltersContainer handleFilters={this.handleFilters} sections={{categories, attributes, tags}} />
                <Products data={products} />
                {console.log(this.props)}
                <button onClick={this.handlePageChange} >Next page</button>
            </main>
        )
    }

    handleScroll = (e) => {
        // console.log(e)
        const viewportHeight = window.innerHeight
        const bodyHeight = document.body.scrollHeight
        const footerTop = document.querySelector("#footer").offsetTop
        console.log(viewportHeight,bodyHeight,footerTop)
        if(e.pageY > footerTop - viewportHeight) {
            console.log('elo')
            this.props.context.actions.getMoreProducts(`${this.props.location.search}?&offset=${this.props.context.products.length}`)
        }
    }

    handleFilters = (e) => {
        const {checked, id, dataset, name} = e.target;
        const attribute = dataset.attribute || name;
        const query = {...this.state.query};

        if(checked) {
            query[attribute] = query[attribute] ? [...query[attribute], id] : [id]
        } else {
            query[attribute] = query[attribute].filter(item => item !== id)
        }
        // Remove empty attributes
        if(!query[attribute].length) delete query[attribute];
        this.setState({query}, () => {
            const query = this.state.query;
            // If query items are empty push history to initial route
            if(!Object.keys(query).length) return this.props.history.push("/shop");
            let str = "?";
            for(let i in query) {
                if(i.slice(0, 3) === "pa_") {
                    // Add attributes filters
                    str += `attribute=${i}&attribute_term=${query[i].join()}&`;
                } else {
                    // add category and other filters
                    str += `${i}=${query[i].join()}&`;
                }
            }
            // Add query to route
            this.props.history.push(str);
        })
    }
}

export default React.forwardRef((props, ref) => (
	<StoreConsumer>
		{context => <ProductsContainer {...props} context={context} ref={ref} />}
	</StoreConsumer>
));