import { StyleSheet, Text, View } from "react-native";
import { getWeeklyProgress } from "../../services/workout.service";
import { useEffect, useState } from "react";
import { WeeklyProgress } from "@/types/workout";

export default function WeekProgress() {
  const [weeklyProgress, setWeeklyProgress] = useState<WeeklyProgress | null>(null);

  useEffect(() => {
    async function loadProgress() {
      const data = await getWeeklyProgress();
      setWeeklyProgress(data);
    }

    loadProgress();
  }, []);

  const sessions = weeklyProgress?.sessions.length ?? 0;
  const goal = weeklyProgress?.goal ?? 0;

  const progressPercent = goal > 0 ? (sessions / goal) * 100 : 0;

  return (
    <View style={styles.weekProgressContainer}>
      <View style={styles.weekProgressHeaderContainer}>
        <Text style={styles.weekProgressHeaderTitle}>
          Progresso da semana
        </Text>

        <Text style={styles.weekProgressHeaderWorkouts}>
          {sessions}/{goal}
        </Text>
      </View>

      <View style={styles.weekProgressBarContainer}>
        <View
          style={[
            styles.weekProgressFilled,
            { width: `${progressPercent}%` },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
