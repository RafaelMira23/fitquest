import { UserProvider } from '@/context/userContext';
import { WorkoutProvider } from '@/context/workoutContext';
import Navigation from '@/components/navigation';

export default function RootLayout() {
  return (
    <UserProvider>
      <WorkoutProvider>
        <Navigation />
      </WorkoutProvider>
    </UserProvider>
  )
}