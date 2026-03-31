import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trophy } from "lucide-react-native";
import { useState } from 'react';

export default function Achievements() {
    const [workouts, setWorkouts] = useState([
        {id: 1, name: "Primeiros passos", description: "Termine o seu primeiro treino", unlocked: true}
    ]);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topContainer}>
                    <Text>Achievements</Text>
                    <Text>{workouts.filter((w) => w.unlocked).length} of {workouts.length} unlocked</Text>
                    <View style={styles.topMainContainer}>
                        <View style={styles.TrophyIconContainer}>
                            <Trophy/>
                        </View>
                        <View>
                            <Text>{workouts.filter((w) => w.unlocked).length}</Text>
                            <Text>Achievements Ganhos</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.WorkoutContainer}>
                
                </View>
                <View style={styles.StreakContainer}>
                </View>
                
            </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {},
    topContainer: {},
    topMainContainer: {},
    TrophyIconContainer: {},
    WorkoutContainer: {},
    StreakContainer: {},
})