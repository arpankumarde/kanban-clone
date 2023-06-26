import { Droppable } from "react-beautiful-dnd";

import { Bullet } from "../ui/Bullet";
import TodoItem from "./TodoItem";

import styles from "./TodosList.module.css";
import { AddSquare } from "../../static/icon";

export default function TodosList({ todosList, type, id }) {
  return (
    <div className={styles.todosContainer}>
      <header
        className={`${styles.todoHeader} ${type === "not-started"
          ? styles.notStarted
          : type === "started"
            ? styles.started
            : styles.completed
          }`}
      >
        <Bullet
          color={
            type === "not-started"
              ? "#5030E5"
              : type === "started"
                ? "#FFA500"
                : "#76A5EA"
          }
        />
        <span>
          {type === "not-started"
            ? "To Do"
            : type === "started"
              ? "On Progress"
              : "Done"}
        </span>
        <span className='w-5 h-5 rounded-full bg-grey-light flex justify-center items-center text-xs font-medium text-dusky-black mx-1'>{todosList.length}</span>
        {type === "not-started" && (
          <button className='absolute top-[22px] right-[22px]' >
            <img src={AddSquare} alt={AddSquare} className="w-6 aspect-square" />
          </button>
        )}
      </header>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
              className={styles.droppableArea}
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {todosList.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id.toString()}
                  todo={todo}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}
