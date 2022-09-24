import React, { useState } from 'react';
import { BiDownArrowAlt, BiUpArrowAlt, BiVideo, BiTimeFive } from "react-icons/bi";

const Accordion = () => {
    const [active, setActive] = useState(false)
    return (
        <div className=' w-full min-h-max px-2 mb-4'>
               <h2 className='text-xl font-bold my-2'>Course Curriculum</h2>
            <div onClick={() => setActive(!active)} className="flex justify-between cursor-pointer ">
             
                <div>
                    <h2 className='text-xl text-red-500 font-bold hover:text-green-600'>
                        ***PET HYGIENE, WELLNESS, GROOMING and PET THERAPY***</h2>
                </div>
                <div className='w-6 h-6 '>
                    {
                        active ? <BiUpArrowAlt color='red' className='text-3xl ' /> : <BiDownArrowAlt color='red' className='text-3xl ' />
                    }


                </div>

            </div>
            {
                active && <div className=" py-2 text-sm  mt-2 duration-700">
                    <div className='p-1 mb-1 border flex justify-between'>
                        <div className='flex'>
                            <div className='w-8 mr-3'>
                                <BiVideo color='red' className='text-2xl ' />
                            </div>
                            <h2>Pet Hygiene and Grooming</h2>
                        </div>
                        <div className='flex gap-4'>
                        <BiTimeFive color='red' className='text-2xl ' />
                        <p>00:01:00</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='p-1 mb-1 border flex justify-between'>
                        <div className='flex'>
                            <div className='w-8 mr-3'>
                                <BiVideo color='red' className='text-2xl ' />
                            </div>
                            <h2>Taking Care of Pet Mental Health</h2>
                        </div>
                        <div className='flex gap-4'>
                        <BiTimeFive color='red' className='text-2xl ' />
                        <p>00:01:00</p>
                        </div>
                    </div>


                </div>
            }
        </div>
    );
};

export default Accordion;