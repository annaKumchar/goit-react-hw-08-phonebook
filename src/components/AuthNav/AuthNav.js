import { Flex, Text } from '@chakra-ui/react';
import { NavigationLink } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <Flex mr={0}>
      <NavigationLink to="/register">
        <Text mr={10}>Register</Text>
      </NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </Flex>
  );
};
