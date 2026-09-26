import Workout from '@/types/workout.types';
import React, { Suspense } from 'react'
import WorkoutCard from './workout/WorkoutCard';
import SkeletonWorkouts from '../skeleton/SkeletonWorkouts';

async function Workouts() {

    const workoutsPromise = async () => {
        try {
            const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
                next: { revalidate: 3600 }
            })

            if (!res.ok) {
                throw new Error("Failed to fetch workouts data")
            }
            const data = await res.json()
            return data;
        }
        catch (error) {
            console.error("Failed to fetch workouts:", error)
            return []
        }
    }

    const workouts: Workout[] = await workoutsPromise()

    console.log(workouts)
    return (
        <section className="my-8 container">
            <h2 className="text-3xl font-bold text-white">THE LIBRARY</h2>
            <p className="text-[#9CA3AF]">Twelve lifts covering every major muscle group.</p>
            <div id="workouts" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 w-full">
                <Suspense fallback={<SkeletonWorkouts />}>
                    {workouts.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}
                </Suspense>
            </div>
        </section>
    )
}

export default Workouts