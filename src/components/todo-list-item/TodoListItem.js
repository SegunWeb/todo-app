import React, {Component} from "react";
import './TodoListItem.css'

class TodoListItem extends Component {


    render() {
        const {label, onDeleted, onDone, onImportant, done, important} = this.props;

        let classes = 'wrap-todo-list-item';
        if(done) {
            classes += ' done';
        }
        if(important) {
            classes += ' important'
        }

        return (
            <span  className={classes}>
            <span
                className='todo-list-item'
                onClick={onDone}>
                {label}
            </span>
            <button type="button" onClick={onImportant} className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}
            >
                  <i className="fa fa-trash-o" />
            </button>
        </span>
        )
    }
}
export default TodoListItem;