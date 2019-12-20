import React, {Component} from "react";

class ItemAdd extends Component {

    state = {
        label: '',
    };

    onLabelChange = (e) => {
        this.setState( {
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: '',
        })
    };

     render(){
        return (
            <form className='add-item d-flex'
                  onSubmit={this.onSubmit}
            >
                <input type="text"
                   placeholder="add text"
                   className='form-control'
                   onChange={this.onLabelChange}
                   value={this.state.label}
                />
                <button type="submit"
                        className="btn btn-outline-secondary"
                >add item</button>
            </form>
        )
     }
}

export default ItemAdd