import { Center, Text, VStack } from "native-base";
import React from "react";
import { ToggleDarkMode } from "../components/ToggleDarkMode";
import { useHelloQuery } from "@bt/shared";

export const Home = () => {
  const { data, loading } = useHelloQuery();

  if (loading) {
    return <Text> Loading ... </Text>;
  }

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Text color="primary.500" fontSize={"xl"}>
          {data?.hello}
        </Text>
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
};
