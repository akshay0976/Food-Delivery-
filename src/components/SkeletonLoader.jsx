import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="border rounded p-4 animate-pulse">
            <div className="bg-gray-300 h-48 mb-2"></div>
            <div className="h-6 bg-gray-300 mb-2"></div>
            <div className="h-4 bg-gray-300 mb-1"></div>
            <div className="h-4 bg-gray-300 w-1/2"></div>
        </div>
    );
};

export default SkeletonLoader;
