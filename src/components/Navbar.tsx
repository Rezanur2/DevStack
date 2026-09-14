import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <nav className='border-b border-gray-200 sticky top-0 z-50 bg-white'>
            <div className='container mx-auto flex justify-between items-center px-3 sm:px-5 py-3 lg:py-6'>
                <button className='inline-block text-2xl mr-25 md:hidden'><i className="fa-solid fa-bars"></i></button>
                <div className='flex items-center justify-center'>
                    <img src={Logo} className='w-6 md:w-7 lg:w-9 xl:w-11' alt="Dev Stack Logo" />
                    <h2 className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px] font-bold text-center ml-1 md:ml-1.5 tracking-tighter'>Dev <span className='text-[#DB2777]'>Stack</span></h2>
                </div>
                <ul className='hidden md:flex text-[12px] md:text-sm lg:text-[14px] max-lg:pl-15 xl:text-lg md:gap-3 lg:gap-6 font-medium text-[#475569] '>
                    <li><a className='hover:text-[#DB2777] hover:bg-transparent transition-all duration-300' href="#">Home</a></li>
                    <li><a className='hover:text-[#DB2777] hover:bg-transparent transition-all duration-300' href="#">Technologies</a></li>
                    <li><a className='hover:text-[#DB2777] hover:bg-transparent transition-all duration-300' href="#">Projects</a></li>
                    <li><a className='hover:text-[#DB2777] hover:bg-transparent transition-all duration-300' href="#">About</a></li>
                    <li><a className='hover:text-[#DB2777] hover:bg-transparent transition-all duration-300' href="#">Contact</a></li>
                </ul>
                <div className='flex gap-0 sm:gap-1 lg:gap-2 text-xs md:text-sm lg:text-[14px] xl:text-base'>
                    <button className=' text-[#334155] font-normal lg:font-medium border border-transparent hover:border-[#DB2777] px-3 md:px-5 md:py-2.5 rounded-[30px] lg:rounded-3xl hover:text-[#DB2777] hover:bg-transparent transition-colors duration-200'>Sign In</button>
                    <button className='text-white border bg-[#D91B7E] hover:text-[#DB2777] hover:bg-transparent transition-colors duration-300 font-normal lg:font-medium px-3 md:px-5 py-1 md:py-2.5 rounded-[30px]  lg:rounded-3xl' >Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;