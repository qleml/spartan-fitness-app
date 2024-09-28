import { Text, View } from 'react-native';
import { useSegments } from 'expo-router';

const CodeOfConduct = () => {

    const segments = useSegments();

    return (

        <View>
            <Text className="text-xl font:bold dark:text-red-200 text-center p-5">
                Code of Conduct
            </Text>
            <Text className="dark:text-red-200 text-center p-5">
                When you do calisthenics, you must follow the rules.
                No machines, no weights, no excuses.
            </Text>
            <Text className="dark:text-red-200 text-center p-5">
                If you break the rules, you will be banned. 
            </Text>
        </View>
    );
};

export default CodeOfConduct;
