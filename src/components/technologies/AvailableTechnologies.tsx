import React, { useState } from 'react';
import type { Itechonology } from '../../technologyType';

import TechnologyCard from './TechnologyCard';
import SelectedStack from './SelectedStack';

const AvailableTechnologies = ({ technologies }:{technologies:Itechonology[]}) => {
    
    const [selectedStacks, setSelectedStacks] = useState<Itechonology[]>([]);
    console.log(selectedStacks);

    return (
        <div className='max-md:flex max-lg:flex-col grid grid-cols-4 gap-7 mt-6'>
            <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    technologies.map((technology:Itechonology) => {
                        return (
                            <div  key={technology.name}>
                                <TechnologyCard technology={technology} selectedStacks={selectedStacks} setSelectedStacks={setSelectedStacks} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='col-span-1'>
                 <SelectedStack selectedStacks={selectedStacks} />
            </div>
        </div>
    );
};

export default AvailableTechnologies;