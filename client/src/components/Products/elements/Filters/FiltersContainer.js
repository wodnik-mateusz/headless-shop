import React, {Component} from 'react';
import styles from './Filters.sass';
import {MdFilterList} from 'react-icons/md';
import Filters from './Filters';

class FiltersContainer extends Component {
    state = {
        showFilters: true,
    }

    render() {
        return(
            <aside className={styles.container}>
                <button id={styles.toggleFilters} onClick={this.handleToggle} aria-label="Toggle filters section"><MdFilterList /></button>
                {this.state.showFilters && <Filters sections={this.props.sections} handleFilters={this.props.handleFilters} handleToggle={this.handleToggle}/>}
            </aside>
        )
    }

    handleToggle = () => {
        this.setState({showFilters: !this.state.showFilters})
    }
}

export default FiltersContainer;