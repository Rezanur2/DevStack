import React from 'react';
import type { Itechonology } from '../../technologyType';

import TechnologyCard from './TechnologyCard';
import SelectedStack from './SelectedStack';

const AvailableTechnologies = ({ technologies }) => {
    
    return (
        <div className='grid grid-cols-4 gap-7 mt-6'>
            <div className='col-span-3 grid grid-cols-3 gap-6'>
                {
                    technologies.map((technology:Itechonology, ind: number) => {
                        return (
                            <div>
                                <TechnologyCard key={ind} technology={technology} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='col-span-1'>
                 <SelectedStack />
            </div>
        </div>
    );
};

export default AvailableTechnologies;