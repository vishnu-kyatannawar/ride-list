import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { Ride } from '../types';

export default function RideTile({ ride }: { ride: Ride }) {
    return (
        <View style={styles.container}>
            <Text>{ ride.place }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        borderColor: 'ff0000',
    }
});
