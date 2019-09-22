import React from 'react';

class Search extends React.Component {

    submit(event) {
        event.preventDefault();
        let val = this.refs.username.value;
        this.props.searchProfile(val);
        this.refs.username.value = '';
    }

    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.submit.bind(this)}>
                    <label>
                        <input type="search" refs="username" placeholder="type username" />
                    </label>
                </form>
            </div>
        );
    }
}

export default Search;