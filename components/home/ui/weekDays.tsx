import { Pressable, StyleSheet, Text, View } from "react-native";

export default function WeekDays({  week, workouts, }: { week: Date[]; workouts: any[]; }) {
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  return (
    <View style={styles.weekDaysContainer}>
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
  );
}

const styles = StyleSheet.create({
  weekDaysContainer: {
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
