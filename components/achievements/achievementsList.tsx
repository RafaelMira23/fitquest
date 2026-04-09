import { Achievement } from '@/types/achievements';
import { Text, View, StyleSheet } from 'react-native';


export default function AchievementsList({ props } : { achivements: any[], userAchivements: any[] }) {
    return (
        <View className="achivementsListContainer">
            {props.achivements.map( (achievement: Achievement ) => (
                <View key={achievement.id} >
                    <View>
                        <Text className="achivementName">{achievement.name}</Text>
                        <Text className="achivementDescription">{achievement.description}</Text>
                        <Text className="achivementComment">{achievement.comment}</Text>
                        <Text>{achievement.current} of {achievement.target}</Text>
                    </View>
                    
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    achivementsListContainer: {},
    achivementName: {},
    achivementDescription: {},
    achivementComment: {},
});