import React, {Component} from 'react';
import TodoList from '../todo-list/TodoList'
import Header from '../app-header/Header'
import Search from "../search-panel/Search"
import ItemAdd from '../item-add-form/ItemAdd'
import Status from '../item-status-filter/Status'

import './App.css'

class App extends Component {

    maxId = 100;

    state = {
      data: [
          this.createTodoItem('Drink'),
      ],
      term: '',
      filter: 'all'
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
        }
    }

    onDeleted = (id) => {
        this.setState(({data}) => {
           const ind = data.findIndex((el) => el.id === id);
           const newArr = [
               ...data.slice(0, ind),
               ...data.slice(ind + 1)
           ];
            return {
               data: newArr,
            }
        })
    };

    onAddItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({data}) => {
            const newArr = [
                ...data,
                newItem,
            ];
            return {
                data: newArr
            }
        });
    };

    toggleProperty = (arr, id, propsName) => {
            const ind = arr.findIndex((el) => el.id === id);
            const oldItem = arr[ind];
            const newItem = {...oldItem, [propsName]: !oldItem[propsName]};
            return [
                ...arr.slice(0, ind),
                newItem,
                ...arr.slice(ind + 1)
            ];
    };

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            return {
                data: this.toggleProperty(data, id, 'important'),
            }
        })
    };

    onToggleDone = (id) => {
        this.setState(({data}) => {
            return {
                data: this.toggleProperty(data, id, 'done'),
            }
        })
    };

    onSearch(items, term) {
        if(term.length === 0) {
            return items;
        }

       return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    };

    onFilter(items, filter) {
        switch (filter) {
            case 'active':
                return items.filter((item) => !item.done );
            case 'done':
                return items.filter((item) => item.done );
            default:
                return items;
        }
    }

    onSearchChange = (term) => {
        this.setState({term})
    };

    onFilterChange = (filter) => {
        this.setState({filter})
    };


   render() {
       const {data, term, filter} = this.state;
       const doneCount = data.filter((el) => el.done).length;
       const todoCount = data.length - doneCount;

       const visibleItems = this.onFilter(this.onSearch(data, term), filter);

       return (
           <div className='todo-app'>
               <Header todo={todoCount} done={doneCount}/>
               <div className="top-panel d-flex">
                   <Search onSearchChange={this.onSearchChange}/>
                   <Status
                       filter={filter}
                       onFilterChange={this.onFilterChange}
                   />
               </div>
               <TodoList
                   onDeleted={this.onDeleted}
                   data={visibleItems}
                   onImportant={this.onToggleImportant}
                   onDone={this.onToggleDone}
               />
               <ItemAdd onAddItem={this.onAddItem} />
           </div>
       );
   }
}

export default App;
