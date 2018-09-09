import React, { Component, createContext } from 'react';

const StoreContext = createContext('StoreContext')
export const StoreProvider = StoreContext.Provider
export const StoreConsumer = StoreContext.Consumer


class Store extends Component {
    state = {}
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