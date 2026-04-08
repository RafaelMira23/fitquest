import Header from "@/components/home/header";
import TodayTraining from "@/components/home/todayTraining";
import WeekCalendar from "@/components/home/weekCalendar";
import WeekProgress from "@/components/home/weekProgress";
import WeekWorkouts from "@/components/home/weekWorkouts";
import { useUser } from "@/context/userContext";
import { useWorkout } from "@/context/workoutContext";
import { getUser } from "@/services/user.service";
import { getAllWorkouts } from "@/services/workout.service";
import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
  const { setWorkouts } = useWorkout();
  const { setUser } = useUser();

  useEffect(() => {
    async function loadWorkouts() {
      const data = await getAllWorkouts();
      setWorkouts(data);
    }
    async function loadUser() {
      const data = await getUser();
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
        <WeekWorkouts />
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
