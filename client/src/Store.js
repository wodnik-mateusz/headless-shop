import React, { Component, createContext } from 'react';
import {wpAPI, wcAPI, rootURL, wooCommerceCredentials, encoder} from './config'

const StoreContext = createContext('StoreContext')
export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer

class Store extends Component {
    state = {
        topNav: [],
        gallery: [],
        products: [],
        categories: [],
    }
    componentDidMount() {
        // Fetch top navigation
        fetch(`${rootURL}/menus/v1/menus/top`)
            .then(res => res.json())
            .then(topNav => this.setState({topNav: topNav.items}))
            .catch(console.error)
    }
    render() {
        const {state, getGallery, getProducts, getCategories} = this
        return (
            <StoreProvider value={{
                ...state,
                actions: {
                    getGallery,
                    getProducts,
                    getCategories,
                }
            }}>{this.props.children}</StoreProvider>
        )
    }
    getGallery = () => {
        // Fetch gallery images urls
        wpAPI("media?parent=1621")
            .then(gallery => this.setState({gallery}))
            .catch(console.error)
    }
    getProducts = () => {
        wcAPI("products")
            .then(products => this.setState({products}))
            .catch(console.error)
    }
    getCategories = () => {
        wcAPI("products/categories")
            .then(categories => this.setState({categories}))
            .catch(console.error)
    }
}

export default Store;