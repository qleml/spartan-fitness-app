import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Button } from 'react-native';
import { useUser } from '@/context/UserContext';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleLogin = () => {
    console.log('CMT: LoginScreen: Logging in with username:', username);
    setUser({ username });
    };  

  return (
    <ScrollView className="flex p-4 mt-24">
      <Text className="text-2xl font-bold text-center mb-4 dark:text-gold-300">Welcome to Spartan Fitness</Text>
      <TextInput
        className="h-10 border border-gray-300 rounded mb-4 px-2 dark:text-gold-300"
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />

      <Link href="/code-of-conduct" className="text-blue-500 text-center mt-4">
        Code of Conduct
      </Link>
    </ScrollView>
  );
}