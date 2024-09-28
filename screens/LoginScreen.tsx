import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useUser } from '@/context/UserContext';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleLogin = () => {
    setUser({ username });
  };

  return (
    <View className="flex-1 justify-center p-4">
      <Text className="text-2xl font-bold text-center mb-4">Welcome to Spartan Fitness</Text>
      <TextInput
        className="h-10 border border-gray-300 rounded mb-4 px-2"
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        className="h-10 border border-gray-300 rounded mb-4 px-2"
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
}