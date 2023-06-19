import { Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Heading textAlign="center">Error</Heading>
      <Text textAlign="center" mt={4}>
        {isRouteErrorResponse(error)
          ? "This Page does not exsit"
          : "an error has accured"}
      </Text>
    </>
  );
};

export default ErrorPage;
