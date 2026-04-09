import ProgressBar from "@/components/home/ui/progressBar";
import { useUser } from "@/context/userContext";
import { Flame } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  const { user } = useUser();
  const xp = user?.xp ?? 0;
  const xpToNextLevel = user?.xpToNextLevel ?? 1;

  return (
    <View style={styles.startContainer}>
      <View style={styles.startLeftContainer}>
        <Text style={styles.startLeftText}>
          Olá, {user?.name ?? "Usuário"}!
        </Text>
        <View style={styles.startLevelContainer}>
          <View style={styles.startLevel}>
            <Text style={styles.startLevelText}>LVL {user?.level}</Text>
          </View>
          <ProgressBar current={xp} total={xpToNextLevel} color={"#FF775E"} />
        </View>
      </View>
      <View style={styles.startRightContainer}>
        <Flame fill={"orange"} stroke={"none"} />
        <Text style={styles.startRightText}>{user?.streak}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
