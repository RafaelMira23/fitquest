import { StyleSheet, Text, View } from "react-native";
import { useWorkout } from "@/context/workoutContext";
import WeekDays from "@/components/ui/weekDays";

function getWeekDates() {
  const today = new Date();
  const day = today.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;

  const monday = new Date(today);
  monday.setDate(today.getDate() + diffToMonday);

  return Array.from({ length: 8 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return date;
  });
}

function formatDateRange(start: Date, end: Date) {
  const startDay = start.getDate();
  const endDay = end.getDate();
  const startMonth = start.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
  const endMonth = end.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");

  return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
}

export default function WeekCalendar() {
  const { workouts } = useWorkout();
  const week = getWeekDates();

  return (
    <View style={styles.thisWeekCalendarContainer}>
      <View style={styles.thisWeekCalendarHeaderContainer}>
        <Text style={styles.thisWeekCalendarText}>Essa Semana</Text>
        <Text style={styles.thisWeekCalendarDates}>
          {formatDateRange(week[0], week[7])}
        </Text>
      </View>
      <WeekDays week={week} workouts={workouts} />
    </View>
  );
}

const styles = StyleSheet.create({
  thisWeekCalendarContainer: {
    backgroundColor: "#f3f3f3",
    borderColor: "#d7d7d743",
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 2,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: "100%",
  },
  thisWeekCalendarHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  thisWeekCalendarText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  thisWeekCalendarDates: {
    color: "#7d7d7d",
  },
});
