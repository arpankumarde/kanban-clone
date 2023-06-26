import React, { useState } from 'react';

import { AddSquare, ArrowDown, Calendar, Filter, Pause, Menu, Share, EditPen, Link } from '../static/icon';
import { User1, User2, User3, User4 } from '../static/avatars';
import { Vector10 } from '../static/vectors'


import { DragDropContext } from "react-beautiful-dnd";

import { dummyProjects } from "../data/KanbanData";
import TodosList from "./todos/TodosList";

const Project = () => {
    const [notStartedTodos, setNotStartedTodos] = useState(
        dummyProjects[0].toDos.filter((todo) => todo.status === "not started")
    );
    const [startedTodos, setStartedTodos] = useState(
        dummyProjects[0].toDos.filter((todo) => todo.status === "started")
    );
    const [completedTodos, setCompletedTodos] = useState(
        dummyProjects[0].toDos.filter((todo) => todo.status === "completed")
    );

    const findTodoById = (id, array) => {
        return array.find((todo) => todo.id === id);
    };

    const removeTodoById = (id, array) => {
        return array.filter((todo) => todo.id !== id);
    };

    const handleDrag = (result) => {
        const { destination, source, draggableId } = result;

        if (source.droppableId === destination.droppableId) return;

        if (source.droppableId === "1") {
            setNotStartedTodos(removeTodoById(draggableId, notStartedTodos));
        } else if (source.droppableId === "2") {
            setStartedTodos(removeTodoById(draggableId, startedTodos));
        } else {
            setCompletedTodos(removeTodoById(draggableId, completedTodos));
        }

        const todo = findTodoById(draggableId, [
            ...notStartedTodos,
            ...startedTodos,
            ...completedTodos,
        ]);

        if (destination.droppableId === "1") {
            setNotStartedTodos([
                { ...todo, status: "not started" },
                ...notStartedTodos,
            ]);
        } else if (destination.droppableId === "2") {
            setStartedTodos([
                { ...todo, status: "started" },
                ...startedTodos,
            ]);
        } else {
            setCompletedTodos([
                { ...todo, status: "completed" },
                ...completedTodos,
            ])
        }
    };

    return (
        <div className='mx-4 md:mx-8 lg:mx-12'>
            {/* Project Header */}
            <div className='w-full h-[3.5rem] flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:gap-0 mt-10'>
                <div className='flex justify-between items-center h-[3.5rem] w-[21.5rem]'>
                    <h1 className='font-semibold text-black text-3xl lg:text-[2.875rem]'>Mobile App</h1>
                    <button className='w-[1.875rem] h-[1.875rem]'>
                        <img src={EditPen} alt={EditPen} className='w-[1.875rem] aspect-square' />
                    </button>
                    <button>
                        <img src={Link} alt={Link} className='w-[1.875rem] aspect-square' />
                    </button>
                </div>
                <div className='flex w-[14.8125rem] justify-between items-center font-[500]'>
                    <button className='inline-flex justify-center gap-1 px-1 py-[0.15rem] items-center hover:bg-[#5030E5] hover:bg-opacity-[0.2] rounded-lg'>
                        <img src={AddSquare} alt={AddSquare} />
                        <span className='font-[1rem] text-blue'>Invite</span>
                    </button>
                    <div className="flex -space-x-2">
                        <img className="w-[38px] aspect-square border border-white rounded-full" src={User1} alt={User1} />
                        <img className="w-[38px] aspect-square border border-white rounded-full" src={User2} alt={User2} />
                        <img className="w-[38px] aspect-square border border-white rounded-full" src={User3} alt={User3} />
                        <img className="w-[38px] aspect-square border border-white rounded-full" src={User4} alt={User4} />
                        <a className="flex items-center justify-center w-10 h-10 text-[#D25B68] bg-[#F4D7DA] border border-white rounded-full font-[0.9375rem]">+2</a>
                    </div>
                    {/* <Users users={["User1", "User4", "User3", "User2", "User5", "User6"]} width="38px" height="38px" overlap="left" offset="8" /> */}
                </div>
            </div>

            {/* Tabs Container */}
            <div className='w-full h-[2.5rem] mt-10 flex justify-between items-center text-grey text-[1rem] font-[500]'>
                <div className="flex w-64 gap-[0.75rem]">
                    <button className='flex justify-evenly items-center w-[7.625rem] h-[2.5rem] flex-shrink-0 rounded-[6px] border border-grey'>
                        <img src={Filter} alt={Filter} className='w-4 h-4' />
                        Filter
                        <img src={ArrowDown} alt={ArrowDown} className='w-4 h-4' />
                    </button>
                    <button className='flex justify-evenly items-center w-[7.625rem] h-[2.5rem] flex-shrink-0 rounded-[6px] border border-grey'>
                        <img src={Calendar} alt={Calendar} className='w-4 h-4' />
                        Today
                        <img src={ArrowDown} alt={ArrowDown} className='w-4 h-4' />
                    </button>
                </div>
                <div className="flex w-[13.75rem] justify-between">
                    <button className='flex justify-evenly items-center w-[6.0625rem] h-[2.5rem] flex-shrink-0 rounded-[6px] border border-grey'>
                        <img src={Share} alt={Share} className='w-4 h-4' />
                        Share
                    </button>
                    <img src={Vector10} />
                    <button className='w-[2.5rem] h-[2.5rem] flex-shrink-0 rounded-[6px] bg-blue'>
                        <img src={Pause} alt={Pause} className='w-[1.25rem] h-[1.25rem] m-auto' />
                    </button>
                    <button className='w-[2.5rem] h-[2.5rem] flex-shrink-0 rounded-[6px]'>
                        <img src={Menu} alt={Menu} className='w-[1.3125rem] h-[1.3125rem]' />
                    </button>
                </div>
            </div>

            {/* Todos Container */}
            <DragDropContext onDragEnd={handleDrag}>
                <div className='mt-10 grid grid-flow-row auto-cols-fr lg:grid-flow-col gap-[10px]'>
                    <TodosList todosList={notStartedTodos} type="not-started" id={"1"} />
                    <TodosList todosList={startedTodos} type="started" id={"2"} />
                    <TodosList todosList={completedTodos} type="completed" id={"3"} />
                </div>
            </DragDropContext>
        </div>
    )
}

export default Project