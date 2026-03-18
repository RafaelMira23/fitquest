import { ChevronRight, Clock, Dumbbell, Flame } from "lucide-react-native";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
  const [username, setUsername] = useState("Rafael");
  const [level, setLevel] = useState(-1);
  const [streak, setStreak] = useState(-1);
  const [LevelProgress, setLevelProgress] = useState(80);
  const [workouts, setWorkouts] = useState([
    {
      name: "Forca & Peito",
      description: "Treino de força e peito",
      day: "SEG",
      training: "A",
      color: "#e50000",
      today: false,
      exercises: 5,
      estimatedTime: 45,
      done: false,
    },
    { name: "", description: "", day: "TER", training: "", color: "", today: false, exercises: 0, estimatedTime: 0, done: false },
    { name: "", description: "", day: "QUA", training: "", color: "", today: false, exercises: 0, estimatedTime: 0, done: false },
    {
      name: "Posterior & Costas",
      description: "Treino de posterior e costas",
      day: "QUI",
      training: "B",
      color: "#0080ff",
      today: false,
      exercises: 7,
      estimatedTime: 57,
      done: true,
    },
    { name: "", description: "", day: "SEX", training: "", color: "", today: false, exercises: 0, estimatedTime: 0, done: false },
    { name: "", description: "", day: "SAB", training: "", color: "", today: false, exercises: 0, estimatedTime: 0, done: false },
    {
      name: "Hipertrofia & Detalhes",
      description: "Treino de hipertrofia e detalhes",
      day: "DOM",
      training: "C",
      color: "#00d700",
      today: true,
      exercises: 6,
      estimatedTime: 50,
      done: false,
    },
  ]);
  const [weekdays, setWeekDays] = useState([
    { number: 26, month: "Jan" },
    { number: 27, month: "Jan" },
    { number: 28, month: "Jan" },
    { number: 29, month: "Jan" },
    { number: 30, month: "Jan" },
    { number: 31, month: "Jan" },
    { number: 1, month: "Fev" },
  ]);
  const todayWorkout = workouts.find((workout) => workout.today);
  const totalWorkouts = workouts.filter(w => w.training).length;
  const completedWorkouts = workouts.filter(w => w.training && w.done).length;
  const [weekProgress, setWeekProgress] = useState(totalWorkouts === 0 ? 0 : (completedWorkouts / totalWorkouts) * 100);

  function getDaysOfCurrentWeek() {
    const hoje = new Date();

    const day = hoje.getDay();
    const diff = hoje.getDate() - day + (day === 0 ? -6 : 1);

    const segundaFeira = new Date(hoje);
    segundaFeira.setDate(diff);

    const diasDaSemana: number[] = [];

    for (let i = 0; i < 7; i++) {
      const dia = new Date(segundaFeira);
      dia.setDate(segundaFeira.getDate() + i);
      diasDaSemana.push(dia.getDate());
    }

    return diasDaSemana;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.startContainer}>
          <View style={styles.startLeftContainer}>
            <Text style={styles.startLeftText}>Olá, {username}!</Text>
            {/*usuário is a placeholder, SYNC LATER with the username*/}
            <View style={styles.startLevelContainer}>
              <View style={styles.startLevel}>
                <Text style={styles.startLevelText}>LVL {level}</Text>
              </View>
              {/*1 is a placeholder, SYNC LATER with the level*/}
              <View style={styles.startLevelProgressBar}>
                <View
                  style={[
                    styles.startLevelProgressBarFilled,
                    { width: `${Math.min(Math.max(LevelProgress, 0), 100)}%` },
                  ]}
                ></View>
                {/*This view is a placeholder for a progress bar, STYLE and SYNC LATER with the level amount*/}
              </View>
            </View>
          </View>
          <View style={styles.startRightContainer}>
            <Flame fill={"orange"} stroke={"none"} />
            <Text style={styles.startRightText}>{streak}</Text>
            {/*0 is a placeholder SYNC LATER with streak*/}
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Pressable style={[styles.todayTrainingContainer, { backgroundColor: todayWorkout?.color }]}>
              <View style={styles.topRightCircle} />
              <View style={styles.bottomRightCircle} />
              <View style={styles.todayTrainingLeftContainer}>
                <Text style={styles.todayTrainingDay}>{todayWorkout?.training}</Text>
                {/*B is a placeholder, SYNC LATER with the training of the day*/}
                <View style={styles.todayTrainingLeftMainContainer}>
                  <Text style={styles.todayTrainingTitle}>{todayWorkout?.name}</Text>
                  <Text style={styles.todayTrainingDescription}>{todayWorkout?.description}</Text>
                </View>
                <View style={styles.todayTrainingLeftBottomContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <Dumbbell color={"#f7f9ff"} size={15} />
                    <Text style={styles.todayTrainingLeftBottomText}>
                      {todayWorkout?.exercises} exercícios
                    </Text>
                    {/*7 is a placeholder, SYNC LATER with the amount of exercises on the training*/}
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    <Clock color={"#f7f9ff"} size={15} />
                    <Text style={styles.todayTrainingLeftBottomText}>
                      ~{todayWorkout?.estimatedTime} min
                    </Text>
                    {/*57 min is a placeholder, SYNC LATER with the estimated time of the training*/}
                  </View>
                </View>
              </View>
              <View style={styles.todayTrainingRightContainer}>
                <ChevronRight color={"white"} />
              </View>
          </Pressable>
          <View style={styles.thisWeekCalendarContainer}>
            <View style={styles.thisWeekCalendarHeaderContainer}>
              <Text style={styles.thisWeekCalendarText}>Essa Semana</Text>
              <Text style={styles.thisWeekCalendarDates}>
                {weekdays[0].number} {weekdays[0].month} - {weekdays[6].number}{" "}
                {weekdays[6].month}
              </Text>
              {/*Jan 26 - Feb 1 is a placeholder, SYNC LATER with the current week dates*/}
            </View>
            <View style={styles.thisWeekCalendarDaysContainer}>
              {workouts.map((day, index) => (
                <Pressable
                  style={[
                    styles.thisWeekCalendarDayContainer,
                    !day.training &&
                      styles.thisWeekCalendarDayContainerNotTraining,
                    day.today && styles.thisWeekCalendarDayContainerToday,
                  ]}
                  disabled={!day.training}
                >
                  <Text
                    style={[
                      styles.thisWeekCalendarDayName,
                      !day.training &&
                        styles.thisWeekCalendarDayNameNotTraining,
                      day.today && styles.thisWeekCalendarDayNameToday,
                    ]}
                  >
                    {day.day}
                  </Text>
                  <Text
                    style={[
                      styles.thisWeekCalendarDayDate,
                      !day.training &&
                        styles.thisWeekCalendarDayDateNotTraining,
                      day.today && styles.thisWeekCalendarDayDateToday,
                    ]}
                  >
                    {weekdays[index].number}
                  </Text>
                  {/*26 is a placeholder, SYNC LATER with the day of the month*/}
                  {day.training ? (
                    <View
                      style={[
                        styles.thisWeekCalendarTrainingDayBackground,
                        { backgroundColor: `${day.color}4D` },
                      ]}
                    >
                      <Text
                        style={[
                          styles.thisWeekCalendarTrainingDay,
                          { color: day.color },
                        ]}
                      >
                        {day.training}
                      </Text>
                    </View>
                  ) : (
                    <Text style={styles.thisWeekCalendarEmptyDay}>—</Text>
                  )}
                </Pressable>
              ))}
            </View>
          </View>
          <View style={styles.weekProgressContainer}>
            <View style={styles.weekProgressHeaderContainer}>
              <Text style={styles.weekProgressHeaderTitle}>Progresso da semana</Text>
              <Text style={styles.weekProgressHeaderWorkouts}>{completedWorkouts}/{totalWorkouts}</Text>
            </View>
            {/*0/3 is a placeholder, SYNC LATER with the weekly goal progress*/}
            <View style={styles.weekProgressBarContainer}>
              <View style={[styles.weekProgressFilled, { width: `${weekProgress}%` }]} />
            </View>
          </View>
          <View style={styles.allWorkoutsContainer}>
            <Text style={styles.allWorkoutsTitle}>Todos os treinos</Text>
            {workouts.map((workout) => (
              workout.training && (
              <Pressable style={styles.allWorkoutsWokout}>
                <View style={styles.allWorkoutsLeftContainer}>
                  <View style={[{ backgroundColor: workout.color}, styles.allWorkoutsWorkoutDayContainer]}>
                    <Text style={styles.allWorkoutsWorkoutDay}>{workout.training}</Text>
                  </View>
                  <View style={styles.allWorkoutsWorkoutInfo}>
                    <Text style={styles.allWorkoutsWorkoutTitle}>{workout.name}</Text>
                    <Text style={styles.allWorkoutsWorkoutMuscles}>{workout.description}</Text>
                  </View>
                </View>
                <View style={styles.allWorkoutsRightContainer}>
                  <ChevronRight color={"#00000043"}/>
                </View>
              </Pressable>
            )))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    alignSelf: "center",
  },
  startContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  startLeftContainer: {
    flex: 1,
    padding: 8,
    gap: 5,
  },
  startLeftText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  startLevelContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  startLevel: {
    display: "flex",
    width: 50,
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 8,
  },
  startLevelText: {
    color: "white",
  },
  startLevelProgressBar: {
    flex: 1,
    height: 10,
    backgroundColor: "#dfdfdf",
    borderRadius: 6,
    overflow: "hidden",
    position: "relative",
  },
  startLevelProgressBarFilled: {
    height: "100%",
    backgroundColor: "#FF775E",
    borderRadius: 6,
  },
  startRightContainer: {
    display: "flex",
    gap: 4,
    alignItems: "center",
    flexDirection: "row",
    color: "orange",
    padding: 8,
  },
  startRightText: {
    color: "#FF775E",
    fontWeight: "bold",
    fontSize: 18,
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
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
    marginHorizontal: 200,
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
    width: 45,
    borderRadius: 10,
    padding: 4,
    paddingVertical: 10,
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
  weekProgressContainer: {
    backgroundColor: "#f3f3f3",
    borderColor: "#d7d7d743",
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 16,
    gap: 12,
    marginVertical: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginHorizontal: 200,
    width: "100%",
  },
  weekProgressHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weekProgressHeaderTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  weekProgressHeaderWorkouts: {
    color: "#00b303",
  },
  weekProgressBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: "#dfdfdf",
    borderRadius: 6,
    overflow: "hidden",
    position: "relative",
  },
  weekProgressFilled: {
    height: "100%",
    backgroundColor: "#19cc69",
    borderRadius: 6,
  },
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
  allWorkoutsWorkoutInfo: {
  },
  allWorkoutsWorkoutTitle: {
    fontWeight: "bold",
  },
  allWorkoutsWorkoutMuscles: {
    color: "#7d7d7d",
  },
  allWorkoutsRightContainer: {
  },
});
