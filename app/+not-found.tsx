import { Text, View, StyleSheet } from 'react-native';
import { usePathname } from 'expo-router';

export default function NotFound() {
    const pathname = usePathname();
    return (
        <View style={styles.container}>
            <Text style={styles.content}>Page: "{pathname.replace("/", "")}"<br/>Not Found</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    content: {
        fontSize: 30,
        textAlign: "center",
    }
});