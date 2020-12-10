import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Task } from "./Task";
import { TaskInterface, TasksCollection } from "/imports/api/TasksCollection";

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find().fetch());
  
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <ul>
        {tasks.map((task: TaskInterface) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};