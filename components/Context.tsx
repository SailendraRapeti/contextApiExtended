import React from 'react';

export default React.createContext({
  tasks: [],
  addNewTask : (task:any) => {},
  deleteTask : (taskId:any) => {}
});