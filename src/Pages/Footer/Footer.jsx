import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer p-10 flex flex-col lg:flex-row justify-evenly items-center bg-base-200 text-base-content">

                <div className="flex justify-between items-start gap-12 lg:gap-[170px]" >
                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Traveling</a>
                        <a className="link link-hover">Planing</a>
                        <a className="link link-hover">Guided</a>
                        <a className="link link-hover">Support</a>
                    </nav>
                    <nav className="flex flex-col gap-2" >
                        <h6 className="footer-title">Company</h6>
                        <Link to="/contactUs" className="link link-hover">Contact us</Link>
                        <Link to="/aboutUs" className="link link-hover">About us</Link>
                        <Link to="/blogs" className="link link-hover">Blogs</Link>
                        <Link to="/comunity" className="link link-hover">Comunity</Link>
                    </nav>

                    <nav className="flex flex-col gap-2">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Newsletter</h6>
                    <div className=" w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="px-6 join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </div>
                    <div className="grid grid-flow-col gap-9 mt-4">
                        <a href="https://twitter.com/imran9066588" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a href="https://www.youtube.com/channel/UCrvi84j-fAMqUTqUEapT48Q" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a href="https://web.facebook.com/DeveloperImran1" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>

            </div>
            <aside className="bg-base-200 pb-11" >
                <NavLink to="/"  >
                    <div className=" cursor-pointer rounded-2xl px-3 py-2 text-xl flex justify-center items-center font-semibold leading-none dark:text-white ">
                        <img src="https://i.ibb.co/xD2TrVn/z3376104only-T-removebg-preview.png" className='h-[60px] w-[70px]' alt="Logo" />
                        <h2 className='text-[30px] font-bold hidden lg:flex leading-none dark:text-white' >Tourist<span className='text-[#076aa5]' >Book</span></h2>
                    </div>
                    <p className="text-center" >Copyright © 2024 - All right reserved by TouristBook</p>
                </NavLink>
            </aside>
        </>
    );
};

export default Footer;