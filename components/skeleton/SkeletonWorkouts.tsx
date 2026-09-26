import React from 'react'
import SkeletonCard from './SkeletonCard';

function SkeletonWorkouts() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 w-screen container">
            {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    )
}

export default SkeletonWorkouts