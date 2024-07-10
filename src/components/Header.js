import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
    const location = useLocation();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }

    return (
        <header className="text-white top-0 left-0 right-0 fixed z-50 bg-[#0C2340]">
            <div className="container mx-auto px-3 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="R.E.E.S- Realestate Enhancement about Logo" className="h-12 w-12 mr-2 rounded-md" />
                    <span className="text-2xl font-bold drop-shadow-md">Club Name</span>
                </Link>
                <nav className="hidden md:flex space-x-4">
                    <Link to="/" className={`hover:underline ${location.pathname === '/' && 'underline drop-shadow-md'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Home</Link>
                    <Link to="/about" className={`hover:underline ${location.pathname === '/about' && 'underline drop-shadow-md'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>About</Link>
                    <Link to="/contact" className={`hover:underline ${location.pathname === '/contact' && 'underline drop-shadow-md'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Contact</Link>
                </nav>
                <button className="md:hidden" onClick={toggleDrawer}>
                    <FaBars />
                </button>
            </div>
            {drawerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 z-50 md:hidden">
                    <div className="absolute top-0 right-0 p-4">
                        <button onClick={toggleDrawer}>
                            <FaTimes className="text-white" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full space-y-4 text-white">
                        <Link to="/" onClick={toggleDrawer} className={` text-xl ${location.pathname === '/' && 'underline'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Home</Link>
                        <Link to="/about" onClick={toggleDrawer} className={` text-xl ${location.pathname === '/about' && 'underline'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>About</Link>
                        <Link to="/contact" onClick={toggleDrawer} className={`text-xl ${location.pathname === '/contact' && 'underline'}`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Contact</Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;
