import { useUser } from '@/context/userContext'
import { useRouter, Stack } from "expo-router";
import { useEffect } from 'react';

/* Para não ficar confuso:
O navigation foi adicionado para respeitar o sistema de renderização do react.
Para fazer o login ou registro do usuário, o app precisa da informação do context que estava dentro do return tentando usar algo que nem tinha acesso ainda.
*/

export default function Navigation() {
    const {user, loading} = useUser();
    const router = useRouter();
    
    useEffect(() => {
        if (!loading) {;
            if (!user) {
                router.replace("/auth/register");
            }
            else {
                router.replace("/(tabs)");
            }
        }
    },[loading, user])
    if (loading) {
        return null;
    }
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
        </Stack>
    )
}