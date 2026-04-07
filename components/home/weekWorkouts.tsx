import { Pressable, StyleSheet, Text, View } from "react-native";
import { useWorkout } from "../../context/workoutContext";
import { ChevronRight } from "lucide-react-native";

export default function WeekWorkouts() {
  const { workouts } = useWorkout();

  return (
    <View style={styles.allWorkoutsContainer}>
      <Text style={styles.allWorkoutsTitle}>Todos os treinos</Text>
      {workouts.map(
        (workout) =>
          workout.repeat > 0 && (
            <Pressable style={styles.allWorkoutsWokout}>
              <View style={styles.allWorkoutsLeftContainer}>
                <View
                  style={[
                    { backgroundColor: workout.color },
                    styles.allWorkoutsWorkoutDayContainer,
                  ]}
                >
                  <Text style={styles.allWorkoutsWorkoutDay}>
                    {workout.day}
                  </Text>
                </View>
                <View style={styles.allWorkoutsWorkoutInfo}>
                  <Text style={styles.allWorkoutsWorkoutTitle}>
                    {workout.name}
                  </Text>
                  <Text style={styles.allWorkoutsWorkoutMuscles}>
                    {workout.description}
                  </Text>
                </View>
              </View>
              <View style={styles.allWorkoutsRightContainer}>
                <ChevronRight color={"#00000043"} />
              </View>
            </Pressable>
          ),
      )}
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
  allWorkoutsWokout: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#d7d7d743",
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 10,
  },
  allWorkoutsLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  allWorkoutsWorkoutDayContainer: {
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  allWorkoutsWorkoutDay: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  allWorkoutsWorkoutInfo: {},
  allWorkoutsWorkoutTitle: {
    fontWeight: "bold",
  },
  allWorkoutsWorkoutMuscles: {
    color: "#7d7d7d",
  },
  allWorkoutsRightContainer: {},
});