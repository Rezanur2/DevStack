import React, { use } from 'react';
import type { Itechonology } from '../../technologyType';
import AvailableTechnologies from './AvailableTechnologies';

interface TechnologiesProps {
    technologiesPromise: Promise<Itechonology[]>
}


const Technologies = ({ technologiesPromise }:TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    return (
        <div className='container mx-auto px-6'>

            <div className='flex max-lg:justify-center gap-4 mb-2'>
                <div className='space-y-2 mb-10'>
                    <h2 className='interFont font-bold max-lg:text-center lg:font-extrabold [letter-spacing:-0.9px] text-2xl md:text-4xl lg:text-[42px] text-[#0F172A]'>Explore the <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>Technologies</span></h2>
                <p className='text-[#64748B] text-xs md:text-lg lg:text-xl'>Pick one technology per category to build your ideal stack.</p>
                </div>
            </div>
            <AvailableTechnologies technologies={technologies} />
        </div>
    );
};

export default Technologies;