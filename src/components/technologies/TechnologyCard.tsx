import React from 'react';
import type { Itechonology } from '../../technologyType';
import { IoIosStar } from 'react-icons/io';

const TechnologyCard = ({technology}:{technology:Itechonology}) => {
    return (
            <div className="card h-full bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <figure className='flex justify-between px-6 md:px-3 pt-4'>
                    <img
                    src={technology.icon} className='w-10'
                    alt="" />
                    <div className={`font-bold rounded-2xl badge badge-soft ${technology.badgeType}`}> {technology.badge}</div>
                </figure>
                <div className="card-body space-y-1.5 md:px-3 pb-5">
                    <h2 className="card-title font-bold text-xl">{technology.name}</h2>
                    <p className='text-[#64748B] text-[12px] font-medium'>{ technology.description}</p>
                    <div className="card-actions grid grid-cols-[1fr_auto_1fr] items-center text-xs border-t border-slate-100 md:-mx-0.5 pt-2">
                        <div className="justify-self-start">
                            <div className="badge badge-ghost text-[11px] text-[#475569] font-medium">
                                {technology.category}
                            </div>
                        </div>
                        <div className="justify-self-center whitespace-nowrap font-medium text-[10px] text-[#64748B]">
                            {technology.difficulty}
                        </div>
                        <div className="justify-self-end flex items-center gap-0.5">
                            <IoIosStar className="text-yellow-400" />
                            <h4 className="font-bold max-md:text-[#F59E0B] ">{technology.rating}</h4>
                        </div>
                    </div>
                    <button className='btn btn-neutral'>Add to Stack</button>
                </div>
            </div>
    );
};

export default TechnologyCard;