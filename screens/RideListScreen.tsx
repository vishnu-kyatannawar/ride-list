import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import RideTile from '../components/RideTile';
import { RootTabScreenProps, Ride } from '../types';

export default function RideListScreen({ navigation }: RootTabScreenProps<'RideList'>) {
  const [rideList, setRideList] = useState<Ride[]>([{
    id: 1,
    place: 'Place A',
    status: 1
  },
  {
    id: 2,
    place: 'Place B',
    status: 1
  }]);

  return (
    <View style={ styles.container }>
      {rideList.map((ride) => {
        return <RideTile key  = { ride.id } ride={ ride } />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: '20px',
  }
});
