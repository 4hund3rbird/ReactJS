import { useState } from "react";

const TodoListComponent = () => {
  const tasks = [
    {
      task: "Go to bed",
      deadline: "11:00 pm",
      taskid: 1,
      completed: false,
    },
    {
      task: "Wash your teeth",
      deadline: "7:00 am",
      taskid: 2,
      completed: false,
    },
    {
      task: "Go to school",
      deadline: "9:00 am",
      taskid: 3,
      completed: false,
    },
    {
      task: "Get Lunch",
      deadline: "1:00 pm",
      taskid: 4,
      completed: false,
    },
  ];

  const [tasklist, updatetasklist] = useState(tasks);
  const [formdata, updateformdata] = useState({
    task: "",
    deadline: "",
    taskid: 0,
    completed: false,
  });

  function taskcompletedtoggle(id) {
    updatetasklist((tasklist) =>
      tasklist.map((e) => {
        if (e.taskid === id) {
          return { ...e, completed: !e.completed };
        } else {
          return e;
        }
      })
    );
  }

  function taskDelete(id) {
    updatetasklist((tasklist) => tasklist.filter((e) => e.taskid !== id));
  }

  function addTask(task) {
    updatetasklist((tasklist) => [
      ...tasklist,
      { ...task, taskid: toptaskno(tasklist) },
    ]);
  }
  function toptaskno(list) {
    if (list && list.length) {
      return (
        Math.max(
          ...list.map((e) => {
            return e.taskid;
          })
        ) + 1
      );
    }
  }

  function clearformdata() {
    updateformdata({
      task: "",
      deadline: "",
      taskid: 0,
      completed: false,
    });
  }
  return (
    <>
      <h1>ToDo List: </h1>
      <div className="container">
        <div className="form">
          <label>Task : </label>
          <input
            type="text"
            value={formdata.task}
            onChange={(e) => {
              updateformdata((data) => {
                return {
                  ...data,
                  task: e.target.value,
                };
              });
            }}
          ></input>
          <label>deadline : </label>
          <input
            type="text"
            value={formdata.deadline}
            onChange={(e) => {
              updateformdata((data) => {
                return { ...data, deadline: e.target.value };
              });
            }}
          ></input>

          <button
            onClick={() => {
              addTask(formdata);
              clearformdata();
            }}
          >
            ➕
          </button>
        </div>

        <ul>
          {tasklist.map((e) => {
            return (
              <li key={e.taskid}>
                <Task
                  data={e}
                  togglecomplete={taskcompletedtoggle}
                  deletetask={taskDelete}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const Task = ({ data, togglecomplete, deletetask }) => {
  return (
    <>
      <div className={data.completed ? "completed" : ""}>{data.task}</div>
      <div>{data.deadline}</div>

      <button
        onClick={() => {
          togglecomplete(data.taskid);
        }}
      >
        ✔️
      </button>
      <button
        onClick={() => {
          deletetask(data.taskid);
        }}
      >
        ❌
      </button>
    </>
  );
};

export default TodoListComponent;
