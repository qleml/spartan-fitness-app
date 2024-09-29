import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useSQLiteContext } from 'expo-sqlite';
import { resetDatabase } from '@/db/database';
import DatabaseInfo from '@/components/DatabaseInfo';

const Settings: React.FC = () => {
  const db = useSQLiteContext();

  const handleReset = async () => {
    Alert.alert(
      'Reset App',
      'Are you sure you want to reset the app? This will delete all your data.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: async () => {
            await resetDatabase(db);
            Alert.alert('Reset Successful', 'The app has been reset to its initial state.');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <Button title="Reset App" onPress={handleReset} />
        <DatabaseInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Settings;