import { loginSchema, useHelloQuery } from "@bt/shared";
import { Input, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import React from "react";

const Index: React.FC<{}> = () => {
  const { data, loading } = useHelloQuery();

  if (loading) {
    return <Text> Loading... </Text>;
  }

  return (
    <Container height="100vh">
      <Formik
        initialValues={{ usernameOrEmail: "" }}
        validationSchema={loginSchema}
        validateOnChange
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, errors }) => (
          <Form>
            <Input
              name="usernameOrEmail"
              value={values.usernameOrEmail}
              onChange={handleChange}
            />
            <Input type="submit" placeholder="Submit" />
            <pre> {JSON.stringify(data)} </pre>
            <pre> {JSON.stringify(values)} </pre>
            <pre> {JSON.stringify(errors)} </pre>
          </Form>
        )}
      </Formik>
      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
