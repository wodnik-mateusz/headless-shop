import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Filters.sass';
import {MdFilterList} from 'react-icons/md';

/**
 * Render form that handles filters changes
 * @param {*} param0 
 */
const Filters = ({sections, handleFilters}) => (
    <form className={styles.filters} onChange={handleFilters}>
        <header className={styles.top}>
            <h2>Filters</h2>
        </header>
        <Sections sections={sections} />
        <footer className={styles.bottom}>
            {/* <button className={styles.apply}><MdFilterList /></button> */}
        </footer>
    </form>
);

export default Filters;

/**
 * Render list of filters categories
 * @param {*} param0 
 */
const Sections = ({sections}) => (
    <div className={styles.categories}>
        {Object.values(sections).map((section, idx) => {
            if(!section.length) return null
            return <Section key={idx} name={Object.keys(sections)[idx]} section={section} />
        })}
    </div>
)
/**
 * Render single filters category
 * @param {*} param0 
 */
const Section = ({name, section}) => (
    <section>
        <header>
            <h3>{name}</h3>
        </header>
        <FiltersList filters={section} name={name} />
    </section>
)
/**
 * Render filters list in particular filters category
 * @param {*} param0 
 */
const FiltersList = ({filters=[], attribute}) => (
    <ul className={styles.list}>
        {filters.map(filter => (
            <Filter key={filter.id} filter={filter} attribute={attribute} />
        ))}
    </ul>
)
/**
 * Render single filter
 * @param {*} param0 
 */
const Filter = ({filter, attribute}) => (
    <li className={styles.filter}>
        {filter.type === "attribute" ?
            <h4>{filter.name}</h4>
            :
            <label>
                <input id={filter.id} type="checkbox" name={filter.type} data-attribute={attribute} defaultChecked={false}/>
                {filter.name} ({filter.count})
            </label>
        }
        {filter.terms && <FiltersList filters={filter.terms} attribute={filter.slug} />}
    </li>
)