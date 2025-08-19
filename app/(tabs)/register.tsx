import { Stack } from 'expo-router';

import { StyleSheet, View, Text } from 'react-native';
import { config } from '../../tamagui.config'
import { TamaguiProvider } from 'tamagui'

import Registerr from '~/components/register';

export default function Register() {

  return (
    <>
      <Stack.Screen options={{ title: 'Registro' }} />
      <View style={styles.container}>
        <TamaguiProvider config={config}>
          <Registerr />
        </TamaguiProvider>
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
