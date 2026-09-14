import React from 'react';
import type { Itechonology } from '../../technologyType';

const SelectedStack = ({selectedStacks}:{selectedStacks:Itechonology[]}) => {
    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm p-4">
            <div className="mb-4">
                <h2 className="text-md lg:text-lg font-bold text-[#0F172A]">
                    Your Stack
                </h2>
                <p className="text-xs lg:text-sm text-[#94A3B8] mt-1">
                    {
                        selectedStacks.length > 0 ? `${selectedStacks.length + " "} ${selectedStacks.length === 1 ? 'technology' : 'technologies'} selected.` : `No technologies selected yet.`
                    }
                </p>
            </div>
                {
                    selectedStacks.length === 0 ? <div className="border border-dashed border-[#CBD5E1] rounded-xl h-24 flex items-center justify-center card bg-base-100 card-xs shadow-sm">
                        <p className="text-sm text-[#94A3B8]">Your stack is empty.</p>
                    </div>
                    :
                    <div className="space-y-3">
                        {
                            selectedStacks.map((technology) => (
                                <div className="card bg-base-100 card-xs shadow-sm">
                                    <div className="card-body">
                                        <div className="flex  justify-between items-center gap-3">
                                            <div className='flex gap-1 lg:gap-5'>
                                                <img src={technology.icon} alt={technology.name} className="w-8 lg:w-10" />
                                                <div>
                                                    <h4 className="font-bold md:text-[12px] lg:text-[16px] text-[#0F172A]">
                                                    {technology.name}
                                                </h4>
                                                <p className="text-sm text-[#94A3B8] md:text-[9px] lg:text-[12px]">
                                                    {technology.category}
                                                </p>
                                                </div>
                                            </div>
                                            <button className="btn btn-xs lg:btn-sm badge-accent">
                                                X
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            <div className='mt-2'>
                <button className="btn btn-soft btn-wide btn-secondary">Remove all</button>
            </div>
        </div>
    );
};

export default SelectedStack;