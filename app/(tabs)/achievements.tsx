import { getAllAchievements, getAllUserAchievements } from '@/services/achievements.service';
import { Achievement, UserAchievement } from '@/types/achievements';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trophy } from "lucide-react-native";
import { useEffect, useState } from 'react';
import { useUser } from '@/context/userContext';

export default function Achievements() {
    const [allAchivements, setAllAchivements] = useState<Achievement[]>([]);
    const [allUserAchivements, setAllUserAchivements] = useState<UserAchievement[]>([]);
    const { user, token } = useUser();
    const userId = user?.id;

    useEffect(() => {
        async function loadAllAchivements() {
            const data = await getAllAchievements();
            setAllAchivements(data);
        }
        async function loadAllUserAchivements(userId: number, token: string | null) {
            const data = await getAllUserAchievements(userId, token);
            setAllUserAchivements(data);
        }
        loadAllAchivements();
        if (!user || !userId) {
            setAllUserAchivements([]);
        } else {
            loadAllUserAchivements(userId, token);
        }
    }, [userId, token]);
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topContainer}>
                    <Text>Achievements</Text>
                    <Text>{allUserAchivements.length} of {allAchivements.length} unlocked</Text>
                    <View style={styles.topMainContainer}>
                        <View style={styles.TrophyIconContainer}>
                            <Trophy/>
                        </View>
                        <View>
                            <Text>{allUserAchivements.length}</Text>
                            <Text>Achievements Ganhos</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.allAchievementsContainer}>
                    <View style={styles.basic}>
                        <Text>O começo</Text>
                        <allAchivements tag={basic}/>
                    </View>
                    <View style={styles.volume}>
                        <Text>Foco no exercicio</Text>
                        <allAchivements tag={volume}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {},
    topContainer: {}

);