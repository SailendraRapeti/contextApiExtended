import React from 'react';
import Context from "./Context"

interface Iprops{
  children:any;
}
export default class GlobalState extends React.Component<Iprops>{
state = {
  tasks: [],
}
 
addNewTask = (task:any) => {
  const list = [...this.state.tasks, task];
  this.setState({tasks: list});
};
 
deleteTask = (taskId:any) => {
  this.setState(this.state.tasks.splice(taskId,1));
};
render(){
 return (
  <Context.Provider 
   value={{
    tasks: this.state.tasks,
    addNewTask: this.addNewTask,
    deleteTask: this.deleteTask
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}