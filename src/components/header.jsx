import React, { useState } from 'react'
import { ArrowDown, Calendar2, Search, MessageQ, Notification } from '../static/icon';
import { currentUserData } from '../data/currentUser';


const Header = () => {
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <div className='px-4 md:px-8 lg:px-12 bg-white z-50 flex justify-between items-center h-20 w-full border-b border-b-grey-light-1'>
            {/* Search */}
            <div className='flex gap-4 bg-dusky-white items-center w-[26.0625rem] h-[2.75rem] my-[22px] mx-0 px-[1.05rem] rounded-[6px]'>
                <span className='w-[1.375rem] h-[1.375rem] flex-shrink-0'>
                    <img src={Search} alt={Search} className='w-[1.375rem] h-[1.375rem] object-contain' />
                </span>
                <input
                    type="text"
                    id="search"
                    value={value}
                    name="search"
                    className='hidden h-[1.375rem] text-[0.875rem] md:block focus:outline-none bg-dusky-white text-grey p-0'
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    placeholder='Search for anything...'
                />
            </div>
            <div className='flex items-center justify-between gap-10'>
                <div className='flex gap-6 w-[7.5rem] h-6'>
                    <button className='w-6 aspect-square'>
                        <img src={Calendar2} alt={Calendar2} />
                    </button>
                    <button className='w-6 aspect-square'>
                        <img src={MessageQ} alt={MessageQ} />
                    </button>
                    <button className='w-6 aspect-square'>
                        <img src={Notification} alt={Notification} />
                    </button>
                </div>
                <div className='flex items-center gap-6 w-[12.5625rem] h-[2.4375rem]'>
                    <div className='hidden lg:flex flex-col gap items-end'>
                        <span className='text-base font-normal text-black'>{currentUserData.name}</span>
                        <span className='text-sm font-normal text-grey'>{currentUserData.location}</span>
                    </div>
                    <button className='flex items-center justify-center gap-2'>
                        <img
                            src={currentUserData.avatar}
                            alt={currentUserData.name}
                            className='rounded-full w-[2.375rem] aspect-square cursor-pointer'
                        />
                        <img src={ArrowDown} alt={ArrowDown} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header