import React, { Fragment } from "react";

const List = ({
  tasks,
  inProgress,
  taskDone,
  statusChange,
  statusChangetoDone,
  deleteTask,
}) => {
  return (
    <Fragment>
      <div className="w-12/12 md:flex">
        {tasks.length > 1 ? (
          <div className="md:w-4/12 bg-gray-400 m-8 py-6 h-fit-content">
            <>
              To do
              {tasks?.map((task) => (
                <div
                  className="relative border-gray-800 bg-white mx-6 my-2 p-2 flex"
                  key={task.id}
                >
                  <p
                    className={`${
                      task?.status === 0
                        ? "text-left text-red-600"
                        : "text-left line-through text-gray-400"
                    }`}
                  >
                    {task?.name}
                  </p>
                  <p
                    className="ml-auto cursor-pointer text-xs text-black-600 font-semibold "
                    onClick={(e) => {
                      e.stopPropagation();
                      if (task?.id) {
                        statusChange(task?.id);
                      }
                    }}
                  >
                    In Progress
                  </p>
                </div>
              ))}
            </>
          </div>
        ) : (
          <div className="md:w-4/12 w-full bg-gray-400 m-8 py-6">
            <div className="border-gray-800 bg-white mx-6 my-2 p-2">
              Add tasks!
            </div>
          </div>
        )}
        {inProgress.length > 1 ? (
          <div className="md:w-4/12 bg-gray-400 m-8 py-6">
            <>
              In Progress
              {inProgress?.map((progressTask, index) => (
                <div
                  className="border-gray-800 bg-white mx-6 my-2 p-2 flex"
                  key={index}
                >
                  <p
                    className={`${
                      progressTask?.status === 1
                        ? "text-left text-blue-600"
                        : "text-left line-through text-gray-400"
                    }`}
                  >
                    {progressTask?.name}
                  </p>
                  <p
                    className="ml-auto cursor-pointer text-xs text-green-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      statusChangetoDone(progressTask?.id);
                    }}
                  >
                    Done
                  </p>
                </div>
              ))}
            </>
          </div>
        ) : (
          <div className="md:w-4/12 w-full bg-gray-400 m-8 py-6">
            <div className="border-gray-800 bg-white mx-6 my-2 p-2">
              Start your task!
            </div>
          </div>
        )}
        {taskDone.length > 1 ? (
          <div className="md:w-4/12 bg-gray-400 m-8 py-6">
            <>
              Done
              {taskDone?.map((done, index) => (
                <div
                  className="border-gray-800 bg-white mx-6 my-2 p-2 flex"
                  key={index}
                >
                  <p className="text-left text-green-600">{done?.name}</p>
                  <p
                    className="ml-auto cursor-pointer text-xs text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTask(done?.id);
                    }}
                  >
                    Delete
                  </p>
                </div>
              ))}
            </>
          </div>
        ) : (
          <div className="md:w-4/12 w-full bg-gray-400 m-8 py-6">
            <div className="border-gray-800 bg-white mx-6 my-2 p-2">
              Move to Done once you finish!
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default List;
