import { ProgressBarProps } from "@/types/progressBar.types";
import { StyleSheet, View } from "react-native";

export default function ProgressBar(props: ProgressBarProps) {
    const progressPercent = props.total > 0 ? (props.current / props.total) * 100 : 0;
    
    return (
        <View style={styles.progressBarContainer}>
            <View
                style={[styles.weekProgressFilled,  
                { width: `${progressPercent}%` }, { backgroundColor: `${props.color}`}]}
            />
        </View>
  );
}

const styles = StyleSheet.create({
  progressBarContainer: {
    height: 10,
    backgroundColor: "#dfdfdf",
    borderRadius: 6,
    overflow: "hidden",
    position: "relative",
    width: "100%",
  },
  weekProgressFilled: {
    height: "100%",
    borderRadius: 6,
  },
});
