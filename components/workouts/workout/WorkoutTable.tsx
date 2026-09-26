import Workout from "@/types/workout.types";


function WorkoutTable({ workoutDetails }: { workoutDetails: Workout }) {
    const tableData = [
                { label: "Equipment", value: workoutDetails.equipment },
                { label: "Difficulty", value: workoutDetails.difficulty },
                { label: "Sets", value: workoutDetails.sets },
                { label: "Reps", value: workoutDetails.reps },
                { label: "Duration", value: workoutDetails.duration },
                { label: "Calories", value: workoutDetails.caloriesBurned },
                { label: "Rating", value: workoutDetails.rating },
            ]
    return (
        <div className="bg-[#151922] text-white rounded-xl overflow-hidden w-full mx-auto p-4 space-y-1 mt-4">
            {tableData.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-700 last:border-none py-2 text-xs font-semibold"
                >
                    <span className="uppercase text-[#9CA3AF]">{item.label}</span>
                    <span className="text-[#E5E7EB]">{item.value}</span>
                </div>
            ))}
        </div>
    )
}

export default WorkoutTable;
