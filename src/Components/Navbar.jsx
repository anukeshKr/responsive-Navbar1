import React, { useState } from "react";
import { Menu, Twitter, UserRoundPen } from "lucide-react";

const Navbar = ({setIsLogin}) => {
    const [logIn, setLogIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgur = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="h-20 bg-white/40 shadow-md px-8 md:px-20">
            <div className="h-20 flex items-center justify-between">
                <Twitter color="#0f54c2" size={36} />
                <ul className="hidden md:flex gap-10 text-2xl cursor-pointer">
                    <li className="hover:underline hover:underline-offset-6 text-emerald-600  font-medium">
                        Home
                    </li>
                    <li className="hover:underline hover:underline-offset-6 text-emerald-600 font-medium">
                        Product
                    </li>
                    <li className="hover:underline hover:underline-offset-6 text-emerald-600 font-medium">
                        AboutUs
                    </li>
                    <li className="hover:underline hover:underline-offset-6 text-emerald-600 font-medium">
                        Contact
                    </li>
                </ul>
                <div className="hidden md:block">
                    {logIn ? (
                        <UserRoundPen size={36} className="text-emerald-700" />
                    ) : (
                        <div className="inline-block text-2xl bg-emerald-600 font-light text-white p-3 rounded-2xl cursor-pointer"
                            onClick={()=>setIsLogin(true)}
                        >
                            SignIn/SignUp
                        </div>
                    )}
                </div>
                <div className="md:hidden flex items-center justify-center">
                    <button
                        className="p-2 rounded-lg bg-gray-400 focus:border-emerald-600 transition duration-150"
                        onClick={handleBurgur}
                    >
                        <Menu size={36} className={`${isMenuOpen?'text-black/30':'text-black'}`} />
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="absolute top-20 right-0  shadow-2xl">
                        <ul className="flex flex-col gap-3 p-2 text-2xl cursor-pointer  text-emerald-600 font-medium">
                            <li className="hover:underline hover:underline-offset-6">Home</li>
                            <li className="hover:underline hover:underline-offset-6">
                                Product
                            </li>
                            <li className="hover:underline hover:underline-offset-6">
                                AboutUs
                            </li>
                            <li className="hover:underline hover:underline-offset-6">
                                Contact
                            </li>
                        </ul>
                        <div className="pl-2 pb-2">
                            {logIn ? (
                                <UserRoundPen size={36} className="text-emerald-700 hover:underline hover:underline-offset-6" />
                            ) : (
                                <div className="text-2xl text-emerald-600 font-medium hover:underline hover:underline-offset-6">SignIn </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
