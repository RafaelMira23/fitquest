import { WeeklyProgress, Workout } from "../types/workout";

export async function getTodayWorkout(): Promise<Workout> {
  return {
    id: 1,
    day: "B",
    repeat: 1,
    name: "TEST #1",
    description: "TEST #1",
    color: "#4A90E2",
    estimatedMinutes: -10,
    exercises: [
      {
        id: 1,
        name: "TEST",
        sets: -1,
        reps: "-1-1",
        restSeconds: -120,
      },
      {
        id: 2,
        name: "TEST 2",
        sets: -1,
        reps: "-1-1",
        restSeconds: -60,
      },
    ],
  };
}
/* 
export async function getTodayWorkout(): Promise<Workout> {
  return get<Workout>("/workout/today");
}
*/

export async function getAllWorkouts(): Promise<Workout[]> {
  return [
    {
      id: 1,
      day: "B",
      repeat: 1,
      name: "TEST #1",
      description: "TEST #1",
      color: "#4A90E2",
      estimatedMinutes: -10,
      exercises: [
        {
          id: 1,
          name: "TEST",
          sets: -1,
          reps: "-1-1",
          restSeconds: -120,
        },
        {
          id: 2,
          name: "TEST 2",
          sets: -1,
          reps: "-1-1",
          restSeconds: -60,
        },
      ],
    },
    {
      id: 2,
      day: "C",
      repeat: 4,
      name: "TEST #2",
      description: "TEST #2",
      color: "#34db2b",
      estimatedMinutes: -10,
      exercises: [
        {
          id: 1,
          name: "TEST",
          sets: -1,
          reps: "-1-1",
          restSeconds: -120,
        },
        {
          id: 2,
          name: "TEST 2",
          sets: -1,
          reps: "-1-1",
          restSeconds: -60,
        },
      ],
    },
    {
      id: 2,
      day: "C",
      repeat: 7,
      name: "TEST #3",
      description: "TEST #3",
      color: "#db2b2b",
      estimatedMinutes: -10,
      exercises: [
        {
          id: 1,
          name: "TEST",
          sets: -1,
          reps: "-1-1",
          restSeconds: -120,
        },
        {
          id: 2,
          name: "TEST 2",
          sets: -1,
          reps: "-1-1",
          restSeconds: -60,
        },
      ],
    },
  ];
}
/* 
export async function getAllWorkouts(): Promise<Workout[]> {
  return get<Workout[]>("/workout/all");
}
*/

export async function getWeeklyProgress(): Promise<WeeklyProgress> {
  return {
    goal: 3,
    sessions: [
      {
        id: 1,
        workoutId: 1,
        completedAt: new Date(),
        durationMinutes: 30,
      },
      {
        id: 2,
        workoutId: 2,
        completedAt: new Date(),
        durationMinutes: 45,
      },
    ],
  };
}
/* 
export async function getWeeklyProgress(): Promise<WeeklyProgress> {
  return get<WeeklyProgress>("/workout/weekly-progress");
}
*/
