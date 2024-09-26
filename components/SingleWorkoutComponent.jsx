// SingleWorkoutComponent.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SingleWorkoutComponent = () => {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    // Fetch data for a single workout item
    const fetchWorkout = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + `/workouts`);
        const result = await response.json();
        console.log('Workout:', response);
        setWorkout(result);
      } catch (error) {
        console.error('Error fetching workout:', error);
      }
    };

    fetchWorkout();
  }, []);

  if (!workout) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
        {workout.map((workout) => (
            <Text style={styles.name}>{workout.title}</Text>
        ))}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
    },
});

export default SingleWorkoutComponent;