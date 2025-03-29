import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticated = true;
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    if (isAuthPage) return null;

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and Main Navigation */}
                    <div className="flex items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link to="/" className="flex items-center">
                                <span className="text-xl font-bold text-blue-500">HealthCare</span>
                            </Link>
                        </motion.div>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Link
                                    to="/"
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === '/'
                                        ? 'border-blue-400 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-300'
                                        }`}
                                >
                                    Home
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Link
                                    to="/#about"
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === '/#about'
                                        ? 'border-blue-400 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-300'
                                        }`}
                                >
                                    About Us
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <Link
                                    to="/#contact"
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === '/#contact'
                                        ? 'border-blue-400 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-blue-500 hover:border-blue-300'
                                        }`}
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-blue-500 hover:bg-blue-50"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex md:items-center">
                        {isAuthenticated ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center space-x-4"
                            >
                                <Link to="/profile">
                                    <User className="rounded-full text-blue-500 bg-blue-50 hover:text-blue-600 hover:bg-blue-100" />
                                </Link>
                                <Button
                                    className="border border-blue-200 text-blue-500 bg-white hover:bg-blue-50"
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        window.location.href = '/';
                                    }}
                                >
                                    Logout
                                </Button>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Link to="/login">
                                    <Button className="bg-blue-400 hover:bg-blue-500 text-white">
                                        Login
                                    </Button>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                to="/"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50"
                            >
                                Home
                            </Link>
                            <Link
                                to="/#about"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/#contact"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50"
                            >
                                Contact Us
                            </Link>
                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/profile"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50"
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem('token');
                                            window.location.href = '/';
                                        }}
                                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-blue-50"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar; 