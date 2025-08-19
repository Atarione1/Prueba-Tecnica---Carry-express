import { Link, Stack } from 'expo-router';
import MapView, { Marker } from "react-native-maps"
import { Platform, StyleSheet, View } from 'react-native';
import { Button } from 'tamagui';

export default function Home() {
  if (Platform.OS === "web") {
    return (
      <>
        <Stack.Screen options={{ title: 'Map' }} />
        <View style={styles.container}>
          <Link href="/">

            <Button
              size="$4"
              br="$4"
              w="200px"
              variant="outlined"
              paddingHorizontal={10}
              backgroundColor={'black'}
              color="white"
              hoverStyle={{ backgroundColor: "black" }}
              pressStyle={{ backgroundColor: "black" }}
            >
              Desloguear
            </Button>


          </Link>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3214414489807!2d-74.12355722429047!3d4.714115841539629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f84a90a69a739%3A0xfa0c6f9d490f4e09!2zQ3JhLiAxMTAgIyA3NkQtNTIsIEVuZ2F0aXbDoSwgQm9nb3TDoSwgRC5DLiwgQm9nb3TDoSwgQm9nb3TDoSwgRC5DLg!5e0!3m2!1ses-419!2sco!4v1755358678008!5m2!1ses-419!2sco" allowFullScreen style={{ border: 0, width: "100%", height: "100%" }} loading="lazy"></iframe>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
