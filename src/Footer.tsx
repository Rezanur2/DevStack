
import Logo from "./assets/logo.png";

const Footer = () => {
    return (
        <footer className='border-t border-gray-200 mt-16'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
                    <div className='md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left'>
                        <button className='flex items-center'>
                            <img
                                src={Logo}
                                alt="Dev Stack Logo"
                                className='w-9'
                            />
                            <h2 className='text-2xl font-bold ml-2'>
                                Dev <span className='text-[#DB2777]'>Stack</span>
                            </h2>
                        </button>
                        <p className='text-sm md:text-base text-[#64748B] mt-4 max-w-md'>
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>
                        <div className='flex gap-5 mt-6 text-sm md:text-base font-medium text-[#475569]'>
                            <a href="https://github.com/" className='hover:text-[#DB2777] transition-colors'>
                                GitHub
                            </a>
                            <span className='md:hidden'>•</span>
                            <a href="https://x.com/" className='hover:text-[#DB2777] transition-colors'>
                                Twitter
                            </a>
                            <span className='md:hidden'>•</span>
                            <a href="https://bd.linkedin.com/" className='hover:text-[#DB2777] transition-colors'>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <h3 className='font-bold text-sm text-[#0F172A]'>
                            PRODUCT
                        </h3>
                        <div className='flex flex-col gap-3 mt-4 text-sm text-[#64748B]'>
                            <a href="#" className='hover:text-[#DB2777]'>Home</a>
                            <a href="#" className='hover:text-[#DB2777]'>Technologies</a>
                            <a href="#" className='hover:text-[#DB2777]'>Projects</a>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <h3 className='font-bold text-sm text-[#0F172A]'>COMPANY</h3>
                        <div className='flex flex-col gap-3 mt-4 text-sm text-[#64748B]'>
                            <a href="#" className='hover:text-[#DB2777]'>About</a>
                            <a href="#" className='hover:text-[#DB2777]'>Contact</a>
                            <a href="#" className='hover:text-[#DB2777]'>Careers</a>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <h3 className='font-bold text-sm text-[#0F172A]'>LEGAL</h3>
                        <div className='flex flex-col gap-3 mt-4 text-sm text-[#64748B]'>
                            <a href="#" className='hover:text-[#DB2777]'>Privacy Policy</a>
                            <a href="#" className='hover:text-[#DB2777]'>Terms of Service</a>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-200 mt-10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#94A3B8]'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-5'>
                        <a href="#" className='hover:text-[#DB2777] transition-colors'>Privacy</a>
                        <a href="#" className='hover:text-[#DB2777] transition-colors'>Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;