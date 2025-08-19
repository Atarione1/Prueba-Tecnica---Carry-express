import { Stack } from 'expo-router';

import { StyleSheet, View, Text } from 'react-native';
import Login from '../components/login';



export default function index() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login', }} />
      <View style={styles.container}>
        <Login />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
