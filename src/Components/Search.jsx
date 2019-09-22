import React from 'react';

class Search extends React.Component{
    render(){
        return(
            <div className = "search-box">
                <form>
                    <label>
                        <input type="search" ref="username" placeholder="type username"/>
                    </label>
                </form>
            </div>
        );
    }
}

export default Search;