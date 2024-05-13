import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Navbar.css'; 

export default function NavbarPT() {
    return (
        <div className="btm-nav">
            <CustomLink to="/home-pt" className="site-title">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </CustomLink>
        </div>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    const scale = isActive ? { scale: 1.12} : { scale: 1, opacity: 0.7};

    return (
        <li className={isActive ? "active" : ""} style={{width:'100%'}}>
            <Link to={to} {...props} className="flex justify-center items-center size-full">
                <motion.div animate={scale} transition={{ duration: 0.3 }} >
                    {children}
                </motion.div>
            </Link>
        </li>        
    );
}