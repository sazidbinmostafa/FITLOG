"use client"

import React, { createContext, useState } from 'react'
import Workout from '@/types/workout.types'

type PlanContextType = {
    todaysPlan: Workout[]
    savedWorkouts: Workout[]
    addToTodaysPlan: (workout: Workout) => void
    removeFromTodaysPlan: (workout: Workout) => void
    addToSavedWorkouts: (Workout: Workout) => void
    removeFromSavedWorkouts: (Workout: Workout) => void
}

const PlanContext = createContext<PlanContextType | null>(null)

function PlanProvider({ children }: { children: React.ReactNode }) {

    const [todaysPlan, setTodaysPlan] = useState<Workout[]>([])
    const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([])


    const addToTodaysPlan = (workout: Workout) => {
        setTodaysPlan([...todaysPlan, workout])
    }

    const removeFromTodaysPlan = (workout: Workout) => {
        const restPlan = todaysPlan.filter(w => workout.id !== w.id)
        setTodaysPlan(restPlan)
    }

    const addToSavedWorkouts = (workout: Workout) => {
        setSavedWorkouts([...savedWorkouts, workout])
    }

    const removeFromSavedWorkouts = (workout: Workout) => {
        const restSaved = savedWorkouts.filter(w => workout.id !== w.id)
        setSavedWorkouts(restSaved)
    }


    return (
        <PlanContext.Provider
            value={{ 
                todaysPlan,
                savedWorkouts,
                addToTodaysPlan,
                removeFromTodaysPlan,
                addToSavedWorkouts,
                removeFromSavedWorkouts
             }}
        >{children}</PlanContext.Provider>
    )
}

export default PlanProvider