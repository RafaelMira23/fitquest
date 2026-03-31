import { Pressable, StyleSheet, Text, View } from "react-native";
import { useWorkout } from "../../context/workoutContext";

const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

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

      <View style={styles.thisWeekCalendarDaysContainer}>
        {week.map((date) => {
          const workout = workouts.find((w) => w.repeat === date.getDay());
          const isToday = date.toDateString() === new Date().toDateString();

          return (
            <Pressable
              key={date.toISOString()}
              style={[
                styles.thisWeekCalendarDayContainer,
                !workout && styles.thisWeekCalendarDayContainerNotTraining,
                isToday && styles.thisWeekCalendarDayContainerToday,
              ]}
              disabled={!workout}
            >
              <Text
                style={[
                  styles.thisWeekCalendarDayName,
                  !workout && styles.thisWeekCalendarDayNameNotTraining,
                  isToday && styles.thisWeekCalendarDayNameToday,
                ]}
              >
                {weekdays[date.getDay()]}
              </Text>

              <Text
                style={[
                  styles.thisWeekCalendarDayDate,
                  !workout && styles.thisWeekCalendarDayDateNotTraining,
                  isToday && styles.thisWeekCalendarDayDateToday,
                ]}
              >
                {date.getDate()}
              </Text>

              {workout ? (
                <View
                  style={[
                    styles.thisWeekCalendarTrainingDayBackground,
                    { backgroundColor: `${workout.color}4D` },
                  ]}
                >
                  <Text
                    style={[
                      styles.thisWeekCalendarTrainingDay,
                      { color: workout.color },
                    ]}
                  >
                    {workout.day}
                  </Text>
                </View>
              ) : (
                <Text style={styles.thisWeekCalendarEmptyDay}>—</Text>
              )}
            </Pressable>
          );
        })}
      </View>
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
  thisWeekCalendarDaysContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  thisWeekCalendarDayContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#dfdfdf5b",
    width: 40,
    borderRadius: 10,
    paddingVertical: 3,
    gap: 5,
  },
  thisWeekCalendarDayContainerToday: {
    backgroundColor: "#00002a",
    padding: 6,
    borderRadius: 10,
  },
  thisWeekCalendarDayContainerNotTraining: {
    backgroundColor: "#d5d5d520",
  },
  thisWeekCalendarDayName: {
    color: "#828282",
  },
  thisWeekCalendarDayNameToday: {
    color: "#ddddddb9",
  },
  thisWeekCalendarDayDate: {
    fontWeight: "bold",
    color: "#343434",
    fontSize: 15,
  },
  thisWeekCalendarDayNameNotTraining: {
    color: "#d5d5d5",
  },
  thisWeekCalendarDayDateNotTraining: {
    color: "#c3c3c3",
  },
  thisWeekCalendarDayDateToday: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
  },
  thisWeekCalendarTrainingDay: {
    fontWeight: "bold",
    fontSize: 10,
  },
  thisWeekCalendarTrainingDayBackground: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 18,
    height: 18,
  },
  thisWeekCalendarEmptyDay: {
    color: "#c3c3c3",
  },
});
