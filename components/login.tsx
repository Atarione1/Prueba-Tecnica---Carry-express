import { YStack, Input, Button, Text } from 'tamagui'
import { useState } from 'react'
import { Link, router } from 'expo-router'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase-config';
import { Alert } from 'react-native';
import useAuthStore from '../auth/useAuthStore';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  // const setUser = useAuthStore.getState().setUser => DECLARAR CONSTANTE CON LA FUNCION DE AUTHSTORE DE ZUSTAND
  const hanleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario autenticado:', user);
        Alert.alert('Éxito', 'Inicio de sesión exitoso');
        window.alert("Éxito', 'Inicio de sesión exitoso 🌐");
        // setUser(user) => SETEAR EL USUARIO EN EL AUTHSTORE DE ZUSTAND
        router.push("/map")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al iniciar sesión:', errorCode, errorMessage);
        Alert.alert('Error', `Error al iniciar sesión: ${errorMessage}`);
        window.alert(`Error al iniciar sesión: ${errorMessage}`);

      });
  }

  return (
    <YStack f={1} jc="center" ai="center" bg="$background" p="$4">
      <YStack
        w="100%"
        maxWidth={420}
        p="$5"
        br="$4"
        bg="$color2"
        gap="$4"
        shadowColor="rgba(0,0,0,0.1)"
        shadowRadius={10}
      >
        <Text
          fontSize={28}
          fontWeight="bold"
          color="$color12"
          textAlign="center"
        >
          Iniciar sesión
        </Text>

        <Input
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          w="100%"
        />

        <Input
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          w="100%"
        />

        <Button backgroundColor={'black'} hoverStyle={{ backgroundColor: "black" }} pressStyle={{ backgroundColor: "black" }} color={'white'} size="$4" br="$4" w="100%" onPress={hanleSingIn}>
          Entrar
        </Button>
        <Link href="/register">

          <Button
            size="$4"
            br="$4"
            w="100%"
            variant="outlined"

          >
            Crear cuenta
          </Button>


        </Link>
      </YStack>
    </YStack>
  )
}
