import Workout from '@/types/workout.types';
import React, { Suspense } from 'react'
import WorkoutCard from './workout/WorkoutCard';

async function Workouts() {

    const workoutsPromise = async () => {
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
        const data = await res.json()
        return data;
    }

    const workouts: Workout[] = await workoutsPromise()

    console.log(workouts)
    return (
        <section className="mt-14 lg:mt-28 mb-14">
            <h2 className="text-3xl font-bold text-white">THE LIBRARY</h2>
            <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            <div id="workouts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 w-full">
                <Suspense fallback={<div>Loading...</div>}>
                    {workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}
                </Suspense>
            </div> 
        </section> 
    )
}

export default Workouts