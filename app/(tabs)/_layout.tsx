import { House, Library, Trophy, User } from 'lucide-react-native';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false,  tabBarActiveTintColor: "green" }}>
      <Tabs.Screen name="index" options={{tabBarIcon: ({color}) => (<House color={color}/>)}}/>
      <Tabs.Screen name="library" options={{tabBarIcon: ({color}) => (<Library color={color}/>)}}/>
      <Tabs.Screen name="achievements" options={{tabBarIcon: ({color}) => (<Trophy color={color}/>)}}/>
      <Tabs.Screen name="profile" options={{tabBarIcon: ({color}) => (<User color={color}/>)}}/>
    </Tabs>
  );
}
