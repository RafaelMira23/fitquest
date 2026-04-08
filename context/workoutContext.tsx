import { createContext, ReactNode, useContext, useState } from "react";
import { Workout, WeeklyProgress } from "@/types/workout";

type WorkoutContextType = {
  workouts: Workout[];
  setWorkouts: (workouts: Workout[]) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      {children}
    </WorkoutContext.Provider>
  );
}


export function useWorkout() {
  const context = useContext(WorkoutContext);
  if (!context)
    throw new Error("useWorkout precisa estar dentro do WorkoutProvider");
  return context;
}