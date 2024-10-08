import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, StyleSheet, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useUser } from '@/context/UserContext';

import ExercisesList from '@/components/ExercisesList';

export default function TabTwoScreen() {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <Text className="text-2xl font-bold text-spartan-red-600 dark:text-spartan-red-200 bright">Profile</Text>
      {user && user.username && (
        <>
          <Text className="text-lg text-spartan-red-600 dark:text-spartan-red-200 bright">
            Welcome, {user.username}!
          </Text>
          <Button
            title="Logout"
            onPress={handleLogout}
            color="#FF0000"
            className="mt-4 p-2 bg-red-600 text-white rounded"
          />
        </>
      )}

      <Collapsible title="Exercises">
        <ExercisesList />
      </Collapsible>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#80F080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});