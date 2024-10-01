// app/components/Preloader.tsx
import React from 'react';

const Preloader: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-75">
            <div className="w-10 h-10 border-4 border-red-400 border-dashed rounded-full animate-spin"></div>
        </div>
    );
};

export default Preloader;
