import React, { useState } from 'react'
import { Logo } from '../static/img';
import { AddSquare2, ArrowLeft, Home, Message2, Profile, Lamp, Setting, Task, Dots } from '../static/icon';
import { dummyProjects } from "../data/KanbanData";

import { Bullet } from "./ui/Bullet";

const Sidebar = ({ children, header }) => {
    const [projects, setProjects] = useState(dummyProjects);
    const [currentProject, setCurrentProject] = useState(dummyProjects[0]);

    return (
        <div className='sticky top-0 left-0 min-h-screen'>
            <header className='h-20 border-b border-b-grey-light-1 flex justify-between items-center px-[13px] sm:px-[22px]'>
                <span className='flex text-xl font-semibold text-black gap-[9px]'>
                    <img src={Logo} alt='Logo' className='aspect-square object-contain' />
                    <h2 className="hidden sm:block">Project M.</h2>
                </span>
                <button className='hidden sm:inline-flex -space-x-3'>
                    <img src={ArrowLeft} alt={ArrowLeft} />
                    <img src={ArrowLeft} alt={ArrowLeft} />
                </button>
            </header>
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
                <div>
                    <header className='hidden sm:flex justify-between items-center mt-[30px] mb-5 mx-[22px]'>
                        <span className='text-xs font-bold text-grey uppercase'>MY PROJECTS</span>
                        <span className='cursor-pointer'><img src={AddSquare2} alt={AddSquare2} /></span>
                    </header>
                    <ul className='hidden sm:flex flex-col gap-[10px]'>
                        {projects.map((project) => (
                            <li
                                key={project.id}
                                className={`flex items-center justify-between mx-3 pl-3 py-[10px] cursor-pointer ${project.id === currentProject.id && 'bg-blue bg-opacity-10 rounded-[6px]'
                                    }`}
                            >
                                <span className='flex gap-4 items-center'>
                                    <Bullet color={project.favColor} />
                                    <span className='text-sm font-medium text-grey'>{project.name}</span>
                                </span>
                                {project.id === currentProject.id && (
                                    <span className='mr-3'>
                                        <img src={Dots} alt={Dots} />
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Thoughts */}
                <div className='hidden sm:block relative mt-[45px] mx-[22px] mb-0 pb-[30px]'>
                    <div className='mx-auto flex justify-center items-center bg-grey-light-2 rounded-full w-[66px] h-[66px]'>
                        <span className='absolute rounded-full w-[33px] h-[33px] bg-lamp-yellow bg-opacity-70 blur-[17px]'></span>
                        <img src={Lamp} alt={Lamp} />
                    </div>
                    <section className='-mt-[33px] pt-[37px] bg-grey-light-2 flex flex-col items-center gap-3 rounded-2xl'>
                        <h2 className='text-sm font-medium text-pure-black'>Thoughts Time</h2>
                        <p className='text-xs font-normal text-grey mx-5 text-center'>
                            We don't have any notice for you, till then you can share your
                            thoughts with your peers.
                        </p>
                        <button className='py-3 px-7 bg-white text-sm font-medium mb-5 rounded'>Write a message</button>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Sidebar