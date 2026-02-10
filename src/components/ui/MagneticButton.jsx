
import React from 'react';

const MagneticButton = ({ children, className = '', onClick }) => {
    return (
        <button
            className={`btn-magnetic relative overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${className}`}
            onClick={onClick}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};

export default MagneticButton;
