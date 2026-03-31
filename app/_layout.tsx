import { WorkoutProvider } from '../context/workoutContext'
import { UserProvider } from '../context/userContext'
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <UserProvider>
      <WorkoutProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
      </WorkoutProvider>
    </UserProvider>
  )
}