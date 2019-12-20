import React, {Component} from "react";

class Status extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    render() {
       const {filter, onFilterChange} = this.props;

       const bottons = this.buttons.map(({name, label}) => {
           const isActive = filter === name;
           const actClass = isActive ? 'btn-info' : 'btn-outline-secondary';
           return (
               <button type="button"
                       key={name}
                       className={`btn ${actClass}`}
                       onClick={() => onFilterChange(name)}
               >{label}</button>
           )
       });

        return (
            <div className='btn-group'>
                {bottons}
            </div>
        )
    }
};

export default Status