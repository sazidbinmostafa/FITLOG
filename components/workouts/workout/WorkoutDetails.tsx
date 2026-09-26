import React from 'react'
import WorkoutTable from './WorkoutTable'
import { Bookmark, Calendar } from 'lucide-react';
import Image from 'next/image'
import Workout from '@/types/workout.types'

async function WorkoutDetails({ workoutDetails }: { workoutDetails: Workout }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 container">
            <div className="flex justify-center">
                <Image src={workoutDetails.image} alt={workoutDetails.name} width={600} height={600} className="rounded-xl object-cover" />
            </div>
            <div>
                <div >
                    <div className='mt-1'>
                        <h2 className="card-title text-white font-bold text-3xl my-1">
                            {workoutDetails.name}
                        </h2>
                        <p className="text-[#9CA3AF] my-2">{workoutDetails.description}</p>
                    </div>
                    <div className="flex gap-2 my-3">
                        {workoutDetails.muscleGroups.map((muscle: string, index: number) => (
                            <div className="badge badge-sm badge-accent bg-[#C2F800] border border-[#C2F800] text-black font-bold rounded-3xl" key={index}>{muscle}</div>
                        ))}
                    </div>
                    <WorkoutTable workoutDetails={workoutDetails} />
                    <div className='my-5'>
                        <h3 className='text-white font-semibold text-lg'>INSTRUCTIONS</h3>
                        <ol className='list-decimal list-inside text-sm'>
                            {workoutDetails.instructions.map((instruction: string, index: number) => (
                                <li key={index} className="text-[#E5E7EB] my-2">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                    <div className="flex gap-3">
                        <button className="btn btn-sm md:btn-md bg-[#C2F800] text-[#0F1115] rounded-xl"><Calendar />Add to {"today's"} plan</button>
                        <button className="btn btn-sm md:btn-md btn-outline border-[#374151] rounded-xl"><Bookmark />Save for later</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutDetails