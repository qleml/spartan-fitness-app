import { Stack } from 'expo-router';

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="code-of-conduct" options={{ 
                headerTitle: 'Code of Conduct',
                headerBackTitle: 'Back',
            }} />
        </Stack>
    );
};

export default AuthLayout;
