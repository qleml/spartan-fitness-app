import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styled } from 'nativewind';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


const StyledView = styled(View);
const StyledText = styled(Text);

const SingleWorkoutComponent = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch(`http://192.168.1.66:7050/api/workouts`);
        const result = await response.json();
        console.log('Workout:', result);
        setWorkouts(result);
      } catch (error) {
        console.error('Error fetching workout:', error);
      }
    };

    fetchWorkout();
  }, []);

  if (!workouts) {
    return <StyledText className="text-gray-500">Loading...</StyledText>;
  }

  return (
    <StyledView className="p-2 w-full">
      {workouts.map((workout) => (
        <StyledView key={workout.id} className="mb-4 bg-gray-800 p-5 rounded-3xl w-full border-4 border-gray-700">
          <StyledText className="font-bold text-2xl text-white">{workout.title}</StyledText>
          <StyledText className="text-red-200 font-semibold">{workout.user.username}</StyledText>
          <StyledText className="text-gray-200">
            {dayjs(workout.created_at).fromNow()}
          </StyledText>  
        </StyledView>
      ))}
    </StyledView>
  );
};

export default SingleWorkoutComponent;