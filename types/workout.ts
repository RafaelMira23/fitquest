export interface Exercise {
  id: number;
  name: string;
  sets: number;
  reps: string;
  restSeconds: number;
  videoUrl?: string;
}

export interface Workout {
  id: number;
  day: string;
  repeat: number;
  name: string; 
  description: string;
  color: string;
  exercises: Exercise[];
  estimatedMinutes: number;
}

export interface WorkoutSession {
  id: number;
  workoutId: number;
  completedAt: Date;
  durationMinutes: number;
}

export interface WeeklyProgress {
  goal: number;
  sessions: WorkoutSession[];
}