import React, { useState } from 'react'
import { Logo } from '../static/img';
import { AddSquare2, ArrowLeft, Home, Message2, Profile, Lamp, Setting, Task, Dots } from '../static/icon';
import { dummyProjects } from "../data/KanbanData";

import { Bullet } from "./ui/Bullet";

const Sidebar = ({ children, header, showSidebar, setShowSidebar }) => {
    const [projects, setProjects] = useState(dummyProjects);
    const [currentProject, setCurrentProject] = useState(dummyProjects[0]);

    return (
        <div>
            <div className={`sticky top-0 min-h-screen ${showSidebar ? 'w-64' : 'hidden'}`}>
                {/* <header className='h-20 border-b border-b-grey-light-1 flex justify-between items-center px-[13px] sm:px-4'>
                <span className='flex text-xl font-semibold text-black gap-[9px]'>
                    <img src={Logo} alt='Logo' className='aspect-square object-contain' />
                    <h2 className="hidden sm:block">Project M.</h2>
                </span>
                <button className='hidden sm:inline-flex'>
                    <img src={ArrowLeft} alt={ArrowLeft} />
                </button>
            </header> */}
                <main>
                    {/* Navbar */}
                    <ul className='my-0 mx-[13px] py-[30px] px-0 flex flex-col gap-[25px] border-b border-b-grey-light-1'>
                        <li className='flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer'>
                            <img src={Home} alt={Home} />
                            <span className="hidden sm:block">Home</span>
                        </li>
                        <li className='flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer'>
                            <img src={Message2} alt={Message2} />
                            <span className="hidden sm:block">Messages</span>
                        </li>
                        <li className='flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer'>
                            <img src={Task} alt={Task} />
                            <span className="hidden sm:block">Tasks</span>
                        </li>
                        <li className='flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer'>
                            <img src={Profile} alt={Profile} />
                            <span className="hidden sm:block">Members</span>
                        </li>
                        <li className='flex text-base font-medium text-grey gap-[14px] sm:ml-[9px] cursor-pointer'>
                            <img src={Setting} alt={Setting} />
                            <span className="hidden sm:block">Settings</span>
                        </li>
                    </ul>

                    {/* MyProjects */}
                    <div className='my-8 px-4'>
                        <header className='hidden sm:flex justify-between items-center mb-5 mx-2'>
                            <span className='text-xs font-bold text-grey uppercase'>MY PROJECTS</span>
                            <span className='cursor-pointer'><img src={AddSquare2} alt={AddSquare2} /></span>
                        </header>
                        <div className='hidden sm:flex flex-col gap-[10px] w-[14.0625rem] h-'>
                            {projects.map((project) => (
                                <button key={project.id}
                                    className={`inline-flex justify-between px-3 items-center h-[2.4375rem] hover:bg-blue hover:bg-opacity-[0.08] rounded-[6px] cursor-pointer ${project.id === currentProject.id && 'bg-blue bg-opacity-[0.08]'
                                        }`}
                                >
                                    <span className='inline-flex gap-4 items-center'>
                                        <Bullet color={project.favColor} />
                                        <span className='text-sm font-medium text-grey'>{project.name}</span>
                                    </span>
                                    {project.id === currentProject.id && (
                                        <span className=''>
                                            <img src={Dots} alt={Dots} />
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Thoughts */}
                    <div className='flex justify-center mt-16 pb-6'>
                        <div className='hidden sm:block relative w-[12.875rem]'>
                            <div className='mx-auto flex w-[4.125rem] aspect-square justify-center items-center bg-dusky-white rounded-full'>
                                <span className='absolute rounded-full w-[4.125rem] aspect-square bg-lamp-yellow bg-opacity-50 blur-lg'></span>
                                <img src={Lamp} alt={Lamp} className='w-6 aspect-square object-contain' />
                            </div>
                            <div className='flex flex-col -mt-[2rem] pt-8 bg-dusky-white items-center gap-2 rounded-2xl w-full'>
                                <h2 className='text-sm font-medium text-pure-black pt-3'>Thoughts Time</h2>
                                <p className='text-xs font-normal text-grey text-center w-[10.375rem]'>
                                    We don't have any notice for you, till then you can share your
                                    thoughts with your peers.
                                </p>
                                <input type="text" placeholder='Write a message' className='text-center w-full px-3 py-3 placeholder:text-pure-black bg-white text-sm font-medium mb-5 rounded focus:outline-none' />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Sidebar