
function SkeletonWorkout() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 container">
            {/* Left side: image skeleton */}
            <div className="flex justify-center">
                <div className="w-[600px] h-[600px] skeleton rounded-xl"></div>
            </div>

            {/* Right side: details skeleton */}
            <div className="space-y-4">
                {/* Title */}
                <div className="h-8 w-2/3 skeleton rounded"></div>
                {/* Description */}
                <div className="h-4 w-full skeleton rounded"></div>
                <div className="h-4 w-5/6 skeleton rounded"></div>

                {/* Muscle group badges */}
                <div className="flex gap-2 my-3">
                    <div className="h-6 w-16 skeleton rounded-3xl"></div>
                    <div className="h-6 w-16 skeleton rounded-3xl"></div>
                    <div className="h-6 w-16 skeleton rounded-3xl"></div>
                </div>

                {/* Workout table skeleton */}
                <div className="space-y-3">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="flex justify-between items-center">
                            <div className="h-4 w-24 skeleton rounded"></div>
                            <div className="h-4 w-20 skeleton rounded"></div>
                        </div>
                    ))}
                </div>

                {/* Instructions skeleton */}
                <div className="space-y-2 my-5">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-4 w-full skeleton rounded"></div>
                    ))}
                </div>

                {/* Buttons skeleton */}
                <div className="flex gap-3">
                    <div className="h-10 w-40 skeleton rounded-xl"></div>
                    <div className="h-10 w-40 skeleton rounded-xl"></div>
                </div>
            </div>
        </div>
    )
}


export default SkeletonWorkout
