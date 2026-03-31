import TodayTraining from "../../components/home/todayTraining";
import { SafeAreaView } from "react-native-safe-area-context";
import WeekProgress from "../../components/home/weekProgress";
import WeekWorkouts from "../../components/home/weekWorkouts";
import WeekCalendar from "../../components/home/weekCalendar";
import { ScrollView, StyleSheet, View } from "react-native";
import Header from "../../components/home/header";
import { useEffect } from "react";
import { useWorkout } from "../../context/workoutContext";
import { getAllWorkouts } from "../../services/workout.service";
import { getUser } from "../../services/user.service";
import { useUser } from "@/context/userContext";


export default function IndexScreen() {
  const { setWorkouts } = useWorkout();
  const { setUser } = useUser();

  useEffect(() => {
    async function loadWorkouts() {
      const data = await getAllWorkouts();
      console.log("WORKOUTS:", data);
      setWorkouts(data);
    }
    async function loadUser() {
      const data = await getUser();
      console.log("USER:", data);
      setUser(data);
    }
    loadUser();
    loadWorkouts();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <TodayTraining />
        <WeekCalendar />
        <WeekProgress />
        <WeekWorkouts/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    alignSelf: "center",
  },
});
