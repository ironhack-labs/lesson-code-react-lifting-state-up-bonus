import React from 'react';

import ToDo from "./ToDo";

const tasks = {
  veggies: ["🍅", "🥕", "🥔", "🌽"],
  treats: ["🍩", "🍫"]
};

class Main extends React.Component {
  state = {
    todos: ['veggies', 'treats']
  };
  
  completeTodo = index => {
    console.log('id: ', index)
    const todosCopy = [...this.state.todos];
    todosCopy.splice(index, 1);
    this.setState({
      todos: todosCopy
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todotitle, theIndex) => {
            return (
              <li key={todotitle}>
                <ToDo title={todotitle} tasks={tasks[todotitle]} allDone={() => this.completeTodo(theIndex)} />
              </li>
            );
          })}
        </ul>
        {this.state.todos.length <= 0 && (
          <h3>All done! <span role="img" aria-label="emoji">💜</span></h3>
        )}
      </div>
    )
  }
}

export default Main;