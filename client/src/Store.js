import React, { Component, createContext } from 'react';

const StoreContext = createContext('StoreContext')
export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer

class Store extends Component {
    state = {
        topNav: [],
        gallery: [],
    }
    componentDidMount() {
        // Fetch top navigation
        fetch("https://localhost/wp-json/menus/v1/menus/top")
            .then(res => res.json())
            .then(topNav => this.setState({topNav: topNav.items}))
            .catch(console.error)
    }
    render() {
        const {state, getGallery} = this
        return (
            <StoreProvider value={{
                ...state,
                actions: {
                    getGallery
                }
            }}>{this.props.children}</StoreProvider>
        )
    }
    getGallery = () => {
        // Fetch gallery images urls
        fetch("https://localhost/wp-json/wp/v2/media?parent=1621")
            .then(res => res.json())
            .then(gallery => this.setState({gallery}))
            .catch(console.error)
    }
}

export default Store;