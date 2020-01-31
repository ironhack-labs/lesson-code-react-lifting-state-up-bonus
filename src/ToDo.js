import React from 'react';
import Task from "./Task"

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks 
    };
  }

  updateToDoList = idx => {
    console.log('idx: ', idx)
    /***  
      State shouldn't be modified directly and splice 
      modifies the orginal array it's called on. 
      Therefore we're using the spread operator to copy the array first. ;)
    ***/
    const taskListCopy = [...this.state.tasks]
    taskListCopy.splice(idx, 1)

    if (taskListCopy.length === 0) {
      this.props.allDone();
    }

    this.setState({tasks: taskListCopy})
  }

  render() {
    return (
      <div> 
        <h2>{this.props.title}</h2>
        {
          this.state.tasks.map((aTask, index) => <Task index={index} deleteTask={this.updateToDoList} taskName={aTask} />)
        }
      </div>
    )
  }
}

export default ToDo;
