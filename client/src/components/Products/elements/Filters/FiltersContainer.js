import React, {Component} from 'react';
import styles from './Filters.sass';
import {MdFilterList} from 'react-icons/md';
import Filters from './Filters';

class FiltersContainer extends Component {
    state = {
        hidden: true,
    }

    render() {
        const {
            state: {
                hidden
            },
            props: {
                sections,
                handleFilters
            },
            handleToggle
        } = this
        return(
            <aside className={`${styles.container} ${hidden ? styles.hidden : ""}`}>
                <button id={styles.toggleFilters} onClick={handleToggle} aria-label="Toggle filters section"><MdFilterList /></button>
                <Filters sections={sections} handleFilters={handleFilters} handleToggle={handleToggle}/>
            </aside>
        )
    }

    handleToggle = () => {
        this.setState({hidden: !this.state.hidden})
    }
}

export default FiltersContainer;