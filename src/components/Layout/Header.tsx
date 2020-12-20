import React from 'react';
import { Container, Box, Flex, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <Box as="header" py={6}>
      <Container maxW="4xl" px={4}>
        <Flex justify="space-between" align="center">
          <Heading size="md"> Header </Heading>
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};
