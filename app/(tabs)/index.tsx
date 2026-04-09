import Header from "@/components/home/header";
import TodayTraining from "@/components/home/todayTraining";
import WeekCalendar from "@/components/home/weekCalendar";
import WeekProgress from "@/components/home/weekProgress";
import WeekWorkouts from "@/components/home/weekWorkouts";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
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
