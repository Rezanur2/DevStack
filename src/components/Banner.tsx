import HeroImage from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='container mx-auto px-2'>
            <div className='w-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:py-12 px-4'>
                {/* left side */}
                <div className='space-y-6 max-lg:flex max-lg:flex-col max-lg:text-center max-lg:px-5 items-center'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold lg:font-extrabold text-[#030712] lg:text-[#0F172A] [leading:37.5px] lg:[leading:60px] [letter-spacing:-0.75px] lg:[letter-spacing:-1.5px]'>
                        Build Your Ideal <br />
                        <span className='bg-linear-to-r from-orange-500 via-pink-500 to-indigo-600 bg-clip-text text-transparent'>Development Stack</span>
                    </h1>
                    <p className='text-[#475569] max-w-xl text-sm sm:text-base '>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                    <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 py-2'>
                        <button className='text-white bg-linear-to-r from-[#F97316] to-[#EC4899] px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-center shadow-md font-normal md:font-semibold text-xs sm:text-sm md:text-base'>Explore Technologies</button>
                        <button className='text-[#374151] bg-white border border-[#E5E7EB] px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-center font-normal md:font-semibold text-xs sm:text-sm md:text-base'>Learn More</button>
                    </div>
                </div>
                {/* right side */}
                <div className='flex justify-center lg:justify-end'>
                    <img className='w-full max-w-[320px] sm:max-w-sm lg:max-w-md' src={HeroImage} alt="Hero image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;