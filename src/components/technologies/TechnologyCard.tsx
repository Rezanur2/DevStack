import React from 'react';
import type { Itechonology } from '../../technologyType';
import { IoIosStar } from 'react-icons/io';

const TechnologyCard = ({technology}:{technology:Itechonology}) => {
    return (
            <div className="card bg-base-100 shadow-sm p-2 hover:shadow-lg transition-shadow duration-300">
                <figure className='flex justify-between px-5 pt-2'>
                    <img
                    src={technology.icon} className='w-10'
                    alt="" />
                <div className={`font-bold rounded-2xl badge badge-soft badge-${technology.badgeType}`}>{technology.badge}</div>
                </figure>
                <div className="card-body space-y-1.5">
                    <h2 className="card-title font-bold text-xl">{technology.name}</h2>
                    <p className='text-[#64748B] font-medium'>{ technology.description}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-ghost text-[#475569] font-medium">{ technology.category}</div>
                        <div className=" font-medium text-[#64748B]">{technology.difficulty}</div>
                    <div className='flex items-center gap-1.5'>
                        <IoIosStar className='text-yellow-400'/>
                        <h4 className='font-bold'>{technology.rating}</h4>
                        </div>
                    </div>
                    <button className='btn btn-neutral'>Add to Stack</button>
                </div>
            </div>
    );
};

export default TechnologyCard;