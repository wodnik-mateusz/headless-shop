import React, { Component, createContext } from 'react';

const StoreContext = createContext('StoreContext')
export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer


class Store extends Component {
    state = {
        topNav: []
    }
    componentDidMount() {
        fetch("https://localhost/wp-json/menus/v1/menus/top")
            .then(res => res.json())
            .then(topNav => this.setState({topNav: topNav.items}))
            .catch(console.error)
    }
    render() {
        return (
            <StoreProvider value={{
                ...this.state,
                actions: {}
            }}>{this.props.children}</StoreProvider>
        )
    }
}

export default Store;