import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { getUsuarios } from "../database";

export default function HomeScreen({ route, navigation }: any) {
  const [correo, setCorreo] = useState<string>("");

  useEffect(() => {
    const userCorreo = route.params?.correo;
    if (userCorreo) setCorreo(userCorreo);

    getUsuarios((usuarios) => {
      console.log("Usuarios en DB:", usuarios);
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bienvenido, {correo}</Text>
      <Button title="Cerrar sesión" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}