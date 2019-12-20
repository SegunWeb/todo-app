import React, {Component} from "react";

class Status extends Component {

    render() {
        return (
            <div className='btn-group'>
                <button type="button" className="btn btn-info">all</button>
                <button type="button" className="btn btn-outline-secondary">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
};

export default Status