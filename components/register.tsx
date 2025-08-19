import { YStack, Input, Button, Text } from 'tamagui'
import { useState } from 'react'
import { Link, router } from 'expo-router'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '~/firebase-config'
import { Alert } from 'react-native'



export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Cuenta creada con éxito:', user);
        Alert.alert('Éxito', 'Cuenta creada con éxito');
        window.alert('Cuenta creada con éxito');
        router.push("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', `Error al crear la cuenta: ${errorMessage}`);
        console.error('Error al crear la cuenta:', errorCode, errorMessage);
        window.alert(errorMessage);

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
          Registro
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

        <Button backgroundColor={'black'} hoverStyle={{ backgroundColor: "black" }} pressStyle={{ backgroundColor: "black" }} color="white" size="$4" br="$4" w="100%" onPress={handleCreateAccount}>
          Registrar
        </Button>

      </YStack>
    </YStack>
  )
}
