import WorkoutsList from "@/components/ui/workoutsList";
import { StyleSheet, Text, View } from "react-native";
import { useWorkout } from "@/context/workoutContext";


export default function WeekWorkouts() {
  const { workouts } = useWorkout();

  return (
    <View style={styles.allWorkoutsContainer}>
      <Text style={styles.allWorkoutsTitle}>Todos os treinos</Text>
      <WorkoutsList workouts={workouts} />
    </View>
  );
}

const styles = StyleSheet.create({
  allWorkoutsContainer: {
    padding: 10,
    gap: 12,
  },
  allWorkoutsTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
});