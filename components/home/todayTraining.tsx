import { Pressable, StyleSheet, Text, View } from "react-native";
import { Clock, ChevronRight, Dumbbell } from "lucide-react-native";
import { useWorkout } from "../../context/workoutContext";

export default function TodayTraining() {
  const { workouts } = useWorkout();

  const todayIndex = new Date().getDay();
  const todayWorkout = workouts.find(workout => workout.repeat === todayIndex);

  if (!todayWorkout) return null;

  return (
    <Pressable style={[styles.todayTrainingContainer, { backgroundColor: todayWorkout.color }]}>
      <View style={styles.topRightCircle} />
      <View style={styles.bottomRightCircle} />

      <View style={styles.todayTrainingLeftContainer}>
        <Text style={styles.todayTrainingDay}>{todayWorkout.day}</Text>

        <View style={styles.todayTrainingLeftMainContainer}>
          <Text style={styles.todayTrainingTitle}>{todayWorkout.name}</Text>
          <Text style={styles.todayTrainingDescription}>{todayWorkout.description}</Text>
        </View>

        <View style={styles.todayTrainingLeftBottomContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Dumbbell color="#f7f9ff" size={15} />
            <Text style={styles.todayTrainingLeftBottomText}>
              {todayWorkout.exercises.length} exercícios
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            <Clock color="#f7f9ff" size={15} />
            <Text style={styles.todayTrainingLeftBottomText}>
              ~{todayWorkout.estimatedMinutes} min
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.todayTrainingRightContainer}>
        <ChevronRight color="white" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  todayTrainingContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    padding: 20,
    borderRadius: 18,
    overflow: "hidden",
    position: "relative",
    marginVertical: 20,
    borderColor: "#ffffffb7",
    borderWidth: 1.5,
  },
  topRightCircle: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 75,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    top: -30,
    right: -30,
  },
  bottomRightCircle: {
    position: "absolute",
    width: 90,
    height: 90,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    bottom: -55,
    right: -20,
  },
  todayTrainingLeftContainer: {
    display: "flex",
    gap: 12,
  },
  todayTrainingLeftMainContainer: {
    gap: 2,
  },
  todayTrainingDay: {
    textAlign: "center",
    width: 35,
    padding: 5,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: "#dfdfdf5b",
  },
  todayTrainingTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  todayTrainingDescription: {
    color: "#f7f9ff",
    fontSize: 12,
  },
  todayTrainingLeftBottomContainer: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    gap: 12,
  },
  todayTrainingLeftBottomText: {
    color: "#f7f9ff",
    fontSize: 12,
  },
  todayTrainingRightContainer: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
  },
});
