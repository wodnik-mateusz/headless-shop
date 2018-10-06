import React, { Component, createContext } from 'react';
import {wpAPI, wcAPI, rootURL, wooCommerceCredentials, encoder} from './config'

const config = {
    productsNumber: 12,
    galleryPostId: 88
}

const StoreContext = createContext('StoreContext')
export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer

class Store extends Component {
    state = {
        topNav: [],
        gallery: [],
        products: [],
        categories: [],
        attributes: [],
        tags: [],
    };
    componentDidMount() {
        // Fetch top navigation
        fetch(`${rootURL}/menus/v1/menus/top`)
            .then(res => {
                if(res.status !== 200) throw res.statusText;
                return res.json()
            })
            .then(topNav => this.setState({topNav: topNav.items}))
            .catch(console.error)
    }
    render() {
        const {state, getGallery, getProducts, getMoreProducts, getCategories, getAttributes, getTags} = this;
        return (
            <StoreProvider value={{
                ...state,
                actions: {
                    getGallery,
                    getProducts,
                    getMoreProducts,
                    getCategories,
                    getAttributes,
                    getTags,
                }
            }}>{this.props.children}</StoreProvider>
        )
    }

    // ACTIONS
    getGallery = () => {
        // Fetch gallery images urls
        wpAPI(`media?parent=${config.galleryPostId}`)
            .then(gallery => this.setState({gallery}))
            .catch(console.error)
    };
    getProducts = (filter) => {
        // Set items number to fetch
        const query = `${filter}${filter ? "&" : "?"}per_page=${config.productsNumber}`;
        wcAPI(`products${query}`)
            .then(products => this.setState({products}))
            .catch(console.error)
    };
    getMoreProducts = (filter) => {
        const query = `${filter}${filter ? "&" : "?"}per_page=${config.productsNumber}`;
        wcAPI(`products${query}`)
            .then(products => this.setState({products: [...this.state.products, ...products]}))
            .catch(console.error)
    }
    getCategories = () => {
        wcAPI("products/categories")
            .then(categories => this.setState({categories: categories.map(cat => ({...cat, type: "category"}))}))
            .catch(console.error)
    };
    getTags = () => {
        wcAPI("products/tags")
            .then(tags => this.setState({tags: tags.map(tag => ({...tag, type: "tag"}))}))
            .catch(console.error)
    };
    getAttributes = () => {
        wcAPI("products/attributes")
            .then(attributes => {
                return this.populateAttributesTerms(attributes.map(attr => ({...attr, type: "attribute"})))
            })
            .then(populated => this.setState({attributes: populated}))
            .catch(console.error)
    };
    populateAttributesTerms = (attributes) => {
        return Promise.all(attributes.map(attr => {
            return wcAPI(`products/attributes/${attr.id}/terms`)
                .then(terms => ({...attr, terms: terms.map(term => ({...term, type: "attribute_term"}))}))
        }))
            .catch(console.error)
    }
}

export default Store;