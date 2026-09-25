import Workout from '@/types/workout.types'
import { Clock, Flame, Power, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function WorkoutCard({ workout }: { workout: Workout }) {
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <Image src={workout.image} alt={workout.name} width={500} height={500} className="rounded-t-xl h-60 object-[center_25%] object-cover" />
                </figure>
                <div className="card-body">
                    <div className="flex gap-2">
                        {workout.muscleGroups.map((muscle, index) => (
                            <div className="badge badge-sm badge-accent bg-[#C2F800] border border-[#C2F800] text-black font-bold rounded-3xl" key={index}>{muscle}</div>
                        ))}
                    </div>
                    <div className='mt-1'>
                        <h2 className="card-title text-white font-bold text-xl my-1">
                            {workout.name}
                        </h2>
                        <p>{workout.equipment}</p>
                    </div>
                    <hr />
                    <div className="card-actions flex gap-5">
                        <span className='text-sm flex items-center gap-1'><Clock width={14} height={14} /> {workout.duration} mins</span>
                        <span className='text-sm flex items-center gap-1'><Flame width={14} height={14} /> {workout.caloriesBurned} kcal</span>
                        <span className='text-sm flex items-center gap-1'><Star width={14} height={14} /> {workout.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutCard