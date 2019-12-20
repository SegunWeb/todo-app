import React from "react";

const ItemAdd = ({onAddItem}) => {
    return (
        <div className='btn-group'>
            <button type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => onAddItem("hello")}
            >add item</button>
        </div>
    )
};

export default ItemAdd