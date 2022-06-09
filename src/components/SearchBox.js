import React from "react";

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className="pa2">
            <input 
            className="pa3 tc ba b--green bg-lightest-blue"
            style={{outline: 0}}
            type="search" 
            placeholder="search robots"
            onChange={searchChange} />
        </div>
    );
}

export default SearchBox;