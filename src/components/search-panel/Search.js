import React, {Component} from "react";

class Search extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({
            term
        });
        this.props.onSearchChange(term)
    };

    render() {
        const {term} = this.state;

        return (
            <div className="d-flex">
                <input
                    type="search"
                    placeholder="search"
                    value={term}
                    onChange={this.onSearchChange}
                />
            </div>
        )
    }
}
export default Search;