import React from "react";
import Status from '../item-status-filter/Status'
const Search = () => {
    return (
        <div className="d-flex">
            <input type="search" placeholder="search"/>
            <Status/>
        </div>
    )
};
export default Search;